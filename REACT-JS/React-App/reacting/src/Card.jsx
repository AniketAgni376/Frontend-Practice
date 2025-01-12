// import React, { useState } from 'react'

// function App() {
//     const [val, setVal] = useState(false);
//   return (
//     <div>
//         {/* Agar val true hai to print karo chal jao
//         agar val false hai to bolo mat chalao. */}
//         <h1>{val === false ? "bahar jao" : "mat jao"}</h1>
//         <button onClick={()=>setVal(()=>!val)} className='p-10 px-2 py-1  bg-blue-500 rounded-full text-sm'  >Click</button>
//     </div>
//   )
// }

// export default App

// ...................................................................
// Practice of useState() Hooks by creating a card
// import React, { useState } from "react";
// import { HiArrowNarrowRight } from "react-icons/hi";

// function App() {
//   const [val, setVal] = useState(false);
//   return (
//     <div className="w-full h-screen bg-zinc-500 flex justify-center items-center">
//       <div className="relative w-60 h-32 rounded-md  bg-zinc-500 flex overflow-hidden">
//         <img
//           className={`shrink-0 transition-transform duration-900 ease-in-out ${
//             val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"
//           } w-full h-full object-cover`}
//           src="https://images.unsplash.com/photo-1531901390263-0016793c7c7d?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           alt=""
//         />
//         <img
//           className={`shrink-0 transition-transform duration-900 ease-in-out ${
//             val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"
//           } w-full h-full object-cover`}
//           src="https://images.unsplash.com/photo-1669665195513-c3ebd47cb999?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           alt=""
//         />
//         <span
//           onClick={() => setVal(() => !val)}
//           className="w-8 h-8 bg-[#dadada7b] flex items-center justify-center absolute rounded-full bottom-0 left-1/2 -translate-x-[50%] -translate-y-[50%]"
//         >
//           <HiArrowNarrowRight size={"1em"} />
//         </span>
//       </div>
//     </div>
//   );
// }

// export default App;

//................................................................
