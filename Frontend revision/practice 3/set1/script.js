// Create an HTML page with a button, 
// when the button is clicked, change the text of a paragraph element.

var para = document.querySelector("p");
var btn = document.querySelector("button");

btn.addEventListener("click",function(){
   para.textContent = "om jai";
    })


// btn.addEventListener("on-click",function(){
// para.style.color = "#456";
// para.innerHTML = "Lorem ipsum dolor sit amet."; 
// })

// btn.addEventListener("on-click",function(){
//     para.style.color = "Red";
//     para.innerHTML = "Lorem, ipsum dolor.";
//     })

   