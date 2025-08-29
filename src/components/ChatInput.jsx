import { useState} from 'react'
import { Chatbot} from 'supersimpledev'

export function ChatInput({ chatMessages, setchatMessages }) {

  const [inputText, setInputText] = useState('')

  function saveInputText(event) {
    setInputText(event.target.value)

  }


  function sendMessage() {

    const newChatMessage = [...chatMessages,
    {
      message: inputText,
      sender: 'user',
      id: crypto.randomUUID()
    }
    ]
    setchatMessages(newChatMessage)

    const response = Chatbot.getResponse(inputText)

    setchatMessages([...newChatMessage,
    {
      message: response,
      sender: 'robot',
      id: crypto.randomUUID()
    }
    ])

    setInputText('');
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      sendMessage();
    }
  }

  return (
    <div className="chat-input-container">
      <input
        size='30'
        placeholder="Send a message to Chatbot"
        onChange={saveInputText}
        value={inputText}
        className="chat-input"
        onKeyDown={handleKeyDown}
      />
      <button
        className='send-button'
        onClick={sendMessage}>Send</button>
    </div>
  )
}