import React from 'react';
import './Story.css';
import { useStateValue } from './StateProvider';


const StoryPost = ({image,storyPic}) => {
  return (
    <div className='story' style={{backgroundImage:`url(${storyPic})`}}>
      
    </div>
  )
}

export default StoryPost
