// import React, { useState } from "react";

// function App() {
//     const ans = useState(false);
//     console.log(ans[0]);}
//     export default App;

// jab ham ans[0] ko print karwa rhe hain to do false arha hai console
// kruki useState me do index hote hain 0,1. 1 ek function hota hai jiske madhyam
// se ham state ki value change karte hain indirectly because ham state ki value
// directly change nahi karte hain.
//......................................................

// import React, { useState } from "react";

// function App() {
//      const [score, setScore] =  useState(200);

//     return (
//         <div>
//           {score}
//         </div>
//     )
// }
// export default App;

// What's happening here is score ki value set karrhe hain
// or array ke 0 index k constant ko use karke value ko show karrhe hain.

// ....................................................

// import React, { useState } from "react";

// function App() {
//      const [score, setScore] =  useState(100);

//  setScore(200); //Not a good practice
// return (
//     <div  className="p-10">
//       <h1 className="p-3">{score}</h1>

{
  /* <button onClick={setScore} className="px-2 py-1 text-xs bg-blue-900 text-white rounded-md">Change</button> //Not a good practice */
}

{
  /* <button onClick={()=>setScore(300)} className="px-2 py-1 text-xs bg-blue-900 text-white rounded-md">Change</button> */
}

{
  /* <button onClick={()=>setScore(400)} className="px-2 py-1 text-xs bg-blue-900 text-white rounded-md">Change</button> */
}
{
  /*this is one way to change the value of state by using index 1.  */
}

{
  /* <button onClick={()=>setScore(400)} className="px-2 py-1 text-xs bg-blue-900 text-white rounded-md">Change</button> */
}

{
  /* </div>
    )
}
export default App; */
}

// .....................................................

// Ye hogyi score ki bat matlab 0 index ki baat.
// ab baat karte hain 1 index ki yani setScore ki jaha ek function hota hai jo state ki value change karne me help karta hai...

// import React, { useState } from "react";

// function App() {
// const [banned, setBanned] =  useState(true);
// return (
//   <div  className="p-10">
//     <h1 className="p-3">{banned.toString()}</h1>

//     <button onClick={()=>setBanned(!banned)} className="px-2 py-1 text-xs bg-blue-900 text-white rounded-md">Change</button>

// </div>
// )
// }
// export default App;

// this was first basic class of useState.

// ......................****................................................................
// this was Intermediate level of class of useState.

// import React, { useState } from 'react'

// function App() {
//   const[val, setVal] = useState(1);

//   return (
//     <div className='p-4'>
//       <h1 className='p-4'>{val}</h1>
//       <button onClick={()=>setVal(prev=>prev+1)} className='px-1 py-2 bg-blue-400 text-white text-xs rounded-md'>Change Karo</button>
//       </div>

//   )
// }

// export default App

// .........................***.........................................................................

// this was Advance class of useState.

// import React, { useState } from 'react'

// function App() {
//   const[val, setVal] = useState({name: 'Aniket', isBanned: true});

//   return (
//     <div>
//     <h1 className='px-8'>name : {val.name}</h1>
//     <h2 className='px-8'>banned : {val.isBanned.toString()}</h2>
//   <button onClick={()=>setVal((({...val, isBanned: !val.isBanned})))} className='px-3 py-1 bg-blue-400 text-white text-xs rounded-md'>Change Karo</button>
//       </div>

//   )
// }

// export default App

// ...............***................................................................
// How do we change the color of the button

// import React, { useState } from "react";
// function App() {
//   const [val, setVal] = useState({ name: "Aniket", isBanned: true });

//   return (
//     <div>
//       <h1 className="px-8">name : {val.name}</h1>
//       <h2 className="px-8">banned : {val.isBanned.toString()}</h2>
//       <button
//         onClick={() => setVal({ ...val, isBanned: !val.isBanned })}
//       className={`px-3 py-1 ${
//         !val.isBanned? "bg-blue-400" : "bg-red-400"
//       } text-white text-xs rounded-md`}
//       >
//         Change Karo
//       </button>
//     </div>
//   );
// }

// export default App;

// ...............***................................................................

