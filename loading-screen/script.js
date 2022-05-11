const tl = gsap.timeline();
const init = () => {
  tl.to(".loading", { opacity: 0 }).to(".loading", { display: "none" }, 0);
};

window.addEventListener("load", () => {
  setTimeout(() => {
    init();
  }, 1000);
});
