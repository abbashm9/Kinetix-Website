/* Web3Forms submit for /start and /join (EN + AR).
   Messages come from data-ok / data-err / data-sending on the form. */
(function () {
  var form = document.querySelector('form[data-studio-form]');
  if (!form) return;
  var status = form.querySelector('.status');
  var btn = form.querySelector('button[type="submit"]');
  var label = btn.textContent;

  function done() {
    status.className = 'status ok';
    status.textContent = form.getAttribute('data-ok');
    if (window.gtag) gtag('event', 'generate_lead', { method: form.getAttribute('data-kind') || 'form' });
  }
  if (/[?&]sent=1(&|$)/.test(location.search)) {
    done();
    if (history.replaceState) history.replaceState({}, '', location.pathname);
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!form.reportValidity()) return;
    status.className = 'status';
    status.textContent = '';
    btn.disabled = true;
    btn.textContent = form.getAttribute('data-sending');
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: new FormData(form)
    }).then(function (r) { return r.json(); }).then(function (json) {
      btn.disabled = false; btn.textContent = label;
      if (json.success) { form.reset(); done(); }
      else { status.className = 'status err'; status.textContent = form.getAttribute('data-err'); }
    }).catch(function () {
      /* fetch blocked: fall back to a native POST; Web3Forms redirects back with ?sent=1 */
      form.submit();
    });
  });
})();
