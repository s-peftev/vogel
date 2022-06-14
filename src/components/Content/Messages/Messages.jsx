import React from 'react';
import css from './Messages.module.css';
import Dialog from './Dialog/Dialog.jsx';
import Message from './Message/Message.jsx';

class Messages extends React.Component {
  render() {
    const { state } = this.props;
    const dialogElements = state.dialogs
      .map((dialog) =>
        <Dialog
          key={dialog.id}
          parrentClass={css.dialog}
          {...dialog}
        />)
    const messageElements = state.messages
      .map((message) =>
        <Message
          key={message.id}
          parrentClass={message.isUsersMessage ? `${css.message} ${css.message__right}` : css.message}
          {...message}
        />)

    return (
      <div className={css.messages}>
        <div className={css.dialogs}>
          {dialogElements}
        </div>
        <div className={css.messages_container}>
          <div className={css.sent_messages}>
            {messageElements}
          </div>
          <div className={css.new_message}></div>
        </div>
      </div>
    );
  }
}

export default Messages;