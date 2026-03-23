// =============================================
// PORTFOLIO — main.js
// =============================================

// --- Footer year ---
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// =============================================
// BILINGUAL TOGGLE
// =============================================
const LANG_KEY = 'portfolio-lang';
let currentLang = localStorage.getItem(LANG_KEY) || 'en';

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem(LANG_KEY, lang);

  // Update all [data-en] / [data-ja] spans & elements
  document.querySelectorAll('[data-en]').forEach(el => {
    const text = lang === 'ja' ? el.dataset.ja : el.dataset.en;
    if (text) el.textContent = text;
  });

  // Update series-btn labels (they carry data-en/data-ja on the button itself)
  document.querySelectorAll('.series-btn[data-en]').forEach(btn => {
    btn.textContent = lang === 'ja' ? btn.dataset.ja : btn.dataset.en;
  });

  // Toggle button label & state
  const btn = document.getElementById('langToggle');
  if (btn) {
    btn.textContent = lang === 'ja' ? 'EN' : 'JP';
    btn.classList.toggle('ja-active', lang === 'ja');
  }

  // Body class for font overrides
  document.body.classList.toggle('ja', lang === 'ja');

  // html lang attribute
  document.documentElement.lang = lang === 'ja' ? 'ja' : 'en';
}

// Init on load
applyLang(currentLang);

const langBtn = document.getElementById('langToggle');
if (langBtn) {
  langBtn.addEventListener('click', () => {
    applyLang(currentLang === 'en' ? 'ja' : 'en');
  });
}

// =============================================
// PHOTOGRAPHY: SERIES FILTER
// =============================================
const seriesBtns = document.querySelectorAll('.series-btn');
const photoCells = document.querySelectorAll('.photo-cell');

seriesBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    seriesBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const series = btn.dataset.series;
    photoCells.forEach(cell => {
      if (series === 'all' || cell.dataset.series === series) {
        cell.classList.remove('hidden-cell');
      } else {
        cell.classList.add('hidden-cell');
      }
    });
  });
});

// =============================================
// LIGHTBOX (works for both .tile and .photo-cell)
// =============================================
const lightbox  = document.getElementById('lightbox');
const lbImg     = document.getElementById('lbImg');
const lbCaption = document.getElementById('lbCaption');
const lbClose   = document.getElementById('lbClose');
const lbBg      = document.getElementById('lbBg');
const lbPrev    = document.getElementById('lbPrev');
const lbNext    = document.getElementById('lbNext');

let currentIndex = 0;
let allTiles = [];

function openLightbox(index) {
  allTiles = [...document.querySelectorAll('.tile')];
  currentIndex = index;
  showSlide(currentIndex);
  if (lightbox) {
    lightbox.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}

function showSlide(i) {
  const tile = allTiles[i];
  if (!tile || !lightbox) return;
  const img = tile.querySelector('img');
  const caption = tile.dataset.caption || '';
  if (img) {
    lbImg.src = img.src;
    lbImg.alt = img.alt || '';
    lbImg.style.display = 'block';
  } else {
    lbImg.src = '';
    lbImg.style.display = 'none';
  }
  if (lbCaption) lbCaption.textContent = caption;
}

function closeLightbox() {
  if (lightbox) lightbox.classList.add('hidden');
  document.body.style.overflow = '';
}

if (lightbox) {
  document.querySelectorAll('.tile').forEach((tile, i) => {
    tile.addEventListener('click', () => openLightbox(i));
  });
  if (lbClose) lbClose.addEventListener('click', closeLightbox);
  if (lbBg)    lbBg.addEventListener('click', closeLightbox);
  if (lbPrev)  lbPrev.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + allTiles.length) % allTiles.length;
    showSlide(currentIndex);
  });
  if (lbNext)  lbNext.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % allTiles.length;
    showSlide(currentIndex);
  });
  document.addEventListener('keydown', e => {
    if (lightbox.classList.contains('hidden')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft' && lbPrev) lbPrev.click();
    if (e.key === 'ArrowRight' && lbNext) lbNext.click();
  });
}

// =============================================
// SCROLL FADE-IN
// =============================================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.project-item, .research-item, .photo-cell').forEach(el => {
  el.style.animationPlayState = 'paused';
  observer.observe(el);
});
