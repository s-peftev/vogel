import React from 'react';
import s from './Message.module.css';

class Message extends React.Component {
  render() {
    const { text } = this.props;

    return (
      <div className={s.message}>
        { text }
      </div>
    );
  }
}

export default Message;