import express, { Application, Request, Response } from "express";
import "dotenv/config";
import cors from "cors";
import Routes from "./routes/index.js";
import { Server } from "socket.io";
import { createServer } from "http";
import { setupSocket } from "./socket.js";
import { createAdapter } from "@socket.io/redis-streams-adapter";
import redis from "./config/redis.config.js";

const app: Application = express();
const PORT = process.env.PORT || 7000;

// * Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// * Socket.io
const server= createServer(app);      //simply ek server bana diye hai jo http requests sunega
const io=new Server(server,{          //This creates a Socket.io server that is attached to the previously created HTTP server (server). This allows you to establish real-time bidirectional communication between the server and clients (browsers, etc.) using WebSocketss
  cors:{
    origin:"*"
  },
  adapter:createAdapter(redis)    //This creates a new adapter that will be used to broadcast messages to all connected clients. The adapter is created using the createAdapter function from the @socket.io/redis-streams-adapter package and is passed the previously created Redis client (redis).  
})

setupSocket(io); //This function will set up the socket.io server to listen for incoming connections and log the unique socket ID when a connection is established.
export { io };

app.get("/", (req: Request, res: Response) => {
  return res.send("It's working 🙌");
});

// Routes
app.use("/api",Routes);


//ab app ki jagah server.listen karna padega
server.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
