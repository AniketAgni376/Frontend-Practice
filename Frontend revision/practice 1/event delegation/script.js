// event delegation = jab aap event listener se kai sare different elements ke events ko handle kar sake
//event listener ko parent par lagao and usko id,class ya fir tag ke basis par differentiate krke different task karao.
//--------------------------------------------------------------------------------------------------------------------------------------



//----------------------------------------------------------------------------------------------------------------------------------
// var parent = document.querySelector("#parent");
// parent.addEventListener("click", function(){
//     console.log("works")
// })

var parent = document.querySelector("#parent");
parent.addEventListener("click", function(details){
    if(details.target.id === "play"){
        console.log("play song");    
    }
    else if(details.target.id === "pause"){
    console.log("pause song");
    }
})