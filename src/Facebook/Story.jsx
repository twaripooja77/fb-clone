import React, { useState } from 'react';
import './Story.css';
import Avatar from '@mui/material/Avatar';
import { useStateValue } from './StateProvider';
import db from './firebase';
import {collection, getFirestore,serverTimetamp, FieldValue, addDoc  } from "@firebase/firestore";

 function Story({image, profileSrc, title}){
  // const[storyImage, setStoryImage]=useState("");
  // const[{user},dispatch]=useStateValue();

//   const handleStory=(e)=>{
//     e.preventDefault();
 
//     addDoc(collection(db, "reels"),{
// image:storyImage,
// storyPic:user.photoURL
//     })
//     setStoryImage("");
//   }
return(
  // <div className='story' style={{backgroundImage:`url(${user.photoURL})`}} >
 
    <div  style={{backgroundImage:`url(${image})`}}className='story'>

      <Avatar className='story_avatar' src={profileSrc}/>
      <h4>{title}</h4>
    </div>
  )
}
 
{/* <form >
  <input type="file"
  onChange={(e)=>setStoryImage(e.target.value)}
  value={storyImage}
  />
  <button onClick={handleStory} type="submit">
    Submit
  </button>
</form> */}
//   </div>
// )
//  }


export default Story;

