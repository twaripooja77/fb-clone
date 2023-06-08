import React,{useState,useEffect} from 'react';
import './storyReel.css';
import './Story.css';
import Story from './Story';

import { useStateValue } from './StateProvider';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Add } from '@mui/icons-material';
import { onSnapshot,orderBy } from 'firebase/firestore';
import db from './firebase';
import { collection } from "firebase/firestore"; 
import StoryPost from './StoryPost';

function StoryReel() {
  const [story, setStory]=useState([]);
  const[{user},dispatch]=useStateValue();
  useEffect(()=>{
    onSnapshot(collection(db,"reels"),orderBy("timestamp",'desc'),(snapshot)=>(
      setStory(snapshot.docs.map((doc)=>({id:doc.id, data:doc.data()})))
    ))
  },[])
  return (
    <div className='storyReel'>

      <Story/>
      <div className='story'>
        {story.map((mystory)=>(
<StoryPost key={mystory.id}
storyPic={mystory.data.storyPic}  
image={mystory.data.image}   />
   ))}
      </div>

      {/* <Story
image={user.photoURL}
profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwQneCnRa5WmT8HxXgzmH-lX__c_Xiz4IBGd30tLbI6FasmSb4y164KvlUhHz_oGtBhOs&usqp=CAU"
title="Add your Story"
/>
<Story
image="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
profileSrc="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
title="Richard Geller"
/>
<Story
image="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
profileSrc="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
title="Grace Bhattarai"
/>
<Story
image="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600"
profileSrc="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600"
title="Stefan Stefanic"
/>
<Story
image="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
profileSrc="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
title="Richard Geller"
/>
<Story
image="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
profileSrc="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
title="Grace Bhattarai"
/> */}

    </div>
  )
}

export default StoryReel