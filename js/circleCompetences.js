import Lenis from "@studio-freight/lenis";

const Competences = document.querySelector(".Competences");
const lenis = new Lenis();
const containerSkill = document.querySelector(".container-skill");



gsap.to(containerSkill, {
  duration: 2,
  scrollTrigger: {
    trigger: Competences,
    start: "top top",
    end: () => "+=" + containerSkill.offsetHeight * 2,
    pin: true,
    pinSpacing: true, 
    markers: false,
    pinSpacing : true,
    onUpdate: (self) => {

      if(Math.round(self.progress * 100) <= 5){
        document.querySelector(".pop-up-scroll p").style.opacity = 0
      }else{
        document.querySelector('.pop-up-scroll p').style.opacity = 1
      }

      if(Math.round(self.progress * 100) <= 52){
        document.querySelector(".titleSkill h2").style.display = "none"
        document.querySelector(".titleSkill h2").style.opacity = 0
      }else{
          document.querySelector(".titleSkill h2").style.display = "block"
          document.querySelector(".titleSkill h2").style.opacity = 1
      }

      
      const scrollProgress = self.progress;
      const containerHeight = window.innerHeight; // Hauteur de la fenêtre
      const containerWidth = window.innerWidth; // Largeur de la fenêtre
      
      const popUpScroll = document.querySelector(".pop-up-scroll");
      const popUpScrollHeight = scrollProgress * containerHeight; // Ajuster la hauteur en fonction de la progression
      const popUpScrollWidth = scrollProgress * containerWidth; // Ajuster la largeur en fonction de la progression
      
      // Appliquer les nouvelles dimensions au carré rouge
      popUpScroll.style.height = `${popUpScrollHeight}px`;
      popUpScroll.style.width = `${popUpScrollWidth}px`;


  

      // Mise à jour de l'attribut stroke-dasharray du cercle de progression
      document.querySelectorAll(".progressCircle").forEach((element, index) => {

        switch (index) {

          case 0:
            const maxValue = 95;

            let progressValue = scrollProgress * maxValue;

            progressValue = Math.min(progressValue, maxValue);
            const circumference = 2 * Math.PI * 120;
            const progress = circumference * (progressValue / 120);
            element.setAttribute(
              "stroke-dasharray",
              `${progress} ${circumference}`
            );

            break;
          case 1:
            const maxValue2 = 85;

            let progressValue2 = scrollProgress * maxValue2;

            progressValue2 = Math.min(progressValue2, maxValue2);
            const circumference2 = 2 * Math.PI * 120;
            const progress2 = circumference2 * (progressValue2 / 120);
            element.setAttribute(
              "stroke-dasharray",
              `${progress2} ${circumference2}`
            );
            break;
          case 2:
            const maxValue3 = 75;
            let progressValue3 = scrollProgress * maxValue3;

            progressValue3 = Math.min(progressValue3, maxValue3);
            const circumference3 = 2 * Math.PI * 120;
            const progress3 = circumference3 * (progressValue3 / 120);
            element.setAttribute(
              "stroke-dasharray",
              `${progress3} ${circumference3}`
            );
            break;
          default:
            const maxValue4 = 40;
            let progressValue4 = scrollProgress * maxValue4;
            progressValue4 = Math.min(progressValue4, maxValue4);
            const circumference4 = 2 * Math.PI * 120;
            const progress4 = circumference4 * (progressValue4 / 120);
            element.setAttribute(
              "stroke-dasharray",
              `${progress4} ${circumference4}`
            );
            
        }

      });


    },
  },
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
