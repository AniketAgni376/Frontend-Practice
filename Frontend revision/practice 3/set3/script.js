/* Create a form with input fields and a submit button. 
Use Javascript to validate the form and display an error message
if the input is valid.*/

// var form = document.querySelector("form"); 
// var inp1 = document.querySelector("#inp1");
// var inp2 = document.querySelector("#inp2");
// var h =  document.querySelector("h1");


// form.addEventListener("submit", function(ev){
//    ev.preventDefault();
//    console.log(inp1.value);
//    if(inp1.value === "" || inp2.value === "")
//          h.textContent = "Error";  
//           h.style.color = "red";
         
// })

var form = document.querySelector("form");
var inps = document.querySelectorAll('input[type="text"]');
var h4 = document.querySelector("h4");



form.addEventListener("submit", function (ev) {
  ev.preventDefault();
  for(var i = 0; i<inps.length; i++){
       if(inps[i].value.trim() === ''){
        h4.textContent = "Error";
        h4.style.color = "red";
        break; 
      } 
  }
})