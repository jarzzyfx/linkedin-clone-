import React from 'react';
import './Sidebar.css';
import {Avatar} from '@material-ui/core';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';

function Sidebar() {

    const user = useSelector(selectUser);
    // for hashtags
    const recentItem = (topic) => {
      return(
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
      )  
    };

  return (
    <div className="sidebar">
        <div className="sidebar__top">
            <img src="https://media.istockphoto.com/photos/surface-of-the-atlantic-ocean-picture-id1300107681?b=1&k=20&m=1300107681&s=170667a&w=0&h=uaNb0RVQ6xb_FpkYuByE37sp5NrmmQzxMzpCDSqQkpg=" alt="" />
            <Avatar src={user.photoUrl}  className="sidebar__avatar">
                {
                    user.email[0].toUpperCase()
                }
            </Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>

        <div className="sidebar_stats">
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className="sidebar__statNumber">
                    2,589
                </p>
            </div>
            <div className="sidebar__stat">
                <p>views on post</p>
                <p className="sidebar__statNumber">
                    4,273
                </p>
            </div>
        </div>

        <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItem("Men in tech")}
            {recentItem("PHP")}
            {recentItem("Programming")}
            {recentItem("No sql")}
        </div>
    </div>
  )
}

export default Sidebar