import React from 'react';
import './Widgets.css';

function Widgets() {
  return (
    <div className='widgets'>
        <iframe
         src="https://images.pexels.com/photos/1751279/pexels-photo-1751279.jpeg?auto=compress&cs=tinysrgb&w=600"
        width="200"
        height="100%"
        style={{border:"none", 
        overflow:"hidden"}}  
        onScroll="no"
        border="0"
        allowTransparency="true"
        allow='encrypted_media'
        >
        </iframe>
    </div>
  )
}

export default Widgets