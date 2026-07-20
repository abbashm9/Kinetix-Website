/* Kinetix article theming: follows the visitor's system setting
   (prefers-color-scheme) with a manual override persisted in localStorage.
   Loaded synchronously in <head> so the theme lands before first paint. */
(function () {
  var doc = document.documentElement;
  function saved() {
    try { return localStorage.getItem('kx-theme'); } catch (e) { return null; }
  }
  var mq = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
  function apply(t) { doc.setAttribute('data-theme', t); }
  apply(saved() || (mq && mq.matches ? 'dark' : 'light'));
  if (mq && mq.addEventListener) {
    mq.addEventListener('change', function (e) {
      if (!saved()) apply(e.matches ? 'dark' : 'light');
    });
  }

  var css = [
    'html[data-theme="dark"] {',
    '  --bg:#0F1117; --bg-alt:#161923; --surface:#1A1D27;',
    '  --stroke:rgba(240,242,247,0.09); --stroke-md:rgba(240,242,247,0.15);',
    '  --text:#F0F2F7; --text-soft:#CFD4DE; --muted:#8892A4;',
    '  --teal-deep:#82BACA; --lime-dim:rgba(197,232,138,0.10);',
    '  color-scheme: dark;',
    '}',
    'html[data-theme="light"] { color-scheme: light; }',
    'html[data-theme="dark"] .nav {',
    '  background: rgba(15,17,23,0.55); border-color: rgba(240,242,247,0.12);',
    '  box-shadow: 0 4px 20px rgba(0,0,0,0.4);',
    '}',
    'html[data-theme="dark"] .nav.scrolled { background: rgba(15,17,23,0.82); box-shadow: 0 8px 40px rgba(0,0,0,0.5); }',
    'html[data-theme="dark"] .nav-cta { background: var(--lime); color: #0F1117; }',
    'html[data-theme="dark"] img { opacity: 0.92; }',
    'html[data-theme="dark"] img[src*="wordmark-dark"] { filter: brightness(0) invert(1); opacity: 1; }',
    '#kx-theme-toggle {',
    '  position: fixed; right: 24px; bottom: 92px; z-index: 500;',
    '  width: 46px; height: 46px; border-radius: 50%;',
    '  border: 1px solid var(--stroke-md); background: var(--surface); color: var(--text);',
    '  cursor: pointer; display: flex; align-items: center; justify-content: center;',
    '  box-shadow: 0 4px 16px rgba(0,0,0,0.14); transition: transform 0.2s var(--ease-out, ease);',
    '}',
    '#kx-theme-toggle:hover { transform: translateY(-2px); }',
    '#kx-theme-toggle:focus-visible { outline: 2px solid var(--lime); outline-offset: 3px; }',
    '#kx-theme-toggle:active { transform: scale(0.94); }',
    '#kx-theme-toggle svg { width: 20px; height: 20px; }',
    '#kx-theme-toggle .ic-sun { display: none; }',
    'html[data-theme="dark"] #kx-theme-toggle .ic-sun { display: block; }',
    'html[data-theme="dark"] #kx-theme-toggle .ic-moon { display: none; }'
  ].join('\n');
  var st = document.createElement('style');
  st.textContent = css;
  document.head.appendChild(st);

  function addToggle() {
    var b = document.createElement('button');
    b.id = 'kx-theme-toggle';
    b.type = 'button';
    b.setAttribute('aria-label', 'Switch between light and dark theme');
    b.innerHTML =
      '<svg class="ic-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>' +
      '<svg class="ic-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>';
    b.addEventListener('click', function () {
      var next = doc.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      apply(next);
      try { localStorage.setItem('kx-theme', next); } catch (e) {}
    });
    document.body.appendChild(b);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', addToggle);
  else addToggle();
})();
