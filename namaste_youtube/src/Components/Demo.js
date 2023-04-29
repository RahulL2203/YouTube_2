import React, { useMemo, useState } from 'react';
import { findPrime } from '../Utils/helper';

const Demo = () => {
   const [text , setText] = useState(0);
   const [isDarkTheme,setIsDarkTheme] = useState(true);
   console.log("Rendering...");

   const prime = useMemo(() => findPrime(text),[text]);

 

  return (
    <div className={"w-96 h-96 border border-black m-2 p-2" + 
                      (isDarkTheme && "text-white bg-green-900")
                     }>
      <div className="flex justify-end">
         <button className='m-1 p-1 bg-blue-200 rounded-full font-bold text-white' onClick={()=> setIsDarkTheme(!isDarkTheme)}>Dark</button>
      </div>
      <div>
         <input className="ml-16 mt-2 w-66 px-2 border border-black"
          type='text' value={text} onChange={(e)=>{
            setText(e.target.value);
         }}/>
      </div>
      <div>
         <h1 className='mt-2 font-bold text-2xl'>nth Prime: {prime}</h1>
      </div>

    </div>
  )
}

export default Demo