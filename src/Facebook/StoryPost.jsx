import React from 'react';
import './StoryPost.css';
import { useStateValue } from './StateProvider';


const StoryPost = ({image,storyPic}) => {
  return (
    <div className='storypost' style={{backgroundImage:`url(${storyPic})`}}>
      
    </div>
  )
}

export default StoryPost
