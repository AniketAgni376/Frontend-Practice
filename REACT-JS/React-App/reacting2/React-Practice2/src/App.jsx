// 1) props

// import React from 'react';
// import Card from './Components/Card';
// function App() {
//   return (
//   <div>
//     <Card text='Accept' color="bg-red-700"/>
//     <Card text='Decline' color="bg-blue-600"/>
//     </div> 
  
//    );
//    }

// export default App;

// 2) prop drilling usage

// import React from 'react';
// import Card from './Components/Card';
// function App() {
//     const data = [
//       {name: 'john', profession: 'Painter', image: "https://images.unsplash.com/photo-1644375392039-bcd68b2fa79b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
//       {name: 'jane', profession: 'Writer', image: "https://plus.unsplash.com/premium_photo-1681844013290-122f3ca4fbec?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
//       {name: 'mike', profession: 'Musician', image: "https://images.unsplash.com/photo-1593659238861-ee6e27fb9855?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
//       {name: 'sarah', profession: 'Doctor', image: "https://plus.unsplash.com/premium_photo-1661580574627-9211124e5c3f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
//       {name: 'tom', profession: 'Engineer', image: "https://images.unsplash.com/photo-1573496547376-81418527a728?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
//     ];
//   return (
//   <>
//   <div className='w-full h-screen bg-zinc-300 flex gap-4 items-center justify-center'>
//     {data.map((item, index) =>(
//       <Card image={item.image} profession={item.profession} name={item.name}/>

//     ))}
    
//     </div>

//     </> 
  
//    );
//    }

// export default App;

// ........................................................................................

// Changing add friend status to friends.
// Point to be noted, jab bhi aap chahte hain aapki screen par kuch cheez badle or jab vo badle to turant vo dikh jae to uska matlab hota hai state, agar state badli do react us cheez ko turant render karta hai.
// 3- Facebook add friend suggestion feature.

import React, { useState } from 'react'
import Card from './Components/Card'
   function App() {
  
    const raw = [
    {name: 'Aniket Agnihotri', profession: 'Webdeveloper', image: 'https://images.unsplash.com/photo-1644375392039-bcd68b2fa79b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', friends: false},
    {name: 'Vivek Gupta', profession: 'Lawyer', image: 'https://images.unsplash.com/photo-1584940120743-8981ca35b012?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', friends: false},
    {name: 'Sky', profession: 'Builder', image: 'https://plus.unsplash.com/premium_photo-1674777843430-3c0413584110?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', friends: false},
    {name: 'Dilshaad', profession: 'Marbel Shop', image: 'https://images.unsplash.com/photo-1594814028668-9b44cea6a5ad?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', friends: false},
    {name: 'Devrat Mishra', profession: 'Agro King', image: 'https://images.unsplash.com/photo-1704637170201-a8faf43c2b2a?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', friends: false},
    // for doing that, I am adding extra field named friends , by default uski value hogi false.
   ];

   const [data, setData] = useState(raw) // Kyoki mujhe pta hai raw namak data kabhi bhi manipulate hosakta hai to maine uska state bana liya.    //  state jaha banti hai wahi se modify kari ja sakti hai.
   const handleClick = (changingIndex)=>{
   setData((prev)=>{
    return prev.map((item, index)=>{
        if(index === changingIndex)
          return {...item, friends: !item.friends}
        
      return item; 
    })
  })
  }
  
  return (
    <>
    <div className='w-full h-screen bg-zinc-300 flex gap-4 items-center justify-center'>
      {data.map((item, index) =>(
        <Card key={index} index={index} handleClick={handleClick} values={item}/>
      ))}
    </div>
    </>
  );
}



export default App