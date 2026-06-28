/**
 * warpKRON Community App — shared chrome (header, tab bar, footer)
 */
(function () {
  'use strict';

  const PAGES = {
    app: { href: '/app.html', label: 'Home', tab: true },
    signal: { href: '/signal.html', label: 'Signal', tab: true },
    dashboard: { href: '/dashboard.html', label: 'Dashboard', tab: true },
    verify: { href: '/verify/', label: 'Verify', tab: true },
    site: { href: '/', label: 'Site', tab: false }
  };

  const TAB_ICONS = {
    app: '<path d="M3 9.5 12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1V9.5z"/>',
    signal: '<path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
    dashboard: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>',
    verify: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>'
  };

  function currentPage() {
    const path = location.pathname.replace(/\/$/, '') || '/';
    if (path.endsWith('app.html') || path === '/app') return 'app';
    if (path.endsWith('signal.html') || path === '/signal') return 'signal';
    if (path.endsWith('dashboard.html') || path === '/dashboard') return 'dashboard';
    if (path.includes('/verify')) return 'verify';
    return '';
  }

  function mountTopbar() {
    const mount = document.getElementById('app-topbar-mount');
    if (!mount) return;
    const page = currentPage();
    mount.innerHTML =
      '<div class="app-topbar">' +
      '<a class="brand" href="/app.html" aria-label="warpKRON app home">' +
      '<span class="brand-mark" aria-hidden="true"></span><span>warpKRON</span></a>' +
      '<nav class="app-topbar-links" aria-label="App links">' +
      '<a href="/" class="hide-mobile">Full site</a>' +
      '<a href="/verify/">Verify</a>' +
      (page !== 'app' ? '<a href="/app.html">App home</a>' : '') +
      '</nav></div>';
  }

  function mountTabbar() {
    const mount = document.getElementById('app-tabbar-mount');
    if (!mount) return;
    const page = currentPage();
    const tabs = ['app', 'signal', 'dashboard', 'verify'];
    let html = '<nav class="app-tabbar" aria-label="App navigation">';
    tabs.forEach((key) => {
      const p = PAGES[key];
      const active = page === key ? ' class="active" aria-current="page"' : '';
      const icon = TAB_ICONS[key] || '';
      html +=
        '<a href="' +
        p.href +
        '"' +
        active +
        '>' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">' +
        icon +
        '</svg>' +
        p.label +
        '</a>';
    });
    html += '</nav>';
    mount.innerHTML = html;
  }

  function mountFooter() {
    const mount = document.getElementById('app-footer-mount');
    if (!mount) return;
    mount.innerHTML =
      '<footer class="app-footer">' +
      'Experimental memecoin · No presale · No financial advice · ' +
      '<a href="/legal/risk.html">Risk</a> · ' +
      '<a href="/legal/terms.html">Terms</a> · ' +
      '<a href="mailto:team@warpkron.com">team@warpkron.com</a>' +
      '</footer>';
  }

  function init() {
    mountTopbar();
    mountTabbar();
    mountFooter();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.WARPKRON_APP = { currentPage, PAGES };
})();
