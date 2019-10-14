import React from "react";

const Messages = ({ messages }) => (
  <div>
    <h3>Messages</h3>
    <div className="msg__list">
      {messages.map((msg, i) => (
        <div className="msg" key={i}>
          <span className="msg__timestamp">{msg.timestamp}</span>
          <span className="msg__text">{msg.text}</span>
        </div>
      ))}
    </div>

    <style jsx>{`
      .msg {
        font-size: 14px;
        font-family: menlo, monospace, sans-serif;
        margin: 10px 0;
      }

      .msg__timestamp {
        display: inline-block;
        margin-right: 1.2em;
        font-size: 0.8em;
        color: lightgrey;
      }

      .msg__text {
        font-size: 1em;
        color: #333;
      }
    `}

    </style>
  </div>
);

Messages.displayName = 'Messages';

export default Messages;
