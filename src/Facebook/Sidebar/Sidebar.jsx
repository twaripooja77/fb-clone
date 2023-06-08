import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import AppsSharpIcon from '@mui/icons-material/AppsSharp';
import GroupSharpIcon from '@mui/icons-material/GroupSharp';
import { useStateValue } from '../StateProvider';
import Avatar from '@mui/material/Avatar';

const Sidebar = () => { 
  const[{user},dispatch]=useStateValue();
  return ( 
    <div className='sidebar'>
      {/* <SidebarRow  
      src={user.photoURL}
      title={user.displayName}
      /> */}
      <div className="displayuser">
      <Avatar src={user.photoURL}/>
     <h4>{user.displayName}</h4>
      </div>
      

      <SidebarRow Icon={HomeRoundedIcon} title="Home"/>
      <SidebarRow Icon={GroupSharpIcon} title="Friends"/>
      <SidebarRow Icon={StorefrontRoundedIcon} title="MarketPlace"/>
      <SidebarRow Icon={SportsEsportsIcon} title="Games"/>
      <SidebarRow Icon={AppsSharpIcon} title="See all" /> 
    </div>
  )
}

export default Sidebar
