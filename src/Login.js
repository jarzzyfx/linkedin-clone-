import React, { useState } from 'react';
import './Login.css'
import {auth} from './firebase'
import {useDispatch} from 'react-redux'
import { login } from './features/userSlice';

function Login() {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [Profilepic, setProfilepic] = useState("");
    const dispatch = useDispatch()

const register = (e) => {
    e.preventDefault()
    if(!name){
        alert('please enter a full name')
    }
    auth.createUserWithEmailAndPassword(email, password,Profilepic)
    .then(userAuth => {
        userAuth.user.updateProfile({
            displayName: name,
            photoUrl: Profilepic,
        })
        .then(()=>{
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: Profilepic
            }))
        })
    }).catch(error => alert(error))
}

const loginToApp = (e) =>{
    e.preventDefault()
    auth.signInWithEmailAndPassword(email, password)
    .then(userAuth=>{
        dispatch(login({
            email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName,
           profileUrl: userAuth.user.photoUrl
        }))
    }).catch(error => alert(error))
}

  return (
    <div className="login">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROp-tVE-R6e5Uw_LRnOl1kC5MMXciei-j0VQ&usqp=CAU" alt="" />
        <form >
            <input type="text"  value={name} onChange={e => setName(e.target.value)} placeHolder="Full name (Required if registering!)"/>
            <input type="text"   value={Profilepic} onChange={e => setProfilepic(e.target.value)} placeHolder="Profile picture url (optional)"/>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeHolder="example@johndoe.com"/>
            <input type="password"  value={password} onChange={e => setPassword(e.target.value)} placeHolder="123456"/>

            <button className="login__login" onClick={loginToApp}>Sign in</button>
            <p>or</p>
            <button onClick={register} className="login__register">Sign up</button>

        </form>

    </div>
  )
}

export default Login