gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".fullscreen-container",
    start: "top top",
    scrub: true,
    pin: true,
  },
});

tl.to(".dot", { scale: 1 }).set("body", { backgroundColor: "#113059" });
