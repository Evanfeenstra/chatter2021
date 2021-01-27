
import {useState} from 'react'

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
    <input 
      placeholder="Write your message"
      value={text}
      onChange={e=> setText(e.target.value)}
      onKeyPress={keyPressed}
    />
    <button onClick={sendMessage} disabled={!text}>
      SEND
    </button>
  </footer>
}

export default TextInput
