(function () {
  "use strict";

  var slides = document.querySelectorAll(".hero__slide");
  if (slides.length < 2) return;

  var prefersReduced =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var index = 0;
  var timer = null;
  var INTERVAL_MS = 5000;

  function show(next) {
    slides[index].classList.remove("is-active");
    index = (next + slides.length) % slides.length;
    slides[index].classList.add("is-active");
  }

  function schedule() {
    if (prefersReduced) return;
    clearInterval(timer);
    timer = window.setInterval(function () {
      show(index + 1);
    }, INTERVAL_MS);
  }

  function pauseOnHidden() {
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) {
        clearInterval(timer);
        timer = null;
      } else if (!prefersReduced) {
        schedule();
      }
    });
  }

  schedule();
  pauseOnHidden();
})();
