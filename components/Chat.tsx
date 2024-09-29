import Chatbox from "./ChatBox"

const Chat = () => {
  return (
    <div className="p-10 border h-[60vh] w-full">
      <h1 className="tracking-tight inline font-semibold text-[2.5rem] lg:text-4xl">Chat</h1>
      <Chatbox/>
    </div>
  )
}

export default Chat
