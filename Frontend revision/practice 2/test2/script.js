var btn = document.querySelector("button");
var h = document.querySelector("h1");
btn.addEventListener("mouseover", function(){
         h.style.color = "#100";

});
btn.addEventListener("mouseleave",function(){
h.style.color = "#000";

});
