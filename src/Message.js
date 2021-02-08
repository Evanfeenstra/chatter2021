

function Message(props){
    return <div className="message-row">
    <div className="message">
      <div className="message-name">{props.name}</div>
      {props.text}
    </div>
  </div>
}

export default Message
