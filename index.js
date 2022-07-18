const otherLinks = document.querySelector(".other-links");
const megaMenu = document.querySelector(".mega-menu ");
otherLinks.addEventListener("click", function () {
  megaMenu.classList.toggle("clicked");
});
// Timer
let countDown = new Date("Dec 31 , 2023 23:59:59").getTime();
let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let dateDiff = countDown - dateNow;
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  document.querySelector(".days").innerHTML = days;
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  document.querySelector(".hours").innerHTML = hours;
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  document.querySelector(".minutes").innerHTML = minutes;
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
  document.querySelector(".seconds").innerHTML = seconds;
}, 1000);
// Progress Bar
let section = document.querySelector(".skills");
let progressSpans = document.querySelectorAll(".bar span");
window.addEventListener("scroll", function () {
  if (window.scrollY >= section.offsetTop) {
    progressSpans.forEach((el) => {
      const style = el.dataset.width;
      el.style.width = style;
      el.style.transition = "all 1.3s";
    });
  }
});
// Cards
let section1 = document.querySelector(".statistics");
let cardspans = document.querySelectorAll(".statistics .num");
let started = false;
window.addEventListener("scroll", function () {
  if (window.scrollY >= section1.offsetTop) {
    if (!started) {
      cardspans.forEach((el) => {
        startCount(el);
      });
      started = true;
    }
  }
});
function startCount(el) {
  const num = el.dataset.number;
  const count = setInterval(function () {
    el.textContent++;
    if (el.textContent == num) {
      clearInterval(count);
    }
  }, 5000 / num);
}
