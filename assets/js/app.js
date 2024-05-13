/*===== add header shadow when scroll ====*/
const setScrollHeader = () => {
  const nav = document.getElementById("header");
  const scrollPosition = window.scrollY;

  if (scrollPosition >= 45) {
    addClass(nav, "scroll-header");
  } else {
    removeClass(nav, "scroll-header");
  }
};

/*===== display scroll up button ====*/
const setScrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  const scrollY = window.scrollY;

  if (scrollY >= 350) {
    addClass(scrollUp, "show-scroll");
  } else {
    removeClass(scrollUp, "show-scroll");
  }
};

/*===== portfolio swiper ====*/
const setSwiperPortfolio = () => {
  let swiper = new Swiper(".products__container", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
  });
};

/*===== scroll reveal elements ====*/
const revealElements = () => {
  setScroll.reveal(`.home__data, .steps__content,
		   .footer__container`);
  setScroll.reveal(`.home__img`, { origin: "bottom" });
  setScroll.reveal(`.products__container`, { interval: 100 });
  setScroll.reveal(`.about__img, .testimonial__img`, { origin: "right" });
  setScroll.reveal(`.about__data, .testimonial__data`, { origin: "left" });
};

const setScroll = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 400,
  reset: true, // Animations repeat
});

// reusable functions
const addClass = (element, className) => {
  element.classList.add(className);
};

const removeClass = (element, className) => {
  element.classList.remove(className);
};

window.addEventListener("DOMContentLoaded", () => {
  revealElements();
  setSwiperPortfolio();
});

window.addEventListener("scroll", () => {
  setScrollHeader();
  setScrollUp();
});
