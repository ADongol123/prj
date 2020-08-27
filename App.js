import React,{useState,useEffect} from 'react';
import './App.css';
import { Button,FormControl,InputLabel,Input } from '@material-ui/core';
import Message from './Message';
import db from './Firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';


function App() {
const [input, setInput] = useState(' ');
const[messages,setMesasges]=useState([ ]);
const[username,setUsername]=useState('');


// usestate is a variable in react
// useEffect= run code on a condition 

useEffect(() => {
  db.collection('messages').orderBy('timestamp','desc').onSnapshot(shapshot => {
    setMesasges(shapshot.docs.map(doc => ({id : doc.id ,message : doc.data()}))) 
  });
}, [])





useEffect(() => {
 setUsername(prompt('Please Enter Your Name'));
}, [])

const sendMessage = (event) => {
  event.preventDefault();
  db.collection('messages').add({
    message: input,
    username: username,
    timestamp:firebase.firestore.FieldValue.serverTimestamp()
// firebsase loacl time \zone
  })
  setInput('');
}


  return (
    <div className="App">
      <img src="/img/ar.jpg" height="150" width="150"/>
     <h1>HELLO</h1>
  <h2>Welcome {username}</h2>
     <form className="app_form">
      <FormControl className="app_formControl">
       <Input className="app_Input" placeholder='Enter a message...' value={input} onChange={event => setInput(event.target.value)} />
        <Button className="app_Button" disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>Send</Button>
      </FormControl>
    </form>

    <FlipMove>
    {
      messages.map(({id,message}) =>(
        <Message key={id} username={username} message={message}/>/*sending the message file*/
      
      ))
    }
    </FlipMove>
    
    </div>
  );
}

export default App;
