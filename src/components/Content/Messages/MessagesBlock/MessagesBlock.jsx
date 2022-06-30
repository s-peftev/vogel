import React from 'react';
import PropTypes from 'prop-types';
import css from './MessagesBlock.module.css';
import Message from './Message/Message.jsx';

const MessagesBlock = (props) => {
  const {
    messages,
    messageInput,
    messageInputPlaceholder,
    inputMessageHandler,
    sendMessageHandler,
  } = props;

  const messageElements = messages
    .map((message) => <Message
        key={message.id}
        parrentClass={message.isUsersMessage ? `${css.message} ${css.message__is_users}` : css.message}
        {...message}
      />);

  return (
    <>
      <div className={css.sent_messages}>
        <div className={css.sent_messages__container}>
          {messageElements}
        </div>
      </div>
      <div className={css.new_message}>
        <textarea
          className={css.textarea}
          onChange={inputMessageHandler}
          value={messageInput}
          placeholder={messageInputPlaceholder}
        />
        <div className={css.message_controls}>
          <button
            className={css.send_button}
            onClick={sendMessageHandler}
          >Send</button>
        </div>
      </div>
    </>
  );
};

MessagesBlock.propTypes = {
  messages: PropTypes.array.isRequired,
  messageInput: PropTypes.string.isRequired,
  messageInputPlaceholder: PropTypes.string.isRequired,
  inputMessageHandler: PropTypes.func.isRequired,
  sendMessageHandler: PropTypes.func.isRequired,
};

export default MessagesBlock;
