/* =========================================
SMART WALLPAPERS PREMIUM JS
========================================= */

/* =========================
OPEN CATEGORY MODAL
========================= */

function openGallery(id) {

  const modal = document.getElementById(id);

  if (modal) {

    modal.style.display = "block";

    document.body.style.overflow = "hidden";
  }
}

/* =========================
CLOSE CATEGORY MODAL
========================= */

function closeGallery(id) {

  const modal = document.getElementById(id);

  if (modal) {

    modal.style.display = "none";

    document.body.style.overflow = "auto";
  }
}

/* =========================
FULL IMAGE VIEWER OPEN
========================= */

function openImage(src) {

  const viewer = document.getElementById("imageViewer");

  const fullImage = document.getElementById("fullImage");

  const downloadBtn = document.getElementById("downloadBtn");

  if (!viewer || !fullImage || !downloadBtn) return;

  /* SHOW VIEWER */

  viewer.style.display = "flex";

  document.body.style.overflow = "hidden";

  /* PRELOAD HD IMAGE */

  const img = new Image();

  img.src = src;

  img.onload = function () {

    fullImage.src = img.src;

    /* PREMIUM QUALITY EFFECT */

    fullImage.style.filter =
      "contrast(1.08) saturate(1.12) brightness(1.03)";

    fullImage.style.imageRendering = "auto";
  };

  /* DOWNLOAD BUTTON */

  downloadBtn.href = src;
}

/* =========================
FULL IMAGE VIEWER CLOSE
========================= */

function closeImageViewer() {

  const viewer = document.getElementById("imageViewer");

  if (viewer) {

    viewer.style.display = "none";

    document.body.style.overflow = "auto";
  }
}

/* =========================
CLICK OUTSIDE TO CLOSE
========================= */

window.addEventListener("click", function(event) {

  /* CLOSE MODALS */

  const modals = document.querySelectorAll(".modal");

  modals.forEach(function(modal) {

    if (event.target === modal) {

      modal.style.display = "none";

      document.body.style.overflow = "auto";
    }
  });

  /* CLOSE IMAGE VIEWER */

  const viewer = document.getElementById("imageViewer");

  if (viewer && event.target === viewer) {

    viewer.style.display = "none";

    document.body.style.overflow = "auto";
  }
});

/* =========================
ESC KEY CLOSE
========================= */

document.addEventListener("keydown", function(e) {

  if (e.key === "Escape") {

    /* CLOSE ALL MODALS */

    const modals = document.querySelectorAll(".modal");

    modals.forEach(function(modal) {

      modal.style.display = "none";
    });

    /* CLOSE VIEWER */

    const viewer = document.getElementById("imageViewer");

    if (viewer) {

      viewer.style.display = "none";
    }

    document.body.style.overflow = "auto";
  }
});

/* =========================
SMOOTH IMAGE LOADING
========================= */

document.addEventListener("DOMContentLoaded", function () {

  const images = document.querySelectorAll("img");

  images.forEach(function(img) {

    img.setAttribute("loading", "lazy");

    img.setAttribute("decoding", "async");
  });
});





const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if(entry.isIntersecting){

      entry.target.classList.add("show");
    }
  });

}, {
  threshold:0.1
});

cards.forEach(card => {
  observer.observe(card);
});




/* =========================================
PERFORMANCE BOOST ADDON
SAFE EXTRA FILE
Does NOT interrupt existing JS
========================================= */

(function () {

  "use strict";

  /* =========================
  FAST IMAGE LOADING
  ========================= */

  document.addEventListener("DOMContentLoaded", function () {

    const images = document.querySelectorAll("img");

    images.forEach(function (img) {

      if (!img.hasAttribute("loading")) {
        img.loading = "lazy";
      }

      if (!img.hasAttribute("decoding")) {
        img.decoding = "async";
      }

      img.style.transform = "translateZ(0)";
      img.style.backfaceVisibility = "hidden";
    });

  });

  /* =========================
  SMOOTH SCROLL PERFORMANCE
  ========================= */

  let ticking = false;

  window.addEventListener("scroll", function () {

    if (!ticking) {

      window.requestAnimationFrame(function () {

        ticking = false;
      });

      ticking = true;
    }

  }, { passive: true });

  /* =========================
  OPTIMIZE CARD HOVER
  ========================= */

  document.addEventListener("mouseover", function (e) {

    const card = e.target.closest(".card");

    if (card) {

      card.style.willChange = "transform";
    }

  });

  document.addEventListener("mouseout", function (e) {

    const card = e.target.closest(".card");

    if (card) {

      card.style.willChange = "auto";
    }

  });

  /* =========================
  PRELOAD FIRST FEW IMAGES
  ========================= */

  window.addEventListener("load", function () {

    const firstImages = document.querySelectorAll(".card img");

    firstImages.forEach(function (img, index) {

      if (index < 4) {

        const preload = new Image();

        preload.src = img.src;
      }

    });

  });

  /* =========================
  REDUCE LAG ON MOBILE
  ========================= */

  if (/Mobi|Android/i.test(navigator.userAgent)) {

    document.body.classList.add("mobile-device");
  }

  /* =========================
  MEMORY CLEANUP
  ========================= */

  window.addEventListener("beforeunload", function () {

    document.querySelectorAll("img").forEach(function (img) {

      img.removeAttribute("src");
    });

  });

})();