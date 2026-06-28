/**
 * warpKRON Community App — demand signal form (localStorage only)
 */
(function () {
  'use strict';

  const STORAGE_KEY = 'warpkron-demand-signal-v1';

  function el(id) {
    return document.getElementById(id);
  }

  function loadSaved() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (_) {
      return null;
    }
  }

  function showSuccess(saved) {
    const form = el('signal-form');
    const success = el('signal-success');
    if (form) form.hidden = true;
    if (success) {
      success.hidden = false;
      const when = saved && saved.submittedAt ? new Date(saved.submittedAt).toLocaleString() : '';
      const ref = el('signal-ref');
      if (ref) ref.textContent = saved && saved.ref ? saved.ref : '';
      const whenEl = el('signal-when');
      if (whenEl) whenEl.textContent = when;
    }
  }

  function makeRef() {
    const rand = Math.random().toString(36).slice(2, 8).toUpperCase();
    return 'WK-SIG-' + rand;
  }

  function init() {
    const saved = loadSaved();
    if (saved) showSuccess(saved);

    const form = el('signal-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const payload = {
        ref: makeRef(),
        submittedAt: new Date().toISOString(),
        displayName: String(fd.get('displayName') || '').trim(),
        region: String(fd.get('region') || '').trim(),
        interest: String(fd.get('interest') || '').trim(),
        wallet: String(fd.get('wallet') || '').trim(),
        message: String(fd.get('message') || '').trim(),
        disclaimerAccepted: fd.get('disclaimer') === 'on'
      };

      if (!payload.displayName || !payload.interest || !payload.disclaimerAccepted) {
        alert('Please fill required fields and accept the disclaimer.');
        return;
      }

      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
      } catch (_) {
        alert('Could not save on this device. Check browser storage settings.');
        return;
      }

      showSuccess(payload);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    const clearBtn = el('signal-clear-btn');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        if (!confirm('Clear your saved demand signal on this device?')) return;
        try {
          localStorage.removeItem(STORAGE_KEY);
        } catch (_) { /* ignore */ }
        location.reload();
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
