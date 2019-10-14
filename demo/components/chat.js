import React, { Component } from "react";
import Messages from "./messages";
import Input from "./input";
import Button from "./button";

class Chat extends Component {
  static Messages = Messages;
  static Input = Input;
  static Button = Button;

  state = {
    currentMessage: "",
    messages: []
  };

  updateCurrentMessage = event => {
    const { value } = event.target;
    this.setState({ currentMessage: value });
  };

  add = () => {
    const { currentMessage } = this.state;

    this.setState(prevState => ({
      currentMessage: "",
      messages: [
        ...prevState.messages,
        {
          text: currentMessage,
          timestamp: new Date().toLocaleDateString()
        }
      ]
    }));
  };

  render() {
    const { currentMessage, messages } = this.state;
    const { updateCurrentMessage, add } = this;
    const { children } = this.props;
    return (
      <div>
        <h1>Compound Component</h1>
        { React.Children.map(children, child => {
          const { displayName } = child.type;

          switch (displayName) {
            case 'Messages':
              return React.cloneElement(child, { messages });
            case 'Input':
              return React.cloneElement(child, {
                value: currentMessage,
                onChange: updateCurrentMessage
              });

            case 'Button':
              return React.cloneElement(child, {
                onClick: add
              });
          
            default:
              break;
          }
        })}
      </div>
    );
  }
}

export default Chat;
