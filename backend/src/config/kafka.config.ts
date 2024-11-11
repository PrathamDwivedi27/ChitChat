import { Kafka, Producer} from "kafkajs";
import fs from "fs";
import path from "path";



const kafka =new Kafka ({
    brokers:["chatt-app-chat-app27.l.aivencloud.com:19800"],
    ssl:{
        ca:[fs.readFileSync(path.resolve("src/config/ca.pem"),'utf-8')],
    },
    sasl:{
        username:process.env.KAFKA_USERNAME,
        password:process.env.KAFKA_PASSWORD,
        mechanism:"plain"
    }
})

let producer:null | Producer=null;

export async function createProducer(){
    // if producer is already created then return it taaki baar baar producer na bne
    if(producer) return producer;

    const _producer=kafka.producer();
    await _producer.connect();
    console.log("Producer is connected");
    producer=_producer;
    return producer;
}

export async function produceMessage(mesasge:string){
    const producer=await createProducer();
    await producer.send({
        messages:[{key:`message-${Date.now()}`,value:mesasge}],
        topic:'Chatting'
    })
    return true;
}



export default kafka;