
import {useState} from 'react';
import './App.css';
import TextInput from './TextInput';
import Message from './Message'
import NamePicker from './NamePicker'
import {db, useDB} from './db'
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default function Wrap() {
  return <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/:room" component={App} />
    </Switch>
  </BrowserRouter>
}

function App(props) {
  const room = props.match.params.room || 'home'

  const messages = useDB(room)
  const [username,setUsername] = useState(
    localStorage.getItem('username') || ''
  )

  // console.log(messages)
  return <div className="App">
 
    <header className="header">
      <div className="logo" />
      CHATTER
      <NamePicker saveName={setUsername} />
    </header>

    <main className="messages">
      {messages.map((msg,i)=> {
        const isMe = msg.name===username
        return <Message key={i} {...msg} isMe={isMe} />
      })}
    </main>

    <TextInput 
      send={(t)=> db.send({text:t, name:username, date:new Date(), room})}
    />

  </div>
}
