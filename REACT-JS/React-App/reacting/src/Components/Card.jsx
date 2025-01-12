//  Passing data via props

//  Props use hote hain apke components ko reusable banane k liye, consider karo apke paas ek button hai and apko us button ko alag alag jagah jalna hai app me , to aap ek button component banaein or and uska data  hard coded karne ke jagah parent component se send karde and child component par use karlein. 

// Practise


// import React from 'react'

// function Card({text, color}) {
//   return (
//     <button className={`px-3 m-3 py-1 ${color} text-sm text-white rounded-full `}>
//      {text}
//       </button>
//   )
// }

// export default Card

// ....................................................

// #demo

// import React from 'react'

// function Card({text, color}) {
//   return (
//     <button className={`m-5 px-3 py-1 ${color} rounded-full text-sm text-white`}> {text} </button>
//   )
// }

// export default Card

// .......................................................

//  Hamara data actually main app component mein hoga or ham use props ke through pass karenge cards mein, har card par ek add friend button hoga and hamein add friend button par click hone par alert dena hai.

// alert message
// import React from 'react'

// function Card() {
//   return (
//     <div>
//       <button onClick={() => alert('Friend added successfully!')} className='m-3 px-3 py-1 text-sm text-white rounded-full bg-blue-600'>Add Friend</button>
//     </div>
//   )
// }

// export default Card

// ....................................................................





import React from 'react'

function Card() {
  return (
    <button>ergsrthsrthrthsrth</button>
  )
}

export default Card