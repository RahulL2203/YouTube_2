import React ,{useEffect, useState} from 'react';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../Utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../Utils/helper';

const LiveChat = () => {
  const [liveMessage,setLiveMessage] = useState("");

  const dispatch= useDispatch();

  const ChatMessages = useSelector((store) => store.chat.messages)

  useEffect(()=>{
   const i = setInterval(()=>{
        //API Polling
       
        dispatch(
          addMessage(
            {
              name:generateRandomName(),
              message:makeRandomMessage(20),

            }
          )
        )
    },2000);

    return ()=>clearInterval(i);

  },[])
  return (
    <>   
    <div className="w-full ml-1 border border-black bg-slate-100 rounded-lg h-[500px] overflow-y-scroll flex flex-col-reverse">
      {ChatMessages.map((c , index)=>(
         <ChatMessage key ={index}
         name={c.name} 
         message={c.message}/>
      ))}
      </div>
      <form className='w-full p-1 ml-2 border border-black' onSubmit={(e)=>{
        e.preventDefault();
        dispatch(
          addMessage({
            name:"Rahul_Lakkavarapu",
            message: liveMessage ,
          })
        );
        setLiveMessage("");
      }}
      > 
        <input className='w-3/4' type = "text" value ={liveMessage} onChange={(e)=>{
          setLiveMessage(e.target.value);
        }}/>
        <button className='bg-green-100 px-2 mx-4'>Send</button>
      </form>
      </>
 
  )
}

export default LiveChat;