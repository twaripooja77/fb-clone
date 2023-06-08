import React,{useState, useEffect} from 'react';
import './Feed.css';
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';
import db from './firebase';
import { collection } from "firebase/firestore"; 
import { onSnapshot, orderBy } from "@firebase/firestore";

const Feed = () => {
  const [posts, setPosts]=useState([]);
  useEffect(()=>{
    onSnapshot(collection(db,"posts"), orderBy("timestamp",'desc'), (snapshot)=>(
    
setPosts(snapshot.docs.map((doc)=>({id: doc.id, data: doc.data() })))
))
  },[])
  return (
    <div className='feed'>

        {/*  StoryReel Component    */}
      <StoryReel/>

      {/*Message Sender */}
      <MessageSender/>

      {/* Post  */}
      {posts.map((post)=>(
        <Post
        key={post.id}
        profilePic={post.data.profilePic}
        message={post.data.message}
        timestamp={post.data.timestamp}
        username={post.data.username}
        image={post.data.image}
        />
      ))}
      
    </div>
  )
}

export default Feed
