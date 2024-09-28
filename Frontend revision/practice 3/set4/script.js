
// Create an unordered list. Allow users to add and remove list 
// items dynamically using button.

var li = document.createElement("li");
var add = document.querySelector("#add");
var remove = document.querySelector("#remove");
var ul = document.querySelector("ul");
var inp = document.querySelector("input");
// var add = document.querySelector("#add");
// var remove = document.querySelector("#remove");
// var inp = document.querySelector("input");
// var li = document.createElement("li");
// var ul = document.querySelector("ul");

var li;
// var li;

add.addEventListener("click",function(){
if(inp.value.trim() === ""){}
else{
     li.textContent=inp.value;
     ul.appendChild(li);
     inp.value="";
}})

remove.addEventListener("click", function(){
     ul.removeChild(li)
})
// add.addEventListener("click", function(){
//      if(inp.value.trim() === "") {}
// else{
//      li.textContent = inp.value;
//      ul.appendChild(li);
//      inp.value="";
// }
// })
// remove.addEventListener("click" function(){
//    ul.removeChild(li)
// })



















// var add = document.querySelector("#add");
// var remove = document.querySelector("#remove");
// var inp = document.querySelector("input");
// var li = document.createElement("li");
// var ul = document.querySelector("ul");
// var li;
// add.addEventListener("click", function(){
//      if(inp.value.trim() ===""){}
//      else{
//      // document.createElement("li");
//      li.textContent = inp.value;
//      ul.appendChild(li);
//      inp.value = "";        
//      }
//      })
// remove.addEventListener("click", function(){
//           ul.removeChild(li)
// })


// var add = document.querySelector("#add");
// var remove = document.querySelector("#remove");
// var inp = document.querySelector("input");
// var li = document.createElement('li');
// var ul = document.querySelector('ul');

// var li;

// add.addEventListener("click", function(){
//  if(inp.value.trim() === ''){}
//  else{
//      document.createElement("li"); 
//      li.textContent = inp.value;
//      ul.appendChild(li);
//      inp.value = "";
//  }
// })

// remove.addEventListener("click", function(){
//      ul.removeChild(li)
// })