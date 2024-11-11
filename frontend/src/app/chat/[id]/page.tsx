import ChatBase from "@/components/chat/ChatBase";


export default function chat({params}:{params:{id:string}}){
    return (
        <div>
            <h1>Chat Page</h1>
            <ChatBase groupId={params.id}/>
        </div>
    )

}