import React, {useState} from 'react';
import './MessageSender.css';
import Avatar from '@mui/material/Avatar';
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import MoodIcon from '@mui/icons-material/Mood';
import { useStateValue } from './StateProvider';
import db from './firebase';
import { collection, getFirestore, serverTimestamp, FieldValue, addDoc } from "@firebase/firestore";

function MessageSender() {
    const[input, setInput]=useState("");
    const[{user},dispatch]=useStateValue();
  const[imageUrl, setImageUrl]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
  
       addDoc(collection(db,"posts"),{
            message:input,
           timestamp:serverTimestamp(getFirestore,FieldValue),
            profilePic:user.photoURL,
            username:user.displayName,
            image:imageUrl
        })
        setInput("");
            setImageUrl("");
         
    }
  return (
    <div className='messagesender'>
        <div className="messagesender_top">
    <Avatar src={user.photoURL}/>
    <form>
        <input 
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        className='messagesender_input' 
        placeholder={`What's on your mind, ${user.displayName}?`}
        />
        <input
        value={imageUrl}
        onChange={(e)=>setImageUrl(e.target.value)}
        placeholder="Image URL (optional)"
        />
        
        <button onClick={handleSubmit} type="submit">
            Hidden Button   
        </button>
    </form>
        </div>
<div className="messagesender_bottom">
<div className="messagesender_option">
<VideocamIcon style={{color:"red"}}/>
<h3>Live Video</h3>
</div>
<div className="messagesender_option">
<PhotoLibraryIcon style={{color:"green"}}/>
<h3>Photo/Video</h3>
</div>
<div className="messagesender_option">
<MoodIcon style={{color:"yellow"}}/>
<h3>Feeling/Activity</h3>
</div>
</div> 

    </div>
  )
}

export default MessageSender