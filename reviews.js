(function () {
  "use strict";

  var track = document.querySelector("[data-reviews-track]");
  if (!track) return;

  var prefersReduced =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var carousel = track.closest(".reviews-carousel");
  var autoTimer = null;
  var idleResumeTimer = null;
  var AUTO_MS = 4500;
  var READ_PAUSE_MS = 22000;
  var userReading = false;
  var currentIndex = 0;

  function cards() {
    return track.querySelectorAll(".review-card");
  }

  function clearAuto() {
    if (autoTimer) {
      window.clearInterval(autoTimer);
      autoTimer = null;
    }
  }

  function clearIdleResume() {
    if (idleResumeTimer) {
      window.clearTimeout(idleResumeTimer);
      idleResumeTimer = null;
    }
  }

  function scrollToIndex(index) {
    var list = cards();
    if (!list.length) return;
    var i = ((index % list.length) + list.length) % list.length;
    currentIndex = i;
    var card = list[i];
    var trackRect = track.getBoundingClientRect();
    var cardRect = card.getBoundingClientRect();
    var targetLeft = track.scrollLeft + (cardRect.left - trackRect.left);
    track.scrollTo({
      left: targetLeft,
      behavior: prefersReduced ? "auto" : "smooth",
    });
  }

  function advanceRight() {
    if (userReading || prefersReduced) return;
    var list = cards();
    if (!list.length) return;
    scrollToIndex(currentIndex + 1);
  }

  function startAuto() {
    clearAuto();
    if (userReading || prefersReduced) return;
    autoTimer = window.setInterval(advanceRight, AUTO_MS);
  }

  function stopForReading() {
    userReading = true;
    clearAuto();
    clearIdleResume();
    idleResumeTimer = window.setTimeout(function () {
      userReading = false;
      startAuto();
    }, READ_PAUSE_MS);
  }

  function onKeyDown(e) {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    if (!carousel || !carousel.contains(document.activeElement)) return;
    e.preventDefault();
    stopForReading();
    scrollToIndex(currentIndex + (e.key === "ArrowRight" ? 1 : -1));
  }

  track.addEventListener(
    "pointerdown",
    function () {
      stopForReading();
    },
    { passive: true }
  );

  track.addEventListener(
    "touchstart",
    function () {
      stopForReading();
    },
    { passive: true }
  );

  track.addEventListener(
    "click",
    function () {
      stopForReading();
    },
    { passive: true }
  );

  if (carousel) {
    carousel.addEventListener("focusin", function () {
      stopForReading();
    });
  }

  track.addEventListener(
    "scroll",
    function () {
      if (userReading) return;
    },
    { passive: true }
  );

  document.addEventListener("keydown", onKeyDown);

  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      clearAuto();
    } else if (!userReading && !prefersReduced) {
      startAuto();
    }
  });

  scrollToIndex(0);
  if (!prefersReduced) {
    startAuto();
  }
})();
