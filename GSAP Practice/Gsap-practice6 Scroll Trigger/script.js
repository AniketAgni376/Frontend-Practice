gsap.from("#page1 #box",{
    scale:0,
    delay:1,
    duration:2,
    rotation:96668760,
    scrollTrigger:{
        trigger: "#page1 #box",
        scroller: "body",
        start:"top60%",
        end:"top 40%",
        scrub:5,
    }
})

gsap.from("#page2 h1",{
    opacity: "0",
    x:500,
    scale:0,
    duration:2,
    rotation:3,
    scrollTrigger:{
        trigger: "#page2 h1",
        scroller: "body",
        start:"top60%",
        end:"top 30%",
        scrub:5,
    }
})

gsap.from("#page2 h2",{
    opacity: "0",
    y:500,
    scale:0,
    rotation:130,
    scrollTrigger:{
        trigger: "#page2 h1",
        scroller: "body",
        start:"top 60%",
        end:"top 30%",
        scrub:5,
    }
})

gsap.from("#page3 #box",{
    scale:0,
    delay:1,
    duration:2,
    rotation:96,
    scrollTrigger:{
        trigger: "#page3 #box",
        scroller: "body",
        start:"top 60%",
        end:"top 40%",
        scrub:5,
    }
})


