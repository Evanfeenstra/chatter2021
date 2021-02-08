import {useState} from 'react'

function NamePicker(props){
    const [showInput, setShowInput] = useState(false)
    const [username, setUsername] = useState(
        localStorage.getItem('username') || ''
    )

    function save(){
        props.saveName(username)
        setShowInput(false)   
        localStorage.setItem('username',username)     
    }
    if (showInput) {
        return <div className="name-picker">
            <input value={username}
                onChange={e=> setUsername(e.target.value)}
            />
            <button onClick={save}>OK</button>
        </div>
    }

    return <div className="name-picker">
        <div>{username}</div>
        <button onClick={()=> setShowInput(true)}>
            EDIT
        </button>
    </div>
}

export default NamePicker
