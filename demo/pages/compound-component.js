import React from 'react'
import Chat from '../components/chat'

export default function CompoundComponent() {
  return (
    <div className="centered">
      <Chat>
        <Chat.Messages />
        <Chat.Input />
        <Chat.Button />
        
        </Chat>

      <style jsx>{`
      .centered {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }`}
      </style>
    </div>
  )
}
