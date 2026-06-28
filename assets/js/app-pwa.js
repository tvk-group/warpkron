/**
 * warpKRON Community App — PWA install prompt, install sheet, service worker
 * (puppyKRON / SOVRA parity — always-visible install CTA + platform instructions)
 */
(function () {
  'use strict';

  const PROMPT_KEY = 'warpkron-pwa-prompt-v1';
  let deferredPrompt = null;

  function isStandalone() {
    return (
      window.matchMedia('(display-mode: standalone)').matches ||
      window.navigator.standalone === true
    );
  }

  function isIos() {
    return /iphone|ipad|ipod/i.test(navigator.userAgent);
  }

  function isAndroid() {
    return /android/i.test(navigator.userAgent);
  }

  function registerSw() {
    if (!('serviceWorker' in navigator)) return;
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js', { scope: '/' }).catch(() => {});
    });
  }

  function ensureInstallSheet() {
    if (document.getElementById('pwa-install-sheet')) return;
    const sheet = document.createElement('div');
    sheet.id = 'pwa-install-sheet';
    sheet.className = 'pwa-install-sheet';
    sheet.hidden = true;
    sheet.innerHTML =
      '<div class="pwa-install-backdrop" data-pwa-close></div>' +
      '<div class="pwa-install-panel" role="dialog" aria-modal="true" aria-labelledby="pwa-install-title">' +
      '<button type="button" class="pwa-install-close" data-pwa-close aria-label="Close">×</button>' +
      '<img src="/assets/icons/icon-192.png" alt="" width="64" height="64" class="pwa-install-icon" />' +
      '<h2 id="pwa-install-title">Install warpKRON</h2>' +
      '<p id="pwa-install-lead" class="pwa-install-lead">Add warpKRON to your home screen for one-tap access to the community portal.</p>' +
      '<div id="pwa-install-steps" class="pwa-install-steps"></div>' +
      '<button type="button" class="btn-app primary btn-block" id="pwa-sheet-native-btn" hidden>Install now</button>' +
      '<p class="pwa-install-note" id="pwa-install-note"></p>' +
      '</div>';
    document.body.appendChild(sheet);
    sheet.querySelectorAll('[data-pwa-close]').forEach((el) => {
      el.addEventListener('click', closeInstallSheet);
    });
    const nativeBtn = sheet.querySelector('#pwa-sheet-native-btn');
    if (nativeBtn) {
      nativeBtn.addEventListener('click', async () => {
        if (!deferredPrompt) return;
        deferredPrompt.prompt();
        const choice = await deferredPrompt.userChoice;
        deferredPrompt = null;
        if (choice.outcome === 'accepted') closeInstallSheet();
        updateInstallButtons();
      });
    }
  }

  function openInstallSheet() {
    ensureInstallSheet();
    const sheet = document.getElementById('pwa-install-sheet');
    const steps = document.getElementById('pwa-install-steps');
    const lead = document.getElementById('pwa-install-lead');
    const note = document.getElementById('pwa-install-note');
    const nativeBtn = document.getElementById('pwa-sheet-native-btn');
    if (!sheet || !steps) return;

    const appPath = location.origin + '/app.html';

    if (isIos()) {
      if (lead) lead.textContent = 'On iPhone and iPad, install via Safari:';
      steps.innerHTML =
        '<ol>' +
        '<li>Open this page in <strong>Safari</strong> (not an in-app browser).</li>' +
        '<li>Tap the <strong>Share</strong> button <span class="pwa-share-icon" aria-hidden="true">⎋</span> at the bottom.</li>' +
        '<li>Scroll and tap <strong>Add to Home Screen</strong>.</li>' +
        '<li>Tap <strong>Add</strong> — warpKRON appears on your home screen.</li>' +
        '</ol>';
      if (note) {
        note.textContent =
          'iOS does not support one-click install buttons. Add to Home Screen is the official install method.';
      }
      if (nativeBtn) nativeBtn.hidden = true;
    } else if (deferredPrompt) {
      if (lead) lead.textContent = 'Install warpKRON as a standalone app on this device:';
      steps.innerHTML =
        '<p>Tap <strong>Install now</strong> below. Chrome will add warpKRON to your home screen or app drawer.</p>';
      if (note) note.textContent = '';
      if (nativeBtn) nativeBtn.hidden = false;
    } else if (isAndroid()) {
      if (lead) lead.textContent = 'Install from Chrome on Android:';
      steps.innerHTML =
        '<ol>' +
        '<li>Open <strong>' +
        appPath +
        '</strong> in Chrome.</li>' +
        '<li>Tap the <strong>⋮</strong> menu (top right).</li>' +
        '<li>Tap <strong>Install app</strong> or <strong>Add to Home screen</strong>.</li>' +
        '<li>Confirm — warpKRON installs like a native app.</li>' +
        '</ol>';
      if (note) note.textContent = 'If you do not see Install app, refresh the page once and try again.';
      if (nativeBtn) nativeBtn.hidden = true;
    } else {
      if (lead) lead.textContent = 'Install on desktop (Chrome or Edge):';
      steps.innerHTML =
        '<ol>' +
        '<li>Look for the <strong>install</strong> icon in the address bar (⊕ or computer icon).</li>' +
        '<li>Or open the browser menu → <strong>Install warpKRON</strong>.</li>' +
        '<li>Confirm to pin the community app to your desktop or taskbar.</li>' +
        '</ol>';
      if (note) note.textContent = 'Use Chrome or Edge for the best install experience.';
      if (nativeBtn) nativeBtn.hidden = true;
    }

    sheet.hidden = false;
    document.body.classList.add('pwa-sheet-open');
    try {
      sessionStorage.setItem(PROMPT_KEY, '1');
    } catch (_) { /* ignore */ }
  }

  function closeInstallSheet() {
    const sheet = document.getElementById('pwa-install-sheet');
    if (sheet) sheet.hidden = true;
    document.body.classList.remove('pwa-sheet-open');
  }

  function updateInstallButtons() {
    const buttons = document.querySelectorAll('[data-pwa-install]');
    const standalone = isStandalone();
    buttons.forEach((btn) => {
      if (standalone) {
        btn.hidden = true;
      } else {
        btn.hidden = false;
        if (deferredPrompt && !isIos()) {
          btn.textContent = btn.dataset.labelNative || 'Install app';
        } else {
          btn.textContent = btn.dataset.labelManual || 'Add to Home Screen';
        }
      }
    });
    const banner = document.getElementById('pwa-install-banner');
    if (banner) banner.hidden = standalone || !(deferredPrompt || isIos() || isAndroid());
  }

  async function handleInstallClick(e) {
    if (e && e.preventDefault) e.preventDefault();
    if (isStandalone()) return;
    if (deferredPrompt && !isIos()) {
      deferredPrompt.prompt();
      const choice = await deferredPrompt.userChoice;
      deferredPrompt = null;
      updateInstallButtons();
      if (choice.outcome !== 'accepted') openInstallSheet();
      return;
    }
    openInstallSheet();
  }

  function maybeAutoPrompt() {
    if (isStandalone()) return;
    const onAppPage = /\/app\.html$/.test(location.pathname) || location.pathname === '/app';
    if (!onAppPage) return;

    if (location.hash === '#install') {
      openInstallSheet();
      return;
    }

    try {
      if (!sessionStorage.getItem(PROMPT_KEY)) {
        setTimeout(openInstallSheet, 600);
      }
    } catch (_) {
      /* storage blocked */
    }
  }

  function mountInstallUi() {
    if (isStandalone()) {
      document.documentElement.classList.add('pwa-standalone');
      return;
    }

    ensureInstallSheet();

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPrompt = e;
      updateInstallButtons();
    });

    document.querySelectorAll('[data-pwa-install]').forEach((btn) => {
      btn.addEventListener('click', handleInstallClick);
    });

    const bannerBtn = document.getElementById('pwa-install-banner-btn');
    if (bannerBtn) bannerBtn.addEventListener('click', handleInstallClick);

    updateInstallButtons();

    if (isIos()) {
      const iosHint = document.getElementById('pwa-ios-hint');
      if (iosHint) iosHint.hidden = false;
    }

    maybeAutoPrompt();
  }

  registerSw();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mountInstallUi);
  } else {
    mountInstallUi();
  }

  window.WARPKRON_PWA = {
    isStandalone,
    isIos,
    isAndroid,
    openInstallSheet,
    closeInstallSheet,
    triggerInstall: handleInstallClick
  };
})();
