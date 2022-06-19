import React from 'react';
import css from './Messages.module.css';
import Dialog from './Dialog/Dialog.jsx';
import Message from './Message/Message.jsx';

class Messages extends React.Component {
  render() {
    const { state, handlers } = this.props;

    const messageTextArea = React.createRef();
    
    const sendMessageHandler = () => {
      const messageToSend = messageTextArea.current.value;
      handlers.sendMessageHandler(messageToSend);
      messageTextArea.current.value = '';
    }
    const inputMessageHandler = () => {
      const inputedText = messageTextArea.current.value;
      handlers.inputMessageHandler(inputedText);
    }

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
          parrentClass={message.isUsersMessage ? `${css.message} ${css.message__is_users}` : css.message}
          {...message}
        />)

    return (
      <div className={css.messages}>
        <div className={css.dialogs}>
          <div className={css.dialogs_col}>
            {dialogElements}
          </div>
        </div>
        <div className={css.messages_block}>
          <div className={css.sent_messages}>
            <div className={css.sent_messages__container}>
              {messageElements}
            </div>
          </div>
          <div className={css.new_message}>
            <textarea ref={messageTextArea} className={css.textarea} onChange={ inputMessageHandler } defaultValue={ state.messageInput } placeholder='Write a message...'></textarea>
            <div className={css.message_controls}>
              <button className={css.send_button} onClick={sendMessageHandler} >Send</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Messages;