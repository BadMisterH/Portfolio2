// let longueurContenu = document.querySelector(".scroll-container").scrollWidth;
let documentElment = document.documentElement.offsetWidth;
let elements = document.querySelectorAll(".container-projet");
// let PartiePasVisible = longueurContenu - documentElment;

const ProjetTitre = document.querySelector(".projet");
const spliline = new SplitType(ProjetTitre, { types: "chars" });
const charAllProjet = document.querySelectorAll(".char");

charAllProjet.forEach((elementtxtProjet) => {
  const createlementDiv = document.createElement("div");
  const divInnerProjet = elementtxtProjet.appendChild(createlementDiv);
  divInnerProjet.classList.add("cache");
});


gsap.to(".cache", {
  width: "100%",
  scrollTrigger: {
    trigger: ".container-title-projet",
    start: "top 20%",
    end: "bottom 80%",
    pin : true,
    anticipatePin : true,
    onUpdate: (self) => {
     let scrollValue = 100 - Math.round(self.progress * 100);
      gsap.to(".cache", {width : `${scrollValue}%`});

    },  
  },
});

const TotalCarrousel = document.querySelector(".allSedtionProjet").scrollWidth;
const largeurViewport = document.documentElement.offsetWidth;

const ContenuProjetInvisible = TotalCarrousel - largeurViewport;



gsap.to(".card", {
    x : 0,
    scrollTrigger : {
        trigger : ".allSedtionProjet",
        start : "center center",
        end : () => "+=" -ContenuProjetInvisible,
        anticipatePin : 1,
        pin : true,
        onUpdate : (self) => {
            let progressionScroll = Math.round (self.progress * 100);
            let result = (progressionScroll * 10) 
            gsap.to(".card", {x : -result + "px" })

        },

    }
})


// let timeline = gsap.timeline();

// Faire en sorte de commencer l'animation au milieu
// let halfScreenWidth = documentElment / 2;
// let halfContentWidth = longueurContenu / 2;
// window.scrollTo(halfContentWidth - halfScreenWidth, 0);

const card = document.querySelectorAll(".card");

card.forEach(elecard => {
    elecard.addEventListener("mousemove", (e) => {

        let elRect = elecard.getBoundingClientRect();

        let x = e.clientX - elRect.x
        let y = e.clientY - elRect.y

        let midCardWidth = elRect.width / 2
        let midCardHeight = elRect.height / 2

        let angleY = -(x - midCardWidth) / 8
        let angleX = (y - midCardHeight) / 8


        elecard.children[0].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`

    })


    elecard.addEventListener("mouseleave", () => {
        elecard.children[0].style.transform = `rotate(0) rotate(0) scale(1)`
        elecard.children[0].style.transition = ".25s all ease-in-out"

    })
})
