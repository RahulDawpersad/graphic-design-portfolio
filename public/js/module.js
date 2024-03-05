/*===== MIXITUP FILTER PORTFOLIO =====*/
var containerEl = document.querySelector(".portfolio__container");
if (containerEl) {
  const mixer = mixitup(".portfolio__container", {
    selectors: {
      target: ".portfolio__content",
    },
    animation: {
      duration: 400,
    },
  });
}
/* Link active portfolio */
var numberButtons = document.querySelectorAll(".portfolio__item");
for (var i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener("click", changeButton.bind(null, i));
}

function changeButton(selected, e) {
  var oldActive = document.getElementsByClassName("active--portfolio");
  for (var i = 0; i < oldActive.length; i++) {
    oldActive[i].classList.remove("active--portfolio");
  }
  e.target.classList.add("active--portfolio");
}

/*===== GSAP ANIMATION =====*/
gsap.from(".home__img", { opacity: 0, duraction: 2, delay: 0.2, x: 60 });
gsap.from(".home__data", { opacity: 0, duraction: 2, delay: 0.8, y: 25 });
gsap.from(".home__greeting, .home__name, .home__professional , .home__button", {
  opacity: 0,
  duraction: 2,
  delay: 1,
  y: 25,
  ease: "expo.out",
  stagger: 0.2,
});
gsap.from(".nav__logo, .nav__toggle", {
  opacity: 0,
  duraction: 2,
  delay: 1.5,
  y: 25,
  ease: "expo.out",
  stagger: 0.2,
});
gsap.from(".nav__item", {
  opacity: 0,
  duraction: 2,
  delay: 1.8,
  y: 25,
  ease: "expo.out",
  stagger: 0.2,
});
gsap.from(".home__social-icon", {
  opacity: 0,
  duraction: 2,
  delay: 2.3,
  y: 25,
  ease: "expo.out",
  stagger: 0.2,
});

