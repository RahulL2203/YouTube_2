import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SideBar = () => {
 const isMenuOpen = useSelector((store)=>store.app.isMenuOpen);

 //Early Return Pattern
 if(!isMenuOpen) return null;

  return (
    <div className='p-5 shadow-lg w-48'>
      <ul>
        <li className='font-bold'><Link to ="/">Home</Link></li>
        <li><Link to ="/demo">Demo</Link></li>
        <li>Shorts</li>
        <li>Live</li>
        <li>Music</li>
      </ul>
      <h1 className='font-bold pt-5'>Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>News</li>
        <li>Movies</li>
      </ul>

      <h1 className='font-bold pt-5'>WatchLater</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>News</li>
        <li>Movies</li>
      </ul>
    </div>
  )
}

export default SideBar