import React, { useState } from 'react';
import Card from './Components/Card';
import Navbar from './Components/Navbar';
function App() {

  const data=[
    {image: "https://plus.unsplash.com/premium_photo-1728318007492-c48cb46f003a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Last Salutations", artist: "AnonymousBuzzz", added: true},
    {image: "https://plus.unsplash.com/premium_photo-1667680760644-56384efdc74e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Numb", artist: "Chester Bennington", added: false},
    {image: "https://plus.unsplash.com/premium_photo-1731950912500-36e5726e728e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Naturaleza", artist: "Ale Vega", added: false},
    {image: "https://images.unsplash.com/photo-1584869603969-428540799c2f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Closeup", artist: "Mae Mu", added: false},
    {image: "https://plus.unsplash.com/premium_photo-1732737296733-f6360080e8be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Zombi", artist: "Susan Wilkinson", added: true},
    {image: "https://images.unsplash.com/photo-1596196524143-569109d9a645?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Salida Nocturna", artist: "Agustin Farias", added: false},
    {image: "https://plus.unsplash.com/premium_photo-1728318007492-c48cb46f003a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Last Salutations", artist: "AnonymousBuzzz", added: true},
    {image: "https://plus.unsplash.com/premium_photo-1667680760644-56384efdc74e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Numb", artist: "Chester Bennington", added: false}
  ];
   const [songData, setSongData] = useState(data);
   const handleClick = (index) =>{
    setSongData((prev)=>{
    return prev.map((item, itemIndex)=>{
      if(itemIndex === index) return {...item , added: !item.added};
      return item;
    })
    })
  }

   return (
    <>
    <div className="w-full h-screen bg-zinc-300">
    <Navbar data={songData}/>
    <div className="px-20 flex gap-10 mt-10 flex-wrap">
      {songData.map((obj, index)=>( 
      <Card data={obj} handleClick={handleClick} index={index} key={index} />
      ))}
      </div>
    </div>
    </>
  );
}

export default App