//remove the transition class

const featureScrollAnimation = () => {
  const feature = document.querySelector(".feature");
  const contentPosition = feature.getBoundingClientRect().top;
  const screenPosition = window.innerHeight;
  if (contentPosition < screenPosition) {
    feature.classList.add("active");
  } else {
    feature.classList.remove("active");
  }
};

const testimonialScrollAnimation = () => {
  const testimonial = document.querySelector(".testimonial");
  const contentPosition = testimonial.getBoundingClientRect().top;
  const screenPosition = window.innerHeight;
  if (contentPosition < screenPosition) {
    testimonial.classList.add("active");
  } else {
    testimonial.classList.remove("active");
  }
};

const pricingScrollAnimation = () => {
  const pricing = document.querySelector(".price");
  const contentPosition = pricing.getBoundingClientRect().top;
  const screenPosition = window.innerHeight;
  if (contentPosition < screenPosition) {
    pricing.classList.add("active");
  } else {
    pricing.classList.remove("active");
  }
};

const finalScrollAnimation = () => {
  const dogFood = document.querySelector(".final__task");
  const contentPosition = dogFood.getBoundingClientRect().top;
  const screenPosition = window.innerHeight;
  if (contentPosition < screenPosition) {
    dogFood.classList.add("active");
  } else {
    dogFood.classList.remove("active");
  }
};

window.addEventListener("scroll", () => {
  featureScrollAnimation();
  testimonialScrollAnimation();
  pricingScrollAnimation();
  finalScrollAnimation();
});
