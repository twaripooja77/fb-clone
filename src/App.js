import React from 'react';
import './App.css';
import Header from './Facebook/Header';
import Sidebar from './Facebook/Sidebar/Sidebar';
import Feed from './Facebook/Feed';
import Widgets from './Facebook/Widgets';
import Login from './Facebook/Login';
import {useStateValue} from "./Facebook/StateProvider";


function App() {
  const [{user}, dispatch]=useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login/>
      ):(
        <>
        {/* header here */}
      <Header/>
    <div className='app_body'>
    <Sidebar/>
    <Feed/>
    <Widgets/>
    </div>
        </>
      )
    }
     
    
      
    </div>
  );
}

export default App;
