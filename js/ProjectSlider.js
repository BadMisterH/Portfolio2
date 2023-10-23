import Lenis from "@studio-freight/lenis";

const titleProjects = document.querySelector(".TitleProjects");
new SplitType(titleProjects, { types: "chars" });

const lenis = new Lenis();

function scrollPositionExact() {
    let positionScrollY = Math.ceil(lenis.progress * 100);

    const sectionOnecontainer = [
        document.querySelector(".description-project"),
        document.querySelector(".imgtTechTitre"),
    ];

    const sectionOnecontainer2 = [
        document.querySelector(".description-project2"),
        document.querySelector(".imgtTechTitre2"),
    ];

    const sectionOnecontainer3 = [
        document.querySelector(".description-project3"),
        document.querySelector(".imgtTechTitre3"),
    ];

    if (positionScrollY >= 44) {

        document.querySelector(".imgProject").classList.add("animated-path")
        document.querySelector(".content-project-all-one").style.transform =
            "translateX(0px)";

        document.querySelector(".description-project").style.display = "flex";
        document.querySelector(".imgtTechTitre").style.display = "flex";

        sectionOnecontainer.forEach((elementContainerSec, index) => {
            if (index == 0) {
                gsap.to(elementContainerSec, {
                    duration: 1,
                    delay: 0.2,
                    opacity: 1,
                    ease: "power2.out",
                    y: 0
                });
            } else {
                gsap.to(elementContainerSec, {
                    duration: 1,
                    delay: 0.2,
                    opacity: 1,
                    ease: "power2.out",
                    y: 0
                });
            }
        });
    }

    if (positionScrollY >= 54) {
        sectionOnecontainer2.forEach((elementContainerTwoProject, index) => {
            if (index == 0) {
                gsap.to(elementContainerTwoProject, {
                    duration: 1.2,
                    delay: 0.7,
                    opacity: 1,
                    ease: "power2.out",
                    y: 0
                });
            } else {
                gsap.to(elementContainerTwoProject, {
                    duration: 1.2,
                    delay: 0.7,
                    opacity: 1,
                    ease: "power2.out",
                    y: 0
                });
            }
        })
    }

    if (positionScrollY >= 70) {

        document.querySelector(".content-project-all-one").style.transform =
            "translateX(0px)";

        document.querySelector(".description-project3").style.display = "flex";
        document.querySelector(".imgtTechTitre3").style.display = "flex";

        sectionOnecontainer3.forEach((elementContainerSec, index) => {
            if (index == 0) {
                gsap.to(elementContainerSec, {
                    duration: 1,
                    delay: 0.2,
                    opacity: 1,
                    x: 0
                });
            } else {
                gsap.to(elementContainerSec, {
                    duration: 1,
                    delay: 0.2,
                    opacity: 1,
                    y: 0
                });
            }
        });
    }

}

lenis.on("scroll", scrollPositionExact);


gsap.to('.rideau-projet-txt.char', {
    scrollTrigger: {
        onUpdate: (self) => {
            const progressionScrollProjet = Math.ceil(self.progress * 100);

            if (progressionScrollProjet >= 100) {

                document.querySelectorAll('.char').forEach((element, index) => {

                    switch (index) {
                        case 0:
                            gsap.to(element, {
                                height: 400,
                                duration: 0.5,
                                delay: 0.5
                            })
                            break;

                        case 1:
                            gsap.to(element, {
                                height: 400,
                                duration: 0.5,
                                delay: 0.7
                            })
                            break;

                        case 2:
                            gsap.to(element, {
                                height: 400,
                                duration: 0.5,
                                delay: 0.9
                            })
                            break;

                        case 3:
                            gsap.to(element, {
                                height: 400,
                                duration: 0.5,
                                delay: 1.1
                            })
                            break;

                        case 4:
                            gsap.to(element, {
                                height: 400,
                                duration: 0.5,
                                delay: 1.3
                            })
                            break;

                        case 5:
                            gsap.to(element, {
                                height: 400,
                                duration: 0.5,
                                delay: 1.5
                            })
                            break;

                        default:
                            gsap.to(element, {
                                height: 400,
                                duration: 0.5,
                                delay: 1.7
                            })

                    }

                })



            } else {

                document.querySelectorAll('.char').forEach((element, index) => {

                    switch (index) {
                        case 0:
                            gsap.to(element, {
                                height: 0,
                                duration: 0.5,
                                delay: 0.5
                            })
                            break;

                        case 1:
                            gsap.to(element, {
                                height: 0,
                                duration: 0.5,
                                delay: 0.7
                            })
                            break;

                        case 2:
                            gsap.to(element, {
                                height: 0,
                                duration: 0.5,
                                delay: 0.9
                            })
                            break;

                        case 3:
                            gsap.to(element, {
                                height: 0,
                                duration: 0.5,
                                delay: 1.1
                            })
                            break;

                        case 4:
                            gsap.to(element, {
                                height: 0,
                                duration: 0.5,
                                delay: 1.3
                            })
                            break;

                        case 5:
                            gsap.to(element, {
                                height: 0,
                                duration: 0.5,
                                delay: 1.5
                            })
                            break;

                        default:
                            gsap.to(element, {
                                height: 0,
                                duration: 0.5,
                                delay: 1.7
                            })

                    }

                })

            }
        }
    }

})



function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


