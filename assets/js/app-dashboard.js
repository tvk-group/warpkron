/**
 * warpKRON Community App — dashboard (reads KRON_DATA)
 */
(function () {
  'use strict';

  const SIGNAL_KEY = 'warpkron-demand-signal-v1';

  function el(id) {
    return document.getElementById(id);
  }

  function hasSignal() {
    try {
      return !!localStorage.getItem(SIGNAL_KEY);
    } catch (_) {
      return false;
    }
  }

  function renderKpis(data) {
    const token = data.token || {};
    const pending = data.contract && data.contract.pending;

    const statusEl = el('dash-status');
    if (statusEl) {
      statusEl.textContent = pending ? 'Demand-gated · Pending' : 'Deployed';
    }

    const phaseEl = el('dash-phase');
    if (phaseEl) phaseEl.textContent = 'Phase ' + (token.phase || 'III');

    const networkEl = el('dash-network');
    if (networkEl) networkEl.textContent = token.network || 'Base';

    const supplyEl = el('dash-supply');
    if (supplyEl) supplyEl.textContent = token.totalSupply || '10B';
  }

  function renderContract(data) {
    const card = el('dash-contract-body');
    if (!card) return;

    const pending = data.contract && data.contract.pending;
    if (pending) {
      card.innerHTML =
        '<p><strong>No contract deployed yet.</strong> warpKRON is Phase III demand-gated. ' +
        'The official address will appear on the <a href="/verify/">verification page</a> only after fair launch.</p>' +
        '<p style="margin-top:10px">Fair launch only — no presale, no private sale.</p>';
      return;
    }

    card.innerHTML =
      '<p>Official contract is live. Verify all addresses on the registry page before interacting.</p>' +
      '<p style="margin-top:10px"><a class="btn-app primary sm" href="/verify/">Open verification registry →</a></p>';
  }

  function renderFamily(data) {
    const list = el('dash-family-list');
    if (!list || !data.familyTokens) return;

    list.innerHTML = data.familyTokens
      .map((t) => {
        const current = t.badge === 'current' ? ' (you are here)' : '';
        return (
          '<div class="dash-family-item">' +
          '<a href="' +
          t.url +
          '" target="_blank" rel="noopener">' +
          t.name +
          current +
          '</a>' +
          '<span class="phase">Phase ' +
          t.phase +
          '</span></div>'
        );
      })
      .join('');
  }

  function renderJourney() {
    const signalDone = hasSignal();
    const steps = document.querySelectorAll('.dash-journey-step');
    steps.forEach((step) => {
      const key = step.getAttribute('data-step');
      if (key === 'signal' && signalDone) step.classList.add('done');
      if (key === 'culture') step.classList.add('done');
    });

    const signalNote = el('dash-signal-note');
    if (signalNote) {
      signalNote.textContent = signalDone
        ? 'You submitted a community demand signal. Thank you — this is culture feedback, not an investment allocation.'
        : 'No demand signal saved on this device yet. Submit one from the Signal tab if you want to register community interest.';
    }
  }

  function init() {
    const data = window.KRON_DATA;
    if (!data) return;

    renderKpis(data);
    renderContract(data);
    renderFamily(data);
    renderJourney();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
