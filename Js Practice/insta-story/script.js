var arr =[
    {dp:"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
    story:"https://images.unsplash.com/photo-1606607291535-b0adfbf7424f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    
    {dp:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D" ,
    story:"https://images.unsplash.com/photo-1608999383953-d61f5d9c1ace?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    
    {dp:"https://images.unsplash.com/photo-1648213613846-5f930cb8d653?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D" ,
    story:"https://images.unsplash.com/photo-1560350894-68244ac04656?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    
    {dp:"https://plus.unsplash.com/premium_photo-1708337889349-6164efa8eaaf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D" ,
    story:"https://plus.unsplash.com/premium_photo-1674489620667-eaf4a0094996?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    
]
var stories = document.querySelector("#stories")

var clutter = ""  // variable declaration
arr.forEach(function(elem,idx){
    
    clutter += `<div class="story">
    <img id= "${idx}" src="${elem.dp}" alt="">
    </div>` //templete literals
})
stories.innerHTML = clutter
stories.addEventListener("click",function(dets){
    document.querySelector("#full-screen").style.display = "block"
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`
    
    setTimeout(function(){
        document.querySelector("#full-screen").style.display = "none"
    }, 3000)
});
