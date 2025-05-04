import React, { useState } from 'react'

function App() {
  const [bgColor, setBgColor] = useState('olive')

  const handleRed = () => {
    setBgColor("red")
  }
  const handleGreen = () => {
    setBgColor("green")
  }
  const handleBlue = () => {
    setBgColor("blue")
  }
  const handlePink = () => {
    setBgColor("pink")
  }

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: bgColor}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl'>
          
          <button onClick={handleRed} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "red"}}>Red</button>

          <button onClick={handleGreen} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "Green"}}>Green</button>
          
          <button onClick={handleBlue} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "blue"}}>Blue</button>

          <button onClick={handlePink} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "pink"}}>Pink</button>
        </div>
      </div>
    </div>
  )
}

export default App
