/**
 * warpKRON Community App — PWA install prompt + service worker
 */
(function () {
  'use strict';

  const APP_URL = 'https://www.warpkron.com/app.html';

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

  function registerSw() {
    if (!('serviceWorker' in navigator)) return;
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js', { scope: '/' }).catch(() => {});
    });
  }

  function mountInstallUi() {
    if (isStandalone()) return;

    const btn = document.getElementById('pwa-install-btn');
    const iosHint = document.getElementById('pwa-ios-hint');
    const banner = document.getElementById('pwa-install-banner');
    const bannerBtn = document.getElementById('pwa-install-banner-btn');

    if (isIos() && iosHint) iosHint.hidden = false;

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPrompt = e;
      if (btn) btn.hidden = false;
      if (banner) banner.hidden = false;
    });

    async function doInstall() {
      if (!deferredPrompt) {
        window.location.href = APP_URL + '#install';
        return;
      }
      deferredPrompt.prompt();
      await deferredPrompt.userChoice;
      deferredPrompt = null;
      if (btn) btn.hidden = true;
      if (banner) banner.hidden = true;
    }

    if (btn) btn.addEventListener('click', doInstall);
    if (bannerBtn) bannerBtn.addEventListener('click', doInstall);
  }

  registerSw();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mountInstallUi);
  } else {
    mountInstallUi();
  }

  window.WARPKRON_PWA = { isStandalone, isIos, getAppUrl: () => APP_URL };
})();
