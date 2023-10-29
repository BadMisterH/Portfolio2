import Lenis from "@studio-freight/lenis";
// import ScrollTrigger from "gsap/ScrollTrigger";
import { VANTA } from "vanta";
import Contact from './js/contact'; // Importer le module

Contact.Mail();


//VANTA JS
const fond = VANTA.GLOBE({
  el: "#BackgroundPortfolio",
  mouseControls: true,
  touchControls: true,
  backgroundColor: "#031335",
  color: "#F3F1EE",
  color2: "#F3F1EE",
  size: 1.50
});

// VANTA.BIRDS({
//   el: "#BackgroundPortfolio",
//   mouseControls: true,
//   touchControls: true,
//   gyroControls: false,
//   minHeight: 200.00,
//   minWidth: 200.00,
//   scale: 1.00,
//   scaleMobile: 1.00,
//   color1: 0x031335,
//   backgroundColor: "#F3F1EE",
//   colorMode: "lerpGradient",
//   separation: 100.00,
//   alignment: 96.00
// })

fond.resize();


gsap.registerPlugin(ScrollTrigger);

//gsap

const scrollContainer = document.querySelector(".scroll-container");
const SplitTypeTxT = document.querySelector(".about-me");
const h1Présentation = document.querySelector("#myTxt");
const scrollSection2 = document.querySelector(".container-two");
// const CompetenceScroll = document.querySelector(".Competences");

//scrollSection2
// 1260 pour une section

gsap.to(document.querySelector(".scrollbarProgression"), {
  delay: 15,
});

setTimeout(() => {
  document.querySelector(".scrollbarProgression").classList.add("trait");
}, 4200);


//Présentation
new SplitType(h1Présentation, { types: "word" });
gsap.to(".word", {
  y: 0,
  stagger: 0.25,
  delay: 4,
  duration: 0.1,
});


const slipLine = new SplitType(SplitTypeTxT, { types: "lines" });
slipLine.lines.forEach((elementLinesPresentation) => {
  const newSpan = document.createElement("span");
  // Ajouter du texte au span si nécessaire
  newSpan.textContent = "";

  // Récupérer le parent de l'élément de ligne
  const parentElement = elementLinesPresentation.parentNode;

  // Insérer le span avant l'élément de ligne
  parentElement.insertBefore(newSpan, elementLinesPresentation);

  newSpan.classList.add("box-cacher-line")

});



const elementsToAnimate = document.querySelectorAll(".box-cacher-line");

gsap.to(elementsToAnimate, {
  delay: 2,
  width: 0,
  duration: 2,
  ease: 'power2.inOut',
  stagger: 0.5,
  scrollTrigger: {
    trigger: scrollSection2, // L'élément qui sert de déclencheur pour l'animation
    start: 'top 80%',
    end: 'bottom 150%',
    scrub: 1, // Déclenche l'animation lorsque chaque élément devient visible
  }
});

const menuAll = document.querySelectorAll(".mn");

menuAll.forEach((elementLinkMenu, index) => {
  gsap.to(elementLinkMenu, {
    y: 0,
    stagger: 0.3,
    delay: 4 + index * 0.2, // Ajoute un délai basé sur l'index    duration : 0.1,
  });
});

const startColor = [243, 241, 238]; // RGB de départ
const endColor = [3, 19, 53]; // RGB cible

// const startColor = [243, 241, 238];
// const endColor = [3, 19, 53];

// Fonction de couleur personnalisée
function getColor(progress) {
  const r = Math.round(
    startColor[0] + (endColor[0] - startColor[0]) * progress
  );
  const g = Math.round(
    startColor[1] + (endColor[1] - startColor[1]) * progress
  );
  const b = Math.round(
    startColor[2] + (endColor[2] - startColor[2]) * progress
  );
  return `rgb(${r}, ${g}, ${b})`;
}


// const backgroundChange = document.querySelector(".backgroundChange");

// gsap.to(document.body, {
//   duration: 0.5,
//   scrollTrigger: {
//     trigger: backgroundChange,
//     start: "bottom 90%",
//     scrub: 0.5,
//     anticipatePin: 1,
//     end: () => "+=" + backgroundChange.offsetWidth - window.innerWidth, // Utilisez la largeur de l'élément moins la largeur de la fenêtre pour déterminer la fin de l'animation
//     onUpdate: (self) => {
//       const progress = self.progress;
//       const color = getColor(progress);
//       document.body.style.backgroundColor = color;
//     },
//   },
// });


// Create a timeline for the animation

//lenis js gestion du scroll pour chaque section

const lenis = new Lenis();

lenis.on("scroll", () => {
  let scrollPosition = Math.round(lenis.progress * 100);
  document.querySelector(".conteneur-scrollbar-progression").style.width =
    scrollPosition + "%";

  if (scrollPosition > 0) {
    document.querySelector(".scrollbarProgression").classList.add("Fixed");
  } else {
    document.querySelector(".scrollbarProgression").classList.remove("Fixed");
  }

  if (scrollPosition > 90) {
    document.querySelector(
      ".conteneur-scrollbar-progression"
    ).style.backgroundColor = "#031335";


    document.querySelector(".btn-info-croix").classList.add("borderCroix");

    if (scrollPosition > 95) {
      document.querySelector(".btn-diplome path").setAttribute("fill", "#F3F1EE");
    }
  } else {
    document.querySelector(
      ".conteneur-scrollbar-progression"
    ).style.backgroundColor = "#F3F1EE";

    document.querySelector(".glowing-btn").classList.remove("ColorChange");

    if (scrollPosition < 95) {
      document.querySelector(".btn-diplome path").setAttribute("fill", "#031335");
    }


  }
});

//CONTACT

// const discoverSectionSpiderMan = () => {
//   const containerDiscover = document.querySelector(".background-cacher");
//   const cobweb = document.querySelector(".toile");

//   gsap.registerPlugin(ScrollTrigger);

//   const timeline = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".discover",
//       start: "center center", // Déclenche le pin lorsque 80% de l'élément .discover est visible depuis le haut de la fenêtre
//       end: "+=1000",
//       scrub: 1,
//       pin : true,
//       markers :true,
//     },
//   });

//   // Animation pour amener la cobweb de 100% à 0%
//   timeline.to(cobweb, {
//     x: "0%",
//     duration: 1,
//   });

//   timeline.to(containerDiscover, {
//     width: "120%",
//     duration: 8,
//     borderRadius: 0,
//     paddingLeft: 15,
//     onUpdate: () => {
//       // Met à jour la position horizontale de l'image pendant l'animation
//       const containerWidth = parseFloat(getComputedStyle(containerDiscover).width);
//       cobweb.style.transform = `translateX(${containerWidth}px)`;
//     },
//   });

// };

// discoverSectionSpiderMan()
// Appel de la fonction pour déclencher l'animation


function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

//gsap text


