import { Server,Socket } from "socket.io";

interface CustomSocket extends Socket{
    room?:string

}
export function setupSocket(io:Server){

    // ek middleware banaya hai jo socket ko room me join karne ke liye use hoga
    // matlab jitni bhi socket connection hogi wo ek room id apne saath leke aayegi
    io.use((socket:CustomSocket,next)=>{
        const room=socket.handshake.auth.room || socket.handshake.headers.room;
        if(!room){
            return next(new Error("Invalid room. Please provide correct room id"));
        }
        socket.room=room;
        next();
    })



    io.on('connection',(socket:CustomSocket )=>{

        // join the room first on connection
        socket.join(socket.room);

        // console.log("Socket is connected and unique id is",socket.id);

        socket.on('message',(data)=>{
            // console.log("The server side message ",data);
            io.to(socket.room).emit('message',data);
        });

        socket.on('disconnect',()=>{
            console.log("Socket is disconnected and unique id was",socket.id);
        });
        
    });
} 