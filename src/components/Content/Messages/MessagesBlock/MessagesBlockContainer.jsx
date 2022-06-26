import MessagesBlock from './MessagesBlock.jsx';
import { inputMessageAction, sendMessageAction } from '../../../../redux/redusers/messagesReducer.js';

const MessagesBlockContainer = (props) => {
  const { store } = props;
  const state = store.getState();
  const messages = state.messagesPage.messages;
  const messageInput = state.messagesPage.messageInput;
  const messageInputPlaceholder = state.messagesPage.messageInputPlaceholder;

  const inputMessageHandler = (e) => {
    const inputedText = e.target.value;
    store.dispatch(inputMessageAction(inputedText));
  };
  const sendMessageHandler = () => {
    store.dispatch(sendMessageAction());
  };

  return (
    <MessagesBlock
      messages={messages}
      messageInput={messageInput}
      messageInputPlaceholder={messageInputPlaceholder}
      inputMessageHandler={inputMessageHandler}
      sendMessageHandler={sendMessageHandler}
    />
  );
};

export default MessagesBlockContainer;