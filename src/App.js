
import { useState } from 'react';
import './App.css';
import TextInput from './TextInput';

function App() {
  const [messages,setMessages] = useState([{text:'hello'}])

  console.log(messages)

  return <div className="App">
 
    <header className="header">
      <div className="logo" />
      CHATTER
    </header>

    <main className="messages">
      {messages.map((m,i)=> {
        return <div key={i} className="message-row">
          <div className="message">
            {m.text}
          </div>
        </div>
      })}
    </main>

    <TextInput 
      send={(t)=> setMessages( [...messages, {text:t}] )}
    />

  </div>
}

export default App;
