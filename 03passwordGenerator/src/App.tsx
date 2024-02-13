

import React from 'react'
import { useState, useCallback, useEffect, useRef } from 'react'




function App() {
  const [length, setLength] = useState(8)
  const [num, setNum]       = useState(false)
  const [char, setChar]     = useState(false)
  let   [text, setText]      = useState("")


  const passwordgen = useCallback(() => {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (num === true) {
      characters += '0123456789'
    }
    if (char === true) {
      characters += 'ˀˁ˂˃˄˅ˆˇˈˊˋˍˎˏ'
    }
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    setText(result)
  },

    [ length,char,num ,setText ])

  const passwordRef = useRef(null);


  const copypassword = useCallback(() => {
    (passwordRef.current as HTMLInputElement | null)?.select();
  //  ( passwordRef.current as HTMLInputElement | null)?.setSelectionRange(0,3) 
    window.navigator.clipboard.writeText(text)
  }, [text])


  useEffect(() => { passwordgen() }, [length, num, char, passwordgen])



  return (
    <>

      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center my-3'>password generator</h1>
        <input type="text"
          value={text}
          className='outline-none w-full py-1 px-3 rounded-lg'
          placeholder='password'
          readOnly
          ref={passwordRef}
        />
<button onClick={copypassword} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={100} value={length} className='cursor-pointer'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setLength(parseInt(e.target.value, 10)); // Parse string to number
              }} />

            <label htmlFor='cursor-pointer'>Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={num}
              id='numberInput'
              onChange={() => {
                setNum((prev) => !prev)
              }} />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={char}
              id='charInput'
              onChange={() => {
                setChar((prev) => !prev)
              }} />
            <label htmlFor="charInput">Characters</label>
          </div>
          <h1>hi how are you</h1>
        </div>
        <h2>i am fine how are you?</h2>
      </div>

    </>
  )
}

export default App
