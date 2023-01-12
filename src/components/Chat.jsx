import { useState, useEffect, useRef } from 'react'

import InputEmoji from 'react-input-emoji'

import Message from './Message';


function Chat() {
    const userList = [
        {
            id: '1',
            name: 'Alan',
            image: 'https://randomuser.me/api/portraits/men/0.jpg',
        },{
            id: '2',
            name: 'Bob',
            image: 'https://randomuser.me/api/portraits/men/1.jpg',
        }, {
            id: '3',
            name: 'Carol',
            image: 'https://randomuser.me/api/portraits/men/8.jpg',
        }, {
            id: '4',
            name: 'Dean',
            image: 'https://randomuser.me/api/portraits/men/13.jpg',
        }, {
            id: '5',
            name: 'Elin',
            image: 'https://randomuser.me/api/portraits/men/4.jpg',
        }
    ];

    const messagesEndRef = useRef(null);

    const [curMessage, setCurMessage] = useState('');
    const [messages, setMessages] = useState([{
        username: "Dean",
        text: "Hey Everyone!",
        avatarName: "DE",
        likes: 0,
        timestamp: '14:30',
    }, {
        username: "Bob",
        text: "Hey Everyone! Hey Everyone! Hey Everyone!",
        avatarName: "BO",
        likes: 0,
        timestamp: '15:30',
    }]);

    async function searchMention(text) {
        if (!text) {
            return [];
        }
    
        const filteredText = text.substring(1).toLocaleLowerCase();
    
        return userList.filter(user => {
            if (user.name.toLocaleLowerCase().startsWith(filteredText)) {
                return true;
            }
    
            const names = user.name.split(" ");
    
            return names.some(name =>
                name.toLocaleLowerCase().startsWith(filteredText)
            );
        });
    }


    function onchange(text) {
        setCurMessage(text);
    }

    function onsubmit(text) {
        const filterName = () => {
            let str = text.replace(/[(\[]userId:[0-9]*[)\]]/gi, '')
            let names = str.match(/@[(\[][a-z\A-Z]*[)\]]/gi);
            names = names.map((n => {
                str = str.replace(/@[(\[][a-z\A-Z]*[)\]]/i, `<span classname='text-blue cursor-pointer'>@${n.substring(2, n.length - 1)}</span>`);

                return '@' + n.substring(2, n.length - 1);
            }))
            return `${str}`;
        };

        const user = userList[Math.floor(Math.random() * userList.length)]
        let message = {
            username: user.name,
            text: filterName(),
            avatarName: user.name.substring(0,1).toUpperCase(),
            likes: 0,
            timestamp: new Date().toTimeString().substring(0,5),
        }
        setMessages(prev => [...prev, message]);
    }

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollTo({
            top: messagesEndRef.current?.scrollHeight,
            left: 0,
            behavior: 'smooth',
        })
    }
    
    useEffect(() => {
        scrollToBottom();
    }, [messages]);



    return (
        <main>
            <ul id="chat-messages" className='flex' ref={messagesEndRef}>
                {messages.map((message, index) => (
                    <Message
                        messageInfo={message}
                        messages={messages}
                        setMessages={setMessages}
                        index={index}
                        key={index} 
                    />
                ))}
            </ul>

            <div id='chat-form'>
                <InputEmoji
                    value={curMessage}
                    onChange={onchange}
                    cleanOnEnter
                    onEnter={onsubmit}
                    placeholder="Type Message... (use '@' to mention, 'enter' to send message)"
                    height= {10}
                    theme='dark'
                    searchMention={searchMention}
                />
            </div>
        </main>
    )
}

export default Chat