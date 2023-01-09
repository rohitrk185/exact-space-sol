import React from 'react'

import { BsPeople } from 'react-icons/bs'


function Header() {
    return (
        <div className='chat-header'>
            <div className="group-info">
                <h2 id='group-name'>Introductions</h2>
                <h3 id='group-desc' className='text-gray'>This Channel Is For Company Wide Chatter</h3>
            </div>
            <div className="group-members flex">
                <div id="group-count" className='text-gray'>
                    5 | 100
                </div>
                <BsPeople className='icon cursor-pointer text-gray' />
            </div>
        </div>
    )
}

export default Header