import { connect } from 'react-redux';
import Dialogs from './Dialogs.jsx';

const mapStateToProps = (state) => ({
  dialogs: state.messagesPage.dialogs,
});

const DialogsContainer = connect(mapStateToProps)(Dialogs);

export default DialogsContainer;
