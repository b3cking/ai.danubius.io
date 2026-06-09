/* ============================================================
   Danubius AI Solutions — landing interactions
   Vanilla JS, no dependencies, no build step.
   ============================================================ */
(function () {
  "use strict";

  /* ---- Header: condense on scroll ---- */
  var header = document.getElementById("header");
  function onScroll() {
    if (window.scrollY > 24) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Mobile nav toggle ---- */
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---- Reveal on scroll ---- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---- Count-up numbers (run once when visible) ---- */
  function animateCount(el) {
    var target = parseFloat(el.getAttribute("data-count"));
    if (isNaN(target)) return;
    var prefix = el.getAttribute("data-prefix") || "";
    var suffix = el.getAttribute("data-suffix") || "";
    var dur = 1300, start = null, from = 0;
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { el.textContent = prefix + target + suffix; return; }
    function step(ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      var val = Math.round(from + (target - from) * eased);
      el.textContent = prefix + val + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  var counters = document.querySelectorAll("[data-count]");
  if ("IntersectionObserver" in window) {
    var io2 = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          io2.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { io2.observe(el); });
  }

  /* ---- Contact form: AJAX submit to Formspree (stay on page) ---- */
  var form = document.getElementById("contactForm");
  var statusEl = document.getElementById("formStatus");
  var submitBtn = document.getElementById("contactSubmit");
  if (form && window.fetch) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (statusEl) { statusEl.textContent = ""; statusEl.className = "form-status"; }
      if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = "Küldés…"; }

      fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      })
        .then(function (res) {
          if (res.ok) {
            form.reset();
            if (statusEl) {
              statusEl.textContent = "Köszönjük! Megkaptuk az üzeneted, hamarosan jelentkezünk.";
              statusEl.className = "form-status ok";
            }
            if (submitBtn) submitBtn.textContent = "Elküldve ✓";
          } else {
            return res.json().then(function (data) {
              var msg = data && data.errors && data.errors.length
                ? data.errors.map(function (x) { return x.message; }).join(", ")
                : "Hiba történt a küldés során.";
              throw new Error(msg);
            });
          }
        })
        .catch(function (err) {
          if (statusEl) {
            statusEl.textContent = "Nem sikerült elküldeni — próbáld újra, vagy írj a karoly.halmosi@danubius.io címre.";
            statusEl.className = "form-status err";
          }
          if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = "Üzenet küldése →"; }
        });
    });
  }

  /* ---- Footer year ---- */
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
