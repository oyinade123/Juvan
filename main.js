// change navbar style on scroll
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

// Show or hide FAQs
const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");

    // change icon
    const icon = faq.querySelector(".faq__icon i");
    if (icon.className === "uil uil-plus") {
      icon.className = "uil uil-minus";
    } else {
      icon.className = "uil uil-plus";
    }
  });
});

// Show or hide nav menu

const menu = document.querySelectorAll(".nav__menu");
const menuBtn = document.querySelector(".open-menu-btn");
const closeBtn = document.querySelector(".close-menu-btn");

menuBtn.addEventListener("click", () => {
  for (let i = 0; i < menu.length; i += 1) {
    menu[i].style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
  }
});

const closeNav = () => {
  for (let i = 0; i < menu.length; i += 1) {
    menu[i].style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
  }
};

closeBtn.addEventListener("click", closeNav);
