import Lenis from "@studio-freight/lenis";

// const cursorMove = document.querySelector(".cursor");
const btnInfo = document.querySelector(".container-info-btn");
const cursorMoveTableau = [document.querySelector(".inner-cursor"), document.querySelector(".outer-cursor")];
const allliens = document.querySelectorAll("a");


function positionCursor(e) {
  // cursorMove.setAttribute("style", `top:` + (e.pageY - 50) + "px; left:" + (e.pageX - 50) + "px;");

  cursorMoveTableau.forEach(elementTab => {
    let x = e.x + "px"
    let y = e.y + "px"

    elementTab.style.left = x;
    elementTab.style.top = y;

  })

}

window.addEventListener("mousemove", positionCursor);


allliens.forEach(elementLiens => {

  elementLiens.style.cursor = "none"

  elementLiens.addEventListener("mouseenter", () => {
    document.querySelector(".inner-cursor").classList.add("grow")
  })

  elementLiens.addEventListener("mouseleave", () => {
    document.querySelector(".inner-cursor").classList.remove("grow")
  })
})


// cursorMove.forEach(element => {

//   element.addEventListener("mouseenter", (e) => {
//     const elements = document.elementsFromPoint(e.clientX, e.clientY);
//     for (let element of elements) {
//       if (element.tagName === "A") {
//         document.getElementById("cursor1").classList.add("cursorLarge")
//       }

//       if (element.tagName === "svg" &&  element.id === "up") {
//         element.style.zIndex = "10000000000 !important" 
//         document.getElementById("cursor1").classList.add("cursorLarge")
//       }
//     }
//   })


//   element.addEventListener("mouseleave", (e) => {
//     const elements = document.elementsFromPoint(e.clientX, e.clientY);
//     for (let element of elements) {
//       if (element.tagName === "A") {
//       } else {
//         document.getElementById("cursor1").classList.remove("cursorLarge")
//       }

//       if (element.tagName === "svg" && element.id === "up") {
//       } else {
//         document.getElementById("cursor1").classList.remove("cursorLarge")
//       }
//     }
//   })


//   element.addEventListener("click", () => {
//     const elements = document.elementsFromPoint(event.clientX, event.clientY);
//     for (let element of elements) {
//       if (element.tagName === "A") {
//         window.open(element.href, "_blank"); // Ouvre le lien dans une nouvelle fenêtre
//       }
//       if (element.tagName === "svg" && element.id === "up"){
//         window.scrollTo({
//           top: 0,
//           behavior: "smooth" 
//         });
//       }
//     }
//   });
// })



function mediaSociaux() {
  btnInfo.classList.toggle("open");

  let informationBtn = document.querySelectorAll(".btn-info");

  document.querySelector(".croix-svg").classList.toggle("rotateCroix");

  if (btnInfo.classList.contains("open")) {
    informationBtn.forEach((element, index) => {
      switch (index) {
        case 1:
          element.classList.add("github");
          break;
        case 2:
          element.classList.add("linkedin");
          break;
        default:
          element.classList.add("mail");
      }
    });
  } else {
    informationBtn.forEach((element, index) => {
      switch (index) {
        case 1:
          element.classList.remove("github");
          break;
        case 2:
          element.classList.remove("linkedin");
          break;
        default:
          element.classList.remove("mail");
      }
    });
  }
}

btnInfo.addEventListener("click", mediaSociaux);

const lenis = new Lenis();

lenis.on("scroll", () => {
  let scrollPosition = Math.round(lenis.progress * 100);

  if (scrollPosition > 95) {
    document.querySelector(".btn-diplome").classList.add("colorBtnSwipeDiplome");

    document.querySelector(".btn-info-croix").style.backgroundColor = "#031335";
    document.querySelector(".croix-svg").classList.add("active");

    document.querySelectorAll(".btn-info").forEach((element) => {
      element.style.backgroundColor = "#031335";


      document.querySelectorAll(".btn-info svg path").forEach((color) => {
        color.setAttribute("fill", "#F3F1EE");
      });
    });
  } else {
    document.querySelector(".btn-diplome").classList.remove("colorBtnSwipeDiplome");

    document.querySelector(".btn-info-croix").style.backgroundColor = "#F3F1EE";
    document.querySelector(".croix-svg").classList.remove("active");

    document.querySelectorAll(".btn-info").forEach((element) => {
      element.style.backgroundColor = "#F3F1EE";

      document.querySelectorAll(".btn-info svg path").forEach((color) => {
        color.setAttribute("fill", "#031335");

      });
    });
  }
});


// JS diplome

gsap.to([document.querySelector(".btn-diplome"), document.querySelector(".container-info-btn")], {
  bottom: 20,
  duration: 1,
  delay: 2
})

function containerDiplomeToggle() {
  document.querySelector(".container-diplome").classList.toggle("apparaitContainerDiplome");
}

document.querySelector(".btn-diplome").addEventListener("click", containerDiplomeToggle);




function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


