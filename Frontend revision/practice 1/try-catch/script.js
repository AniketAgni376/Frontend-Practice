//Error handeling like a pro - try catch.

function divide(a,b){
    try{
       if(b === 0){
           throw Error("Something is fishy");
       } 
       console.log(a/b);
    }
    catch(err){
        console.error(err);
    }
}

divide(12,4);