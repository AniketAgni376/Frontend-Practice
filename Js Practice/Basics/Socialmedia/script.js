var istatus = document.querySelector("h5")
var addFriend = document.querySelector("#add")
var flag = 0
console.log(flag)

btn.addEventListener("click",function(){
    if(flag == 0){
    istatus.innerHTML = "Friends"
    istatus.style.color = "green"
    console.log(flag)
    btn.innerHTML = "Remove Friend"
    flag = 1
    console.log(flag)
} else{
    istatus.innerHTML = "Stranger"
    istatus.style.color = "Red"
    console.log(flag)
    btn.innerHTML = "Add Friend"
    flag = 0
    console.log(flag)
}
})