import { Avatar } from '@material-ui/core';
import './Post.css';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import InputOption from './InputOption';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import React, {forwardRef} from 'react';




const Post = forwardRef( ({name, description, message, photoUrl}, ref) => {

  return (
    <div ref={ref} className="post">
        <div className="post__header">
            <Avatar src={photoUrl}>
                {name[0]}
            </Avatar>
            <div className="post__info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>

        <div className="post__body">
            <p>{message}</p>
        </div>

        <div className="post__buttons">
            <InputOption title="Like" color="gray" Icon={ThumbUpAltOutlinedIcon}/>
            <InputOption title="Comment" color="gray" Icon={ChatOutlinedIcon}/>
            <InputOption title="Share" color="gray" Icon={ShareOutlinedIcon}/>
            <InputOption title="Send" color="gray" Icon={SendOutlinedIcon}/>
        </div>
    </div>
  )
});

export default Post