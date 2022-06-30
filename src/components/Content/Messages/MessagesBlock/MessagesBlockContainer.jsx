import { connect } from 'react-redux';
import MessagesBlock from './MessagesBlock.jsx';
import { inputMessageAction, sendMessageAction } from '../../../../redux/redusers/messagesReducer';

const mapStateToProps = (state) => ({
  messages: state.messagesPage.messages,
  messageInput: state.messagesPage.messageInput,
  messageInputPlaceholder: state.messagesPage.messageInputPlaceholder,
});

const mapDispatchToProps = (dispatch) => ({
  inputMessageHandler: (e) => {
    const inputedText = e.target.value;
    dispatch(inputMessageAction(inputedText));
  },
  sendMessageHandler: () => {
    dispatch(sendMessageAction());
  },
});

const MessagesBlockContainer = connect(mapStateToProps, mapDispatchToProps)(MessagesBlock);

export default MessagesBlockContainer;
