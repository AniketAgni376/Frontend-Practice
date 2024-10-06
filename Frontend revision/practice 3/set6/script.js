// Create a tabbed interface where clicking on tabs displays different 
// content sections without page reload.

// var home = document.querySelector("#home");
// var about = document.querySelector("#about");
// var contact = document.querySelector("#contact");

// var hometext = document.querySelector("#hometext");
// var abouttext = document.querySelector("#abouttext");
// var contacttext = document.querySelector("#contacttext");



//  hometext.style.display="block";
//  hometext.style.width = "50%";

//  home.addEventListener("click",function(){
//    cat();
//     hometext.style.display = "block";
//     hometext.style.width = "50%";
//  })

//  about.addEventListener("click",function(){
//    cat();
//      abouttext.style.display = "block";
//      abouttext.style.width = "50%";
//  }) 

//  contact.addEventListener("click",function(){
//    cat();
//     contacttext.style.display = "block";
//     contacttext.style.width = "50%";
//  })   

//  function cat(){
//    document.querySelectorAll("h1").forEach(function(h1){
//       h1.style.display = "none";
//  })
// }



var divs = document.querySelectorAll('.tab');
var texts = document.querySelectorAll('h1');


texts[0].style.display = "block";
texts[0].style.width = "50%";

divs.forEach(function (div, index){
   div.addEventListener("click", function(){
      hideAllText();
      texts[index].style.display = "block";
      texts[index].style.width = "50%";
      
   });
});

function hideAllText() {
   texts.forEach(function (text) {
      text.style.display = "none";
   });
}