/* ──────────────────────────────────────────────────────────────
   Kinetix — Google Analytics 4 loader (single source of truth)
   ----------------------------------------------------------------
   SETUP (the only step Abbas needs to do):
   1. Create a GA4 property for www.kinetixkw.com → copy its Measurement ID
      (looks like G-XXXXXXXXXX).
   2. Replace the value of GA4_MEASUREMENT_ID below with that ID.
   That's it — every page that includes this file starts tracking.

   Until a real ID is set, this script is inert (no network calls, no errors),
   so it's safe to ship now.
   ────────────────────────────────────────────────────────────── */
(function () {
  var GA4_MEASUREMENT_ID = 'G-0PTE2W61R1'; // Kinetix GA4 property

  // Guard: do nothing until a real ID is configured.
  if (!GA4_MEASUREMENT_ID || GA4_MEASUREMENT_ID === 'G-XXXXXXXXXX') return;

  // Standard gtag.js bootstrap.
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA4_MEASUREMENT_ID;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA4_MEASUREMENT_ID, { anonymize_ip: true });

  // ── Conversion events (fire on key actions) ──────────────────
  // WhatsApp / phone / Instagram clicks = lead intent. Wired by data-attr.
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a');
    if (!a) return;
    var href = a.getAttribute('href') || '';
    if (href.indexOf('wa.me') > -1 || href.indexOf('whatsapp') > -1) {
      gtag('event', 'contact_whatsapp', { transport_type: 'beacon' });
    } else if (href.indexOf('tel:') === 0) {
      gtag('event', 'contact_call', { transport_type: 'beacon' });
    } else if (href.indexOf('instagram.com') > -1) {
      gtag('event', 'contact_instagram', { transport_type: 'beacon' });
    }
  }, { passive: true });
})();
