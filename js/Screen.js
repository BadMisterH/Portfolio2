import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const svgPrensentationRideau = document.querySelector(".container-all-rideau svg")


setTimeout(() => {
  gsap.to(svgPrensentationRideau, {
    opacity : 0,
  })
}, 3200)

function SvgVanished() {
  
  svgPrensentationRideau.classList.add("disparu");

  setTimeout(SvgVanished, 3200)
}

setTimeout(SvgVanished, 3200)


setTimeout(function () {
  document.querySelector(".container-rideau").classList.add("disparu");
}, 5700);

document.querySelectorAll(".rideau-element").forEach((element, index) => {
  if (index == 0) {
    gsap.to(element, {
      x: 100 + "%",
      delay: 2.4,
      ease: "power2.inOut",
    });
  } else if (index == 1) {
    gsap.to(element, {
      x: -100 + "%",
      delay: 2.4,
      ease: "power2.inOut",
    });
  } else if (index == 2) {
    gsap.to(element, {
      x: 100 + "%",
      delay: 2.6,
      ease: "power2.inOut",
    });
  } else {
    gsap.to(element, {
      x: -100 + "%",
      delay: 2.6,
      ease: "power2.inOut",
    });
  }
});
