import { useState } from "react";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";

import parse from 'html-react-parser'


function Message({ messageInfo, messages, setMessages, index }) {
	const [isLiked, setIsLiked] = useState(false);

	function onclick(e) {
		const ms = messages.map((m, i) => {
			if(i === index) {
				if(isLiked) {
					return {...m, likes: m.likes - 1};
				}
				return {...m, likes: m.likes + 1};
			}
			return m;
		});
		setMessages(ms);
		setIsLiked((prev) => !prev);
	}

	return (
		<li className="message-item flex">
			<div className="avatar">
				{messageInfo.avatarName}
			</div>
			<div className="message-main">
				<h2> 
					{messageInfo.username} 
					<span className="timestamp text-gray">
						{messageInfo.timestamp}
					</span>
				</h2>
				<div className="message-content flex">
					<p>{parse(messageInfo.text)}</p>
					<p>
						{(isLiked) ? <AiFillLike className="cursor-pointer small-icon" onClick={onclick} /> : <AiOutlineLike 
							className="cursor-pointer small-icon"
							onClick={onclick} />} {messageInfo.likes}
					</p>
				</div>
			</div>
		</li>
	)
}

export default Message