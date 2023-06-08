import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Typography } from '@mui/material';
import './Header.css';
import Avatar from '@mui/material/Avatar';
import { useStateValue } from './StateProvider';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#F2F5F7",
    '&:hover': {
      backgroundColor: '#E8ECEE',
      
    },
    borderRadius:'30px',
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '32ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

function Header() {
const [{user},dispatch]=useStateValue(); 

  return (
    <div className='header'>
    <div className="header_left">
        <FacebookIcon sx={{height:"40px", width:"50px", color:"blue"}}/>
        <Typography variant="h1"  sx={{color:"blue", fontSize:'30px', fontWeight:600, mt:'7px'}}>facebook</Typography>
        
    </div>
    <div className="header_middle">
    <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search facebook"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
    </div>

    <div className="header_right">

    <div className="header_info">
      <div className='username'>
      <h5>{user.displayName}</h5>
      </div>
    
        <Avatar src={user.photoURL}/>
        
        </div>

        <div className="icons">
        <img src="https://cdn.icon-icons.com/icons2/2248/PNG/512/facebook_messenger_icon_136645.png"></img>
        </div>
        <div className="icons">
        <NotificationsIcon/>
        </div>
        
       
       
    </div>
    </div>
  )
}

export default Header