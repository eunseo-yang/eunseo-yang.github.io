(function () {
  var btn = document.getElementById('theme-toggle');
  if (!btn) return;
  btn.addEventListener('click', function () {
    var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });
})();

(function () {
  var els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || !els.length) {
    els.forEach(function (el) { el.classList.add('visible'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  els.forEach(function (el, i) {
    el.style.transitionDelay = Math.min(i * 60, 240) + 'ms';
    io.observe(el);
  });
})();

(function () {
  var palette = {
    'Chatbot': '#69c2b0', 'Collaboration': '#a569c2', 'Grounded Theory Approach': '#c26986',
    'Context-aware computing': '#c2a369', 'Personalization': '#c2b769', 'LLM': '#8fc269',
    'Reinforcement Learning': '#a569c3', 'Proactive System': '#87ceeb'
  };
  function hash(s) { var h = 0; for (var i = 0; i < s.length; i++) h = s.charCodeAt(i) + ((h << 5) - h); return h; }
  document.querySelectorAll('.keyword').forEach(function (kw) {
    var t = kw.textContent.trim();
    var c = palette[t] || 'hsl(' + (Math.abs(hash(t)) % 360) + ', 45%, 62%)';
    kw.style.backgroundColor = c;
    kw.style.color = '#1c1a15';
  });
})();
