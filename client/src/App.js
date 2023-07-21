import './App.css';
import io from 'socket.io-client';
import Chat from './Chat';
import React ,  {useState} from 'react'


const socket = io.connect("http://localhost:3001")
function App() {
  const [username, setUsername] = useState("")
  const [room, setRoom] = useState("")
  const [showChat, setshowChat] = useState("")

  const joinRoom = () =>{
      if(username !== "" && room !== ""){
          socket.emit("join_room" , room);
          setshowChat('true')
      }
  }
  return (
    <div className="App">
      {!showChat? (
      <div className="joinChatContainer">
      <h3>Join Room</h3>
      <input type="text" placeholder="Enter your Username" onChange={(event) =>{setUsername(event.target.value)}}/>
      <input type="text" placeholder="Enter your room id.." onChange={(event) =>{setRoom(event.target.value)}}/>
      <button onClick={joinRoom}>Join</button>
      </div>
      ):(
      <Chat socket={socket} username={username} room= {room}/>
      )
}

    </div>  
  );
}

export default App;
