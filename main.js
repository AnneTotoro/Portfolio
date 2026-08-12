// Aiko Hayashi — Portfolio
// Handles the EN / JP language toggle and the footer year.

(function () {
  var STORAGE_KEY = 'site-lang';
  var toggle = document.getElementById('langToggle');
  var yearEl = document.getElementById('year');

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  function applyLang(lang) {
    var isJa = lang === 'ja';
    document.documentElement.classList.toggle('lang-ja', isJa);
    document.documentElement.lang = isJa ? 'ja' : 'en';

    document.querySelectorAll('[data-en]').forEach(function (el) {
      var text = isJa ? el.getAttribute('data-ja') : el.getAttribute('data-en');
      if (text != null) el.textContent = text;
    });

    if (toggle) {
      toggle.textContent = isJa ? 'EN' : 'JP';
    }

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* ignore (private mode, etc.) */
    }
  }

  var saved = null;
  try {
    saved = localStorage.getItem(STORAGE_KEY);
  } catch (e) {
    /* ignore */
  }

  applyLang(saved === 'ja' ? 'ja' : 'en');

  if (toggle) {
    toggle.addEventListener('click', function () {
      var isJa = document.documentElement.classList.contains('lang-ja');
      applyLang(isJa ? 'en' : 'ja');
    });
  }
})();
