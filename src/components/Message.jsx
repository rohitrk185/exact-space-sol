import { SlLike } from "react-icons/sl";

function Message({ messageInfo }) {

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
					<p>{messageInfo.text}</p>
					<p>
						<SlLike 
							className="cursor-pointer small-icon"/> {messageInfo.likes}
					</p>
				</div>
			</div>
		</li>
	)
}

export default Message