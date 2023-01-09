import { useState, useEffect, useId } from 'react'
import { BsEmojiSmile } from "react-icons/bs";

import Message from './Message';
import { findAllByTestId } from '@testing-library/react';

function Chat({ userList }) {
    const [curMessage, setCurMessage] = useState('');
    const [messages, setMessages] = useState([{
        "username": "Dean",
        "text": "Hey Everyone!",
        "avatarName": "DE",
        "likes": 0,
        "timestamp": '14:30',
    }, {
        username: "Bob",
        text: "Hey Everyone! Hey Everyone! Hey Everyone!",
        avatarName: "BO",
        likes: 0,
        timestamp: '15:30',
    }])

    console.log(messages);

    function onchange(e) {
        setCurMessage(e.target.value);
    }

    function onsubmit(e) {
        if(e.key === 'Enter') {
            const user = userList[Math.floor(Math.random() * userList.length)]
            let message = {
                username: user,
                text: curMessage,
                avatarName: user.substr(0,2).toUpperCase(),
                likes: 0,
                timestamp: new Date().toTimeString().substring(0,5),
            }
            setMessages(prev => [...prev, message]);
        }
    }



    return (
        <main>

            <ul id="chat-messages" className='flex'>
                {messages.map((message, index) => (
                    <Message
                        messageInfo={message}
                        key={index} 
                    />
                ))}
            </ul>
            


            <div id='chat-form' className='flex'>
                <input 
                    type='text'
                    onChange={onchange}
                    onKeyDown={onsubmit}
                    className='outline-none'
                />
                <BsEmojiSmile className='icon cursor-pointer text-gray' />
            </div>
        </main>
    )
}

export default Chat