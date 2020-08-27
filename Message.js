import React,{ forwardRef} from 'react';
import './Message.css';
import {CardContent,Card,Typography } from '@material-ui/core';
const Message= forwardRef(({message,username},ref) =>{
    const isUser = username=== message.username;
    //forward ref is wrapping it with additionl fuctionality 
    return (
            <div  ref={ref} className={`message ${isUser && 'message_user'}`}>
            <Card className={isUser ? "message_userCard": "message_guestCard"}>
                <CardContent>
                    <Typography
                    color="white"
                    variant="h5"
                    components="h2"
                    >
                        {!isUser && `${message.username || 'Unknown User'}: `}{message.message}
                        
                    </Typography>
                </CardContent>
            </Card>
           </div>
           
       
    )
})

export default Message
