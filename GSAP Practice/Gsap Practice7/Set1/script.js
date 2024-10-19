// <!-- practiceset1 -->

// gsap.to("#box", {
//     x:1000,
//     duration: 2,
//     delay:1,
//     rotate:360,
//     backgroundColor: "blue"
// })

// // gsap.from("#box", {
// //     x:1000,
// //     duration: 2,
// //     delay:1,
// //     rotate:360,
// //     backgroundColor: "blue"
// // })<!-- ---------------------------------------------------------------- -->
    var tl = gsap.timeline()
tl.from("#nav h3",{
    y: -50,
    opacity:0,
    delay:0.1,
    duration:1,
    stagger:0.4
})

tl.from("#main h1",{
    x: -500,
    opacity:0,
    duration:0.8,
    stagger:0.4
})

tl.from("img",{
    x:100,
    rotate:45,
    opacity:0,
    duration: 0.5,
    stagger:0.5
})

tl.from("#btm h5",{
    y:100,
    rotate:90,
    opacity:0,
    duration: 0.5,
    stagger:0.5
})