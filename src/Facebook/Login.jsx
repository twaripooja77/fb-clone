import React from 'react';
import './Login.css';
import { Button } from '@mui/material';
import { signInWithPopup } from 'firebase/auth';
import {auth, provider} from './firebase';
import {actionTypes} from "../reducer";
import { useStateValue } from './StateProvider';



const Login = () => {
  const [state,dispatch]=useStateValue();
    const signIn=()=>{

      signInWithPopup(auth, provider)
      .then((result)=>{
        dispatch({
          type:actionTypes.SET_USER,
          user:result.user,
        });
        console.log(result.user);  
      })
      .catch((error)=>alert(error.message));
    }
  return (
    <div className='login'>
        <div className="login_logo">
            
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/2560px-Facebook_Logo_%282019%29.svg.png'/>

        </div>
    <Button type='submit' onClick={signIn} >
        Sign In 
    </Button>
    </div>
  )
}

export default Login