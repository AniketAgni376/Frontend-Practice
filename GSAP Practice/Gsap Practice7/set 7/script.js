// For one Element

// var h1 = document.querySelector
// ("#first").textContent
// var splitedText = h1.split("")
// var clutter = ""
// splitedText.forEach(function(elem){
//     clutter += `<span>${elem}</span>`

// })
// document.querySelector("#first").innerHTML = clutter

// *******************************************************************




// for multiple elements
var allH1 = document.querySelectorAll("#page2 h1")

allH1.forEach(function(elem){
    var clutter = ""
    var h1Text = elem.textContent
    var splittedText = h1Text.split("")
    splittedText.forEach(function(e){
        clutter += `<span>${e}</span>`
    })
    elem.innerHTML = clutter
    console.log(elem)
})


gsap.to("#page2 h1 span",{
     color:"#E3F3C4",
     stagger:0.1,
     scrollTrigger:{
        trigger:"#page2 h1",
        scroller:"body",
        markers:true,
        start:"top 50%",
        end: "top 10%",
        scrub:1
     } 
})