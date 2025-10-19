import React from 'react'
import { FaCamera, FaPlus, FaEllipsisV } from "react-icons/fa";
import Messages from './Messages';
import Input from './Input';

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <FaCamera className='icon' />
          <FaPlus className='icon' />
          <FaEllipsisV className='icon' />
          </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat
