import { connect } from 'react-redux';
import MessagesBlock from './MessagesBlock.jsx';
import { inputMessage, sendMessage } from '../../../../redux/redusers/messagesReducer';

const mapStateToProps = (state) => ({
  messages: state.messagesPage.messages,
  messageInput: state.messagesPage.messageInput,
  messageInputPlaceholder: state.messagesPage.messageInputPlaceholder,
});

const MessagesBlockContainer = connect(mapStateToProps, {
  inputMessage,
  sendMessage,
})(MessagesBlock);

export default MessagesBlockContainer;
