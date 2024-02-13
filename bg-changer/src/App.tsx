import { useState } from 'react'


function App() {
  const [color, setColor] = useState("")
  function redColor(): void {
    setColor("red");
  }
  function blueColor(): void {
    setColor("blue");
  }
  function yellowColor(): void {
    setColor("yellow");
  }
  function blackColor(): void {
    setColor("black");
  }
  function greenColor(): void {
    setColor("green");
  }
  return (

    <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
      <div className=' fixed flex flex-wrap justify-center bottom-12 inset-x-0 p-4'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-2 rounded-xl'>
          <button className='bg-red-600 text-zinc-50 p-2 rounded-full' onClick={redColor}>red</button>
          <button className='bg-blue-600 text-zinc-50 p-2 rounded-full' onClick={blueColor}>blue</button>
          <button className='bg-black text-zinc-50 p-2 rounded-full' onClick={blackColor}>black</button>
          <button className='bg-green-600 text-zinc-50 p-2 rounded-full' onClick={() => { setColor("green") }}>green</button>
          <button className='bg-yellow-600 text-zinc-50 p-2 rounded-full' onClick={yellowColor}>yellow</button>
          <button className='bg-zinc-600 text-zinc-50 p-2 rounded-full' onClick={() => { setColor("#E6E6FA") }}>lavender</button>
          <button  className=' text-zinc-50 p-2 rounded-full'style={{ backgroundColor: "#1d1160" }}  onClick={() => { setColor("#1d1160") }}>Suns purple</button>
        </div></div>
    </div>

  )
}

export default App
//why could i not use the set color function directly inside the onclick function ?
//because on click function takes a function as input and if you use the setcolor directly 
//and pass parameter inside it it will return the return value but onclick want is a function
//