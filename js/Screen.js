import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const svgPrensentationRideau = document.querySelector(".container-all-rideau svg")


gsap.to(svgPrensentationRideau, {
  delay: 3.5,
  display: "none"
})

gsap.to(svgPrensentationRideau, {
  delay: 2.3,
  opacity: 0
})


const containerRideau = document.querySelector(".container-all-rideau");
const AllScreens = [document.querySelector(".sectionLeftVericial"), document.querySelector(".sectionRightVertical"), document.querySelector(".sectionLeft"), document.querySelector(".sectionRight")];

AllScreens.forEach((elementScreen, index) => {
  if (index === 0) {
    gsap.to(elementScreen, {
      delay: 1,
      left: -700,
      duration: 1, // Ajustez cette valeur pour une transition plus fluide
    });
  } else if (index === 1) {
    gsap.to(elementScreen, {
      delay: 1,
      right: -700,
      duration: 1,
    });
  }
  else if (index === 2) {
    gsap.to(elementScreen, {
      delay: 2.7,
      top: 700,
      duration: 1,
    });
  } else {
    gsap.to(elementScreen, {
      delay: 2.7,
      top: -300,
      duration: 1,
    });
  }

});


gsap.to(containerRideau, {
  delay: 3.1,
  display: "none"
})

// Ajout d'un événement pour déclencher la transition


