// document.querySelectorAll(".bar").forEach(bar=> {
//     bar.addEventListener('click', () => {
//         bar.parentElement.classList.toggle('change');
//         console.log(bar);
//     });

//     });

// document.querySelectorAll(".x").forEach((x) => {
//   x.addEventListener("click", () => {
//     setTimeout(function () {
//       x.parentElement.parentElement.classList.toggle("change");
//     }, 500);
//   });
// });
const buttonX = document.querySelector(".x");

buttonX.addEventListener("click", () => {
  setTimeout(function () {
    buttonX.parentElement.parentElement.classList.toggle("change");
  }, 500);
});

const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".navbar-links");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navlinks.classList.toggle("active");
}

const navLink = document.querySelector(".nav-link");
const navLink2 = document.querySelector(".nav-link-2");

navLink.addEventListener("click", closeMenu);
navLink2.addEventListener("click", closeMenu);

function closeMenu() {
  hamburger.classList.remove("active");
  navlinks.classList.remove("active");
}
