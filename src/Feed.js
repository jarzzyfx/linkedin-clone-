import React, { useEffect, useState } from 'react';
import './Feed.css';
import InputOption from './InputOption'
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';
// import { serverTimestamp } from '@firebase/firestore'


function Feed() {

  const user = useSelector(selectUser)

  const [input, setInput] = useState("")
      const [posts, setPosts] = useState([]);

      useEffect(()=>{
        db.collection("posts").orderBy("timeStamp", "desc").onSnapshot(snapshot => {
          setPosts(snapshot.docs.map(doc => {
           return {
              id: doc.id,
              data:doc.data()
            }
          }));
        });
      }, []);

      const sendPost =(e)=>{
        e.preventDefault()
      db.collection('posts').add({
        name: user.displayName,
        description: user.email,
        message: input,
        photoUrl: user.photUrl || "",
        timeStamp: firebase.firestore.FieldValue.serverTimestamp()
      });
      setInput("")
      }

  return (
    <div className="feed">

        <div className="feed__inputContainer">

        <div className="feed__input">
            <CreateIcon/>
            <form action="">
                <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                <button onClick={sendPost} type="submit">Send</button>
            </form>
        </div>

        <div className="feed__inputOptions">
            {/* import option */}
            <InputOption title="Photo" Icon={ImageIcon} color="#7805f9"/>
            <InputOption title="Video" Icon={SubscriptionsIcon} color="#E7A33E"/>
            <InputOption title="Event" Icon={EventNoteIcon} color="#C0C8CD"/>
            <InputOption title="Write article" Icon={CalendarViewDayIcon} color="#74CI5E"/>
        </div>

        </div>

        {/* post */}
        <FlipMove>
        {posts.map(({id, data:{name, description, message, photoUrl }  })=> {
         
         return <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photUrl={photoUrl}
          />
        })}

        </FlipMove>

      {/* <Post name="Chimez chibuike" description="This is a text" message="we are live!!!!" /> */}

    </div>
  )
}

export default Feed