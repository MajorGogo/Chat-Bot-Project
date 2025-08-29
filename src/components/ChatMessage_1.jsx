import RobotProfileImage from '../assets/robot.png'
import UserProfileImage from '../assets/user.png'


export function ChatMessage({ message, sender }) {
  // if(sender==="robot"){
  //     return(<div>
  //         <img src="robot.png" width="40px" />
  //         {message}
  //     </div>);

  // }
  return (
    <div
      className={sender === 'user'
        ? 'chat-message-user'
        : 'chat-message-robot'}
    >
      {sender === "robot" && <img src={RobotProfileImage} width="40px" />}
      <div className="chat-message-text">
        {message}
      </div>

      {sender === "user" && <img src={UserProfileImage} width="40px" />}
    </div>)
}