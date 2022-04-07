$(document).ready(function () {
  $(".my-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    center: true,

    responsive: {
      0: {
        items: 1
      },
      200: {
        items: 1
      },
      400: {
        items: 2
      },
      600: {
        items: 5
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var e;
  if ("IntersectionObserver" in window) {
    e = document.querySelectorAll(".lazy");
    var n = new IntersectionObserver(function (e, t) {
      e.forEach(function (e) {
        if (e.isIntersecting) {
          var t = e.target;
          (t.src = t.dataset.src), t.classList.remove("lazy"), n.unobserve(t);
        }
      });
    });
    e.forEach(function (e) {
      n.observe(e);
    });
  } else {
    var t;
    function r() {
      t && clearTimeout(t),
        (t = setTimeout(function () {
          var n = window.pageYOffset;
          e.forEach(function (e) {
            e.offsetTop < window.innerHeight + n &&
              ((e.src = e.dataset.src), e.classList.remove("lazy"));
          }),
            0 == e.length &&
              (document.removeEventListener("scroll", r),
              window.removeEventListener("resize", r),
              window.removeEventListener("orientationChange", r));
        }, 20));
    }
    (e = document.querySelectorAll(".lazy")),
      document.addEventListener("scroll", r),
      window.addEventListener("resize", r),
      window.addEventListener("orientationChange", r);
  }
});
