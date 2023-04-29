import React, { useEffect } from 'react'
import { closeMenu } from '../Utils/appSlice'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import CommentsContainer from './CommentsContainer'
import LiveChat from './LiveChat'

const WatchePage = () => {

  const [searchParams] = useSearchParams();
  // console.log(searchParams.get("v"));
  const dispatch = useDispatch();
  useEffect(()=>{
      dispatch(closeMenu())
  }, []);
  return (
    <div className="w-full">
    <div className='p-2 m-2 shadow-lg flex w-full '> 
      <div>
      <iframe 
        width="900" 
        height="500" 
        src={"https://www.youtube.com/embed/" + searchParams.get("v")} 
       title="YouTube video player" 
       frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
       allowFullScreen>

      </iframe>
      </div>
      <div className="w-full">
        <LiveChat/>
      </div>
    </div>
    <div>
      <CommentsContainer/>
    </div>
    </div>
  )
}

export default WatchePage