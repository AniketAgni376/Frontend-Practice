function homepageAnimation() {
    gsap.set(".slidesm", {scale: 5})
    
    var tl = gsap.timeline({
    scrollTrigger: {
            trigger: ".home",
            start: "top top",
            end: "bottom bottom",
            // pin: true,
            scrub:1
    }
        })
    
    tl.to(".vdodiv", {
        '--clip': "0%",
        ease: Power2,
    },'a')
    
    tl.to(".slidesm", {
        scale: 1,
        ease: Power2,
    }, 'a')
    
    tl.to(".lft", {
        xPercent: 10,
        stagger: .03,
        ease: Power4,
    },'b')
    
    tl.to(".rgt", {
        xPercent: -10,
        stagger: .03,
        ease: Power4,
    },'b')
}


function realPageAnimation() {
    gsap.to(".slide", {
        scrollTrigger: {
            trigger: ".real",
            start: "top top",
            end: "bottom bottom",
           scrub: 1
        },
        xPercent: -200,
        ease: Power4
        })
}



homepageAnimation();
realPageAnimation();
