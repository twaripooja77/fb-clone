import React from 'react';
import './Post.css';
import Avatar from '@mui/material/Avatar';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ReplyIcon from '@mui/icons-material/Reply';


function Post({profilePic, image, username, timestamp, message}) {
  return (
    <div className='post'>
<div className="post_top">
    <Avatar src={profilePic}
    className="post_avatar"/>
    <div className="post_topInfo">
        <h3>{username}</h3>
        <p>{new Date(timestamp?.toDate()).toUTCString()}
        </p>
    </div>
<div className="post_bottom">
    <p>{message}</p>
</div>
<div className="post_image">
    <img src={image} alt=""/>
</div>
<div className="post_options">
    <div className="post_option">
<ThumbUpIcon/>
<p>Like</p>
    </div>
    <div className="post_option">
<ChatBubbleOutlineIcon/>
<p>Comment</p>
    </div>
    <div className="post_option">
<ReplyIcon />
<p>Share</p>
    </div>
</div>
</div>
    </div>
  )
}

export default Post