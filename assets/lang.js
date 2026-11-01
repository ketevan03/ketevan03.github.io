// Language switcher (EN default, FR, RU) + scroll reveal animations.
(function () {
  var SUP = ['en', 'fr', 'ru'];

  function initial() {
    try {
      var q = new URLSearchParams(location.search).get('lang');
      if (SUP.indexOf(q) > -1) return q;
    } catch (e) {}
    try {
      var s = localStorage.getItem('lang');
      if (SUP.indexOf(s) > -1) return s;
    } catch (e) {}
    return 'en';
  }

  function apply(l) {
    var d = (window.I18N || {})[l];
    if (!d) return;
    document.documentElement.lang = l;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = d[el.getAttribute('data-i18n')];
      if (v != null) el.innerHTML = v;
    });
    document.querySelectorAll('[data-tags]').forEach(function (el) {
      var v = d[el.getAttribute('data-tags')];
      if (v) el.innerHTML = v.split('|').map(function (t) { return '<span>' + t + '</span>'; }).join('');
    });
    document.querySelectorAll('.langs button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-l') === l));
    });
    if (d['meta.title']) document.title = d['meta.title'];
    try { localStorage.setItem('lang', l); } catch (e) {}
  }

  function switchTo(l) {
    document.body.classList.add('switching');
    setTimeout(function () {
      apply(l);
      document.body.classList.remove('switching');
    }, 220);
  }

  document.addEventListener('DOMContentLoaded', function () {
    apply(initial());
    document.querySelectorAll('.langs button').forEach(function (b) {
      b.addEventListener('click', function () { switchTo(b.getAttribute('data-l')); });
    });

    var els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      els.forEach(function (e) { e.classList.add('in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0, rootMargin: '0px 0px -8% 0px' });
    els.forEach(function (e) { io.observe(e); });
  });
})();
