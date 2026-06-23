(function () {
  'use strict';

  var LOGO_SVG = '<svg width="22" height="30" viewBox="0 0 22 30" fill="none" xmlns="http://www.w3.org/2000/svg" class="logo-mark"><line x1="7" y1="1" x2="7" y2="29" stroke="#E8E3DB" stroke-width="1.8" stroke-linecap="round"/><path d="M7 6 C7 6 19 6 19 14 C19 22 7 22 7 22" stroke="#E8E3DB" stroke-width="1.8" stroke-linecap="round" fill="none"/></svg>';

  var PAGES = [
    {
      href: '/',
      label: 'Overview',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5L12 3l9 7.5V20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V10.5z"/><path d="M9 21V12h6v9"/></svg>'
    },
    {
      href: '/lp-color-guide',
      label: 'Color',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 3v4M12 17v4M3 12h4M17 12h4"/><circle cx="12" cy="12" r="3"/></svg>'
    },
    {
      href: '/lp-spacing-guide',
      label: 'Spacing',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="5" x2="21" y2="5"/><line x1="3" y1="19" x2="21" y2="19"/><line x1="12" y1="8" x2="12" y2="16"/><polyline points="9,10 12,7 15,10"/><polyline points="9,14 12,17 15,14"/></svg>'
    },
    {
      href: '/lp-layout-guide',
      label: 'Layout',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="3" y1="9" x2="21" y2="9"/></svg>'
    },
    {
      href: '/lp-imagery-guide',
      label: 'Imagery',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21,15 16,10 5,21"/></svg>'
    },
    {
      href: '/lp-typography-guide',
      label: 'Typography',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="4,7 4,4 20,4 20,7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg>'
    },
    {
      href: '/lp-responsiveness-guide',
      label: 'Responsiveness',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12" y2="18" stroke-width="2.5"/></svg>'
    },
    {
      href: '/lp-luxury-look-feel',
      label: 'Luxurious Look & Feel',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>'
    }
  ];

  var EXTERNAL_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>';

  function buildSidebar() {
    var currentPath = window.location.pathname.replace(/\.html$/, '').replace(/\/$/, '') || '/';
    var codaUrl = (typeof SITE_CONFIG !== 'undefined' && SITE_CONFIG.CODA_URL) ? SITE_CONFIG.CODA_URL : '#';

    var navLinks = PAGES.map(function (page) {
      var normalizedHref = page.href === '/' ? '/' : page.href;
      var isActive = (currentPath === normalizedHref) || (currentPath === '' && normalizedHref === '/');
      return '<a href="' + page.href + '" class="nav-link' + (isActive ? ' active' : '') + '">' +
        page.icon + '<span>' + page.label + '</span></a>';
    }).join('');

    var html =
      '<a href="/" class="sidebar-logo">' +
        LOGO_SVG +
        '<div class="logo-text">' +
          '<span class="logo-text-main">Luxury Presence</span>' +
          '<span class="logo-text-sub">Design Hub</span>' +
        '</div>' +
      '</a>' +
      '<nav class="sidebar-nav">' +
        '<div class="nav-section-label">Design Principles</div>' +
        navLinks +
      '</nav>' +
      '<div class="sidebar-footer">' +
        '<a href="' + codaUrl + '" target="_blank" rel="noopener noreferrer" class="coda-link">' +
          EXTERNAL_ICON +
          '<span>WB Design Principles Development Hub - Main Sheet</span>' +
        '</a>' +
      '</div>';

    var sidebar = document.getElementById('sidebar');
    if (sidebar) sidebar.innerHTML = html;
  }

  function initHamburger() {
    var hamburger = document.getElementById('hamburger');
    var sidebar = document.getElementById('sidebar');
    var overlay = document.getElementById('overlay');
    if (!hamburger || !sidebar || !overlay) return;

    hamburger.addEventListener('click', function () {
      sidebar.classList.toggle('open');
      overlay.classList.toggle('visible');
    });

    overlay.addEventListener('click', function () {
      sidebar.classList.remove('open');
      overlay.classList.remove('visible');
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    buildSidebar();
    initHamburger();
  });
})();