// levelup
// here we have two fields name and age now we will learn how to add third dynamically created

// import React, { useState } from "react"

// function App() {
//  const [val, setVal] = useState({ name: "Rohan", age: 34 });

//  return (
//  <div>
//     <button onClick={()=>console.log(val)}>Click here</button>
//  </div>
//  )
// }

// export default App;

// .............................................................................
// Agar aap koi extra field jodte ho to set val update to karega par
// turant update nahi karega asynchronously behind the scene update
// hoga.
// Async await lagane ke baad bhi aap uska ans directly nhi dekh sakte
// console>components me jakar dekhna padta hai which is not sol.

// import React, { useState } from "react"
// function App() {
//  const [val, setVal] = useState({ name: "Ankit", age: 30});

// return (
//   <div>
//     <button onClick={async()=>{
//       setVal({...val, city: "lko"});
//        console.log();
//     }}>cLICK mE</button>
//   </div>
// )

// }

// export default App;

// .....................................................

//  useStateArray - Removal
// we have an array and our task is to update that.

// import React, { useState } from 'react'

// function App() {
//   const [val, setVal] = useState([1,2,3,4,5,6])
//   return (
//     <div className='p-9'>
//       {val.map(item=><h1>{item}</h1>)}
//       <button onClick={()=>setVal(()=>{
//         return val.filter((item, index)=>index!=val.length-1)
//       })} className=' px-1 py-2 bg-blue-400 rounded-full text-xs text-white'>Click Me</button>
//     </div>
//   )
// }

// export default App

// import React, { useState } from "react";

// function App() {
//   const [val, setVal] = useState([
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
//   ]);
//   return (
//     <div className="p-10">
//       {val.map((item) => (
//         <h1>{item}</h1>
//       ))}
//       <button
//         onClick={() => setVal(() => val.filter((item) => item % 2 !== 0))}
//         className="px-1 py-2 text-sm text-white rounded-full bg-blue-500"
//       >
//         Click Me
//       </button>
//     </div>
//   );
// }

// export default App;

//..................................................................

// //  useStateArray - Addition (Basic)
// import React, { useState } from "react";

// function App() {
//   const [val, setVal] = useState([
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
//   ]);
//   return (
//     <div className="p-10">
//       {val.map((item) => (
//         <h1>{item}</h1>
//       ))}
//       <button
//         onClick={() => setVal([...val, 34])}
//         className="px-1 py-2 text-sm text-white rounded-full bg-blue-500"
//       >
//         Click Me
//       </button>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";

// function App() {
//   const [val, setVal] = useState([
//    { name:"Rohan", age: 20 },
//    { name:"Ankit", age: 30 },
//    { name:"Rahul", age: 25 }
 
//   ]);
//   return (
//     <div className="p-10">
//       {val.map((item) => (
//         <div>
//           <h1>{item.name}</h1>
//           <h2>{item.age}</h2>
//         </div>
//       ))}
//       <button
//         onClick={() => setVal(()=>val.map(item=> item.name === "Ankit" ? ({name: "Ankit", age:26}):item))}
//         className="px-1 py-2 text-sm text-white rounded-full bg-blue-500"
//       >
//         Click Me
//       </button>
//     </div>
//   );
// }

// export default App;


// import React, { useState } from "react";

// function App() {
//   const[val, setVal]=useState([
//     {name: "Aniket", age: 29},
//     {name: "Mohit", age: 21},
//     {name: "harsh", age:"41"}
//   ]);
//   return (
//     <div className="p-10">
//       {val.map((item) => (
//         <div>
//           <h1>{item.name}</h1>
//           <h2>{item.age}</h2>
//         </div>
//       ))}
    

      
//       <button
//         onClick={() => setVal(()=>val.map(item=> item.name=== "Aniket" ? ({name: "Aniket", age: 31}):item))}
//         // onClick={() => setVal(()=>val.map(item=> item.name === "Ankit" ? ({name: "Ankit", age:26}):item))}
//         className="px-1 py-2 text-sm text-white rounded-full bg-blue-500"
//       >
//         Click Me
//       </button>
//     </div>
//   );
// }

// export default App;

// ..............................................................................
