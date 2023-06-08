import React from 'react';
import './SidebarRow.css';


function SidebarRow({ Icon, title}) {
  return (
    <div className='sidebarrow'>
        {Icon && <Icon/>}
        <h4>{ title }</h4>
    </div>
  )
}

export default SidebarRow