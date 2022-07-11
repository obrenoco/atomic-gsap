const closeMenuBtn = document.getElementById("close-menu");
const openMenuBtn = document.getElementById("open-menu");

closeMenuBtn.addEventListener("click", () => console.log("HEYYYY"));
openMenuBtn.addEventListener("click", () => console.log("HOOOOO"));

// const openModal = document.addEventListener("click", () =>
//   console.log("HEYYYY")
// );

// const tl = gsap.timeline();
// const init = () => {
//   tl.to(".loading", { opacity: 0 }).to(".loading", { display: "none" }, 0);
// };

window.addEventListener("load", () => {
  setTimeout(() => {
    // init();
  }, 1000);
});
