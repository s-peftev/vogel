import React from 'react';
import css from './Message.module.css';

class Message extends React.Component {
  render() {
    const { parrentClass, text } = this.props;

    return (
      <div className={`${parrentClass} ${css.message}`}>
        { text }
      </div>
    );
  }
}

export default Message;