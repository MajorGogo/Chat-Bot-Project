import { useState} from 'react'
import { ChatInput} from './components/ChatInput.jsx'
import  ChatMessages from './components/ChatMessages.jsx'
import './App.css'



function App() {
  const array = useState([])
  const [chatMessages, setchatMessages] = array;
  // const chatMessages=array[0];
  // const setchatMessages=array[1];


  return (
    <div className="app-container">


      <ChatMessages
        chatMessages={chatMessages}
      />
      <ChatInput
        chatMessages={chatMessages}
        setchatMessages={setchatMessages}
      />
    </div>
  )
}

export default App
