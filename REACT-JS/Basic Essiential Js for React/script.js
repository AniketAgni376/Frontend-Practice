// Spread Operator

// Here state is array
// var state = [1,2,3,4,5];
// var copy = [...state];

// copy.pop();

// Now state is object
// Since we can't change the state directly , 
// we will create a copy of it, 
// we will make changes in copy and then 
// we will put the data of copy in state like this :-

// var state = {name: "Harsh", age: 24};
// var copy = {...state};
// copy.name = "Harshita";
// state = copy;

// ----------------------------------------------

// destructuring

// var obj = {name: "Anik", age:25, email: "abc@gmail.com"};
// agar tumhe 10 jahag age 
// chahiye to tumhe aaise likhna padega
// obj.age
// obj.age
// obj.age
// obj.age
// obj.age
// obj.age
// ---10X which is not a good practice , it'll kill time.

// const {age} = obj;
// const {email} = obj;
// email now by this process we can reduce the lines 
// of code and make it easier and simplier. To understand it better 
// let me give another example.

// var obj = {
//     name:"string", 
//     social:{
//     facebook: {
//         first: "Abc",
//         sec: "cvb"
//     },
// },
// };

// obj.social.facebook.sec
// This is the line we will have to repeat that will  
//  const {sec} = obj.social.facebook.sec;
// waha tak jao jaha sec available ho.


// var arr = [12, function(){}, 34];

// var [first,, sec] = arr;


// ---------------------------------------------------

// arrow functions
// ---------------------------------------------------
// map filter

// dono hi array pe chalte hain, aur dono ka kaam hai 
// array par kuch perform karna and ek naya array return karna.

// var arr = [1,2,3,4,5];
// map - har element par kuch karo and naye array mein rakhho 

//  foreach ke andar aata hai function and function ke andar aata hai value
// map ke andar return karne ke wajah se hi elements naye array me place hote hain. 

// const ans = arr.map(val => {
    // return val*2; //if your function is doing multiple tasks use this method.
// })
// ----
// If function is performing single task
// const ans = arr.map(val => val*24);
// ----
// state ek array hai usme objects hain and aapko har value me +1 karna hai.

// var state = [1,2,3,4,5,6];
// const ans = state.map(elem => elem+1)
// state=ans; //now here value of state changed.

// map ke sath har vo sare task perform karsakte hain jaha hame
// sare bando par kuch perform karna hai or ek naya array return karna hai.
// Ya kisi ek bande par koi task perform karna hai or ek naya array return karna hai.

// For example

// Ek array hai sare numbers jo ki 5 se bade hain unme 5 jod dena 
// and baki numbers waise ke waise return kar dena nay array me.

// var state = [11,22,3,4,5,6,14,55,34,66];
// const ans = state.map( elem => elem>5 ? elem+5 : elem )

// var state = [1,2,3,44,55,66,7,8,9,10];
// let ans = state.map(elem => elem<9 ? elem+100 : elem)

// map filter me ek hi fark hai , map sare bande lautata hai matlab ki 

// count kam nhi hoga, filter bando ko kam kar sakta hai.

// jab original arr ka size kam na hona ho wha map use hota hai

// jab og array ka size kam karna ho to waha filter use hota hai.

// for example-

// ek array mein se vo sare number hata do jo 5 se cote ho.

// var state = [1,2,3,44,55,66,7,8,9,10];
// let ans = state.filter(elem => elem>9)

// var arr =  [
//     {
//     name: "harshit", gender: "male"
//     },
//     {
//     name: "harshita", gender:"female"    
//     },
//     {
//     name: "Rahul", gender: "male"
//     }  
// ]

// let ans = arr.filter(elem => elem.gender==="female");

// var arr =  [
//     {
//         product: "iphone", price: "50000"
//     },
//     {
//         product: "Nokia", price: "20000"   
//     },
//     {
//         product: "Lava", price: "2000"
//     }  
// ]

// let ans = arr.filter(elem => elem.price<1000)
