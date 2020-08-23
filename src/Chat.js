import React, {useEffect, useState} from 'react';
import './Chat.css';
import Avatar from "@material-ui/core/Avatar";
import {IconButton} from "@material-ui/core";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';


function Chat(props) {
    const [seed, setSeed] = useState('');

    useEffect(()=>{
        setSeed(Math.floor(Math.random()*5000));
    },[]);

    return (
        <div className={'chat'}>
            <div className="chat__header">
                <Avatar src={'https://avatars.dicebear.com/api/human/' +
                `${seed}.svg`}/>

                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at ...</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlinedIcon/>
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">

            </div>

            <div className="chat__footer">

            </div>
        </div>
    );
}

export default Chat;