import React from 'react'
import { useState } from 'react'

const SumPage = () => {
  const [input1,setInput1]=useState("")
  const [input2,setInput2]=useState("")
  const [result,setResult]=useState("")
  const clickHandler=()=>{
    const response=Number(input1)+Number(input2)
    setResult(response)
  }
  return (
    <div className='min-h-screen w-full bg-blue-950 flex justify-center items-center'>
      <div className='flex flex-col w-80 gap-2 bg-white rounded-lg shadow-lg p-10'>
        
          First input:<input className='border-2 rounded-lg p-2' onChange={(e)=>setInput1(e.target.value)}/>
          Second input:<input className='border-2 rounded-lg p-2' onChange={(e)=>setInput2(e.target.value)} />
          <button className='bg-black text-white p-2 mt-5  rounded-md' type="button" onClick={clickHandler}>Calculate</button>

          Result:<input className='border-2 rounded-lg p-2' value={result} readOnly/>
      </div>
      
    </div>
  )
}

export default SumPage
