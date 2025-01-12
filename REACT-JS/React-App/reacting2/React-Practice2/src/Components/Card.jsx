// Props use hote hain apke components ko reusable banane ke liye, consider karo apke paaas ek button hai or apko apne button ko alag alag jagah dalna hai App mein, to aap ek button component banaein or uska data hard coded karne ke bajae parent component se send kardein and child component par use kar lein.



// 1)
// import React from 'react'

// function Card({text, color}) {
//   return (
//     <button className={`m-6 px-3 py-1 bg-white-400 rounded-full text-xs ${color} shrink-0`}>{text}</button>
//   )
// }

// export default Card

// 2) prop drilling usage

// Hamara data actually main App component mein hoga or ham use props ke through pass karenge cards me, har card me ek add friend button hoga and hamein add friend button click hone par alert dena hoga.

// import React from 'react'

// function Card({image, profession, name}) {
//   return (
//     <div className="w-52 bg-white rounded-md overflow-hidden">
//         <div className="w-full h-40 bg-sky-200">
        
//         <img className="w-full h-full object-cover object-[center_top]" src={`${image}`} alt="" /></div>
//     <div className="w-full p-3">
//         <h3 className="text-xl font-semibold">{name}</h3>
//         <h5 className="text-xs">{profession}</h5>
//         <button onClick={()=>alert("Shutup")} className="mt-4 px-3 py-1 text-xs text-white bg-blue-500 font-semibold rounded-md">Add Friend</button>
//     </div>
//     </div>
//   )
// }

// export default Card

// 3- Facebook add friend suggestion feature.
import React from 'react'

function Card({values,index, handleClick}) {
  const {name, image, profession, friends}  = values;
  return (
    <div className="w-52 bg-white rounded-md overflow-hidden">
        <div className="w-full h-40 bg-sky-300">
          <img className="w-full h-full object-cover object-[center_top]" src={image} alt="" /></div>
        <div className="w-full p-3"> 
          <h3 className="font-semibold text-xl">{name}</h3>
          <h5 className=" text-xs">{profession}</h5>
        
        <button onClick={()=>handleClick(index)} className={`m-3 sticky-0 px-3 py-1
         text-white text-xs ${friends ? "bg-blue-600" : "bg-green-900"} rounded-md `}  >{friends===true ?
         "Remove Friend" : "Add Friend" }</button>

    </div>
    </div>
  )
}

export default Card