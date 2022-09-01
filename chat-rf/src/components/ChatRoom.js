import React, { Component } from "react";

export default class ChatRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      messages: [
        { id: 0, text: "text 1" },
        { id: 1, text: "text 2" },
        { id: 2, text: "text 3" },
      ],
    };
  }

  updateMessage(e) {
    this.setState({ message: e.target.value });
  }

  componentDidMount() {
    window.firebase
      .database()
      .ref("messages/")
      .on("value", (snap) => {
        const currentMessages = snap.val();
        if (currentMessages !== null) {
          this.setState({
            messages: currentMessages,
          });
        }
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const list = this.state.messages;
    const newMessage = {
      id: this.state.messages.length,
      text: this.state.message,
    };
    //list.push(newMessage);
    //this.setState({ message: list });
    window.firebase.database().ref(`messages/${newMessage.id}`).set(newMessage);
    this.setState({ message: "" });
  }

  render() {
    const { messages } = this.state;
    const messagesList = messages.map((message) => {
      return <li key={message.id}>{message.text}</li>;
    });

    return (
      <div className="ChatRoom">
        <ul>{messagesList}</ul>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            value={this.state.message}
            onChange={this.updateMessage.bind(this)}
          />
          <button>Send</button>
        </form>
      </div>
    );
  }
}
