
const Contact = {

    Mail : function AffichageMail () {
        const mailAdress = document.querySelector(".adresse-mail");
        new SplitType(mailAdress, { types: "char" });

        gsap.to(".container-contact", {
            scrollTrigger : {
                trigger : ".container-contact",
                markers : true,
                start : "bottom 80%",
                end : "bottom 80%",
                onUpdate : () => {
                    gsap.to(".char", {
                        top : 0,
                        duration : 0.2,
                        stagger : 0.3
                    })
                }
            }
        })

    }
    
};
  
  export default Contact;
