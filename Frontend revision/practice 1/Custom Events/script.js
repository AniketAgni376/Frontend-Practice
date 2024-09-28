//events preexisted- [click,double-click,mouseover,input]
//event that you create on your own.

// How do you make ? >
// *make event.
// *attach event to some dom element.
// *dispatch that event from that dom element in which you attached the event.

//Why do you make ? >

const evt = new Event("Task");

document.querySelector("button")
.addEventListener("task",function(){
    alert("Task Done?");
})