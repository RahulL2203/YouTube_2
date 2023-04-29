import React, { useRef, useState ,useEffect} from 'react'

const Demo2 = () => {
   let x=0;
   const [Y,setY] = useState(0);
   const ref = useRef(0);
   
      // Not like ref=0
      //It is like  ref = {current:0}

   console.log("rendering.......");
   const i = useRef(null);
   useEffect(()=>{
      i.current = setInterval(()=>{
         console.log("Namaste React", Math.random() );
      },1000)
      return ()=>clearInterval(i.current);
   }
   ,[])
  return (
    <div className='mt-2 ml-5 bg-slate-300 w-96 h-96 border border-black'>
      
      <div>
         <button className='bg-green-100 m-2 p-2' 
         onClick={()=> {
            x=x+1;
            console.log("X=" ,x);}}
            >Increase X</button>
         <span className='font-bold'>Let X = {x}</span>
   
      </div>

      <div>
         <button className='bg-green-100 m-2 p-2' 
         onClick={()=> {
         setY(Y+1);
            console.log("Y=" ,Y);}}
            >Increase Y</button>
         <span className='font-bold'>State Y = {Y}</span>
   
      </div>
      <div>
         <button className='bg-green-100 m-2 p-2' 
         onClick={()=> {
               ref.current = ref.current + 1;
            console.log("Ref=" ,ref.current);}}
            >Increase Ref</button>
         <span className='font-bold'>Ref = {ref.current}</span>
   
      </div>

      <button className='bg-red-900 m-2 p-2 rounded-lg text-white font-bold'
      onClick={()=>{
         clearInterval(i.current);
      }}>Stop Printing...</button>
    </div>
  )
}

export default Demo2