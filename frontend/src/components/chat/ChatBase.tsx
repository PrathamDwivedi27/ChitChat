"use client"

import { getSocket } from "@/lib/socket-config"
import { useEffect, useMemo } from "react"
import {v4 as uuidV4} from 'uuid'
import { Button } from "../ui/button"


export default function ChatBase({groupId}:{groupId:string}) {
    let socket=useMemo(()=>{
        const socket=getSocket();
        socket.auth={
            room:groupId
        }
        // connection hone se pehle hum log group id pass kar rhe hai. group id matlab room id
        return socket.connect();
    },[])


    useEffect(()=>{

        socket.on('message', (data) => {
            console.log("The socket message is this ",data);
        });

        return ()=>{
            socket.close();
        }

    },[])

    const handleClick=()=>{
        socket.emit('message', {id:uuidV4(), message:"Hello from client","name":"client"});
    }

    return (
        <div>
            <h1>Chat Base</h1>
            <Button onClick={handleClick}>Send Message</Button>
        </div>
    )
}