import Dialogs from './Dialogs.jsx';

const DialogsContainer = (props) => {
  const { store } = props;
  const state = store.getState();
  const dialogs = state.messagesPage.dialogs;

  return (<Dialogs dialogs={dialogs} />);
};

export default DialogsContainer;