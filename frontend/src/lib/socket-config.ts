import {io, Socket} from 'socket.io-client';
import Env from './env';

//Here Socket is a type of Socket from socket.io-client. Simply typescript is used to define the type of socket.

// instance of socket if not created then create a new instance of socket and return it.
let socket: Socket;
export const getSocket=():Socket=>{
    if(!socket){
        socket=io(Env.BACKEND_URL,{autoConnect:false});             //it means we have to manually trigger the connection 
    }
    return socket;
};

