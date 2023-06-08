import React, { useState } from 'react';
import './Story.css';
import Avatar from '@mui/material/Avatar';
import { useStateValue } from './StateProvider';
import db from './firebase';
import {collection, getFirestore,serverTimetamp, FieldValue, addDoc  } from "@firebase/firestore";

 function Story(){
  const[storyImage, setStoryImage]=useState("");
  const[{user},dispatch]=useStateValue();

  const handleStory=(e)=>{
    e.preventDefault();
 
    addDoc(collection(db, "reels"),{
image:storyImage,
storyPic:user.photoURL
    })
    setStoryImage("");
  }
return(
  <div className='story' style={{backgroundImage:`url(${user.photoURL})`}} >
<form >
  <input type="file"
  onChange={(e)=>setStoryImage(e.target.value)}
  value={storyImage}
  />
  <button onClick={handleStory} type="submit">
    Hidden Button
  </button>
</form>
  </div>
)
 }
// const Story = ({image, profileSrc, title}) => {
//   return (
//     <div  style={{backgroundImage:`url(${image})`}}className='story'>

//       <Avatar className='story_avatar' src={profileSrc}/>
//       <h4>{title}</h4>
//     </div>
//   )
// }
 

export default Story;

