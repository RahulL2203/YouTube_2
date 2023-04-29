import React from 'react';
import Button from './Button';

const list = ["All", "Live","Soccer","Music","Movies","News","Education","Cooking","Travel","Politics","Party","Hello","Coding"]
const ButtonList = () => {
  return (
      <div  className='flex flex-wrap'>
        {list.map((eachh,index)=>(<Button key = {index} name={list[index]}/>))}
      </div>
      
    
  )
}

export default ButtonList