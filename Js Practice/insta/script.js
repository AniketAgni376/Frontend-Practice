var con = document.querySelector("#container")
var luv = document.querySelector("i")

con.addEventListener("dblclick", function(){
    luv.style.transform = "translate(-50%,-50%) scale(1)"
    luv.style.opacity = 0.8

    setTimeout(function(){
        luv.style.opacity = 0
    },1000);

    setTimeout(function(){
    luv.style.transform = "translate(-50%,-50%) scale(0)"
    },2000);

} );