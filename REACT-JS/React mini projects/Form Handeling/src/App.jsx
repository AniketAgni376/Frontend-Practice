// import React, { useRef } from 'react'


// function App() {
//   const name =useRef(null);
//   const email =useRef(null);
//   const ContactNumber =useRef(null);
  
//   const handleSubmit = (details)=>{
//     details.preventDefault();
//     console.log(name.current.value, email.current.value, ContactNumber.current.value);
//   }
  
//   return (
//     <form className='p-80 ml-10' action="" onSubmit={handleSubmit}>
//       <input ref={name} type="text" placeholder='name' />
//       <input ref={email} type="email" placeholder='email' />
//       <input ref={ContactNumber} type="number" placeholder='ContactNumber' />
//       <br/>
//       <input type="submit"/>
//     </form>
//   )
// }

// export default App

// ...............................................................................................................

// Second Method for form handling : Control Components

import React from 'react'

function App() {
  return (
    <div>App</div>
  )
}

export default App