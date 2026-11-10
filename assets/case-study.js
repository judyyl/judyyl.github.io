/* Case study behavior: "On this page" scrollspy and click-to-section snap. */
(function () {
  var btns = [].slice.call(document.querySelectorAll('[data-toc]'));
  var secs = btns.map(function (b) { return document.getElementById(b.getAttribute('data-toc')); });

  /* Click-to-section: jump, then re-align briefly in case media above the target
     finishes loading and shifts the page. Any user scroll input cancels it. */
  document.addEventListener('click', function (e) {
    var s = e.target.closest('[data-scroll]');
    if (!s) { return; }
    var t = document.getElementById(s.getAttribute('data-scroll'));
    if (!t) { return; }
    t.scrollIntoView({ block: 'start' });
    if (window.__snap) { clearInterval(window.__snap); }
    var stop = false, n = 0;
    var cancel = function () { stop = true; };
    ['wheel', 'touchstart', 'keydown', 'mousedown'].forEach(function (ev) {
      window.addEventListener(ev, cancel, { once: true, passive: true });
    });
    var iv = window.__snap = setInterval(function () {
      n++;
      if (stop || n > 14) { clearInterval(iv); return; }
      if (Math.abs(t.getBoundingClientRect().top - 88) > 4) { t.scrollIntoView({ block: 'start' }); }
    }, 150);
  });

  /* Scrollspy: highlight the section at the top; at the very bottom, the last one. */
  if (!secs.length) { return; }
  var ticking = false, lastActive = null;
  function update() {
    ticking = false;
    var line = 170, active = null;
    for (var i = 0; i < secs.length; i++) {
      if (secs[i].getBoundingClientRect().top <= line) { active = secs[i].id; }
    }
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
      active = secs[secs.length - 1].id;
    }
    if (active === lastActive) { return; }
    lastActive = active;
    btns.forEach(function (b) {
      if (b.getAttribute('data-toc') === active) { b.setAttribute('aria-current', 'true'); }
      else { b.removeAttribute('aria-current'); }
    });
  }
  function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(update); } }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  update();
})();
