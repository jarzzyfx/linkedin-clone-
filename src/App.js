 import React, { useEffect } from 'react';
import './App.css';
import { Header } from './global';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Login from './Login'
import { auth } from './firebase';
import Widgets from './Widgets'


function App() {
const user = useSelector(selectUser);
const dispatch = useDispatch();

useEffect(()=>{
  auth.onAuthStateChanged(userAuth =>{
    if(userAuth){
      // logged in
      dispatch(login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL
      }))

    }else{
      // logout
      dispatch(logout())
      }
  })

},[dispatch])


  return (
    <div className="app">
    
{!user ?  (<Login/>) : (
<>
  <Header />

      <div className="app__body">
        <Sidebar/>
       <Feed/>
      <Widgets/>
      </div>
</>
)}
    
        {/* widgets */}
      
    </div>
  );
}

export default App;
