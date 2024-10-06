// Create a cearch bar that displays live search results as users type, 
// updating the results without requiring a full page reload.

var input = document.querySelector("input");

var data = [
    {name: "Abishiek", src: "https://plus.unsplash.com/premium_photo-1679981593879-82b177233d2b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Shaurya", src: "https://plus.unsplash.com/premium_photo-1669882305273-674eff6567af?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Shivam", src: "https://plus.unsplash.com/premium_photo-1674639437824-771a65f1738b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Aniket", src: "https://images.unsplash.com/photo-1592288954366-f09b5b05c604?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Pragati", src: "https://images.unsplash.com/photo-1572671846602-1e3a1f4c177f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Tanu", src: "https://plus.unsplash.com/premium_photo-1668896122605-debd3fed81a4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Pallavi", src: "https://images.unsplash.com/photo-1521620860034-0a3430d856d3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
]

var pers = "";
data.forEach(function (elem){
    pers += `<div class="person">
    <div class="img">
     <img src="${elem.src}"
       alt="">
       </div>
       <h4>${elem.name}</h4>
       </div>`;
    })

       document.querySelector(".people").innerHTML = pers;

       input.addEventListener("input", function(){
        var matching = data.filter(function(e){
            return e.name.startsWith(input.value)
        })
       
        var newusers = "";
        matching.forEach(function(elem) {
            newusers += `<div class="person">
    <div class="img">
     <img src="${elem.src}"
       alt="">
       </div>
       <h4>${elem.name}</h4>
       </div>`; 
        })

        document.querySelector(".people").innerHTML = newusers;
    })