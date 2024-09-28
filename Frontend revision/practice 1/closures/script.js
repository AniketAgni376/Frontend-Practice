//closures
//aisa koi bhi function jo kisi or function ko return karde.


//example 1
// function counter(){
//     var count = 0;
//     return function(){
//         count++;
//         console.log(count);
//     }
// }
// var fnc = counter();
// fnc();


//example 2

function timer(){
    var a = 12;
    return setTimeout(function(){
        console.log(a);
    }, 9000)
}
timer();