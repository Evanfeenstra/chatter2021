
import {useState} from 'react'
import { AiOutlineSend } from "react-icons/ai";

function TextInput(props) {
  const [text, setText] = useState('')

  function sendMessage(){
    if(text==='') return // skip the function
    props.send(text)
    setText('')
  }
  function keyPressed(e){
    if(e.key==='Enter') {
      sendMessage()
    }
  }

  return <footer className="text-input">
    <input className="input"
      placeholder="Write your message"
      value={text}
      onChange={e=> setText(e.target.value)}
      onKeyPress={keyPressed}
    />
    <button onClick={sendMessage} disabled={!text} className="send-button">
      <AiOutlineSend title="send" 
        style={{minWidth:'0.7rem',marginLeft:2}} 
      />
    </button>
  </footer>
}

export default TextInput
