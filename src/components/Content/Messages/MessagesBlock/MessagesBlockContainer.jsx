import { connect } from 'react-redux';
import MessagesBlock from './MessagesBlock.jsx';
import { inputMessage, sendMessage } from '../../../../redux/redusers/messagesReducer';
import * as selector from '../../../../redux/selectors';

const mapStateToProps = (state) => ({
  messages: selector.selectDialogMessages(state),
  messageInput: selector.selectMessageInput(state),
  messageInputPlaceholder: selector.selectMessageInputPlaceholder(state),
});

const MessagesBlockContainer = connect(mapStateToProps, {
  inputMessage,
  sendMessage,
})(MessagesBlock);

export default MessagesBlockContainer;
