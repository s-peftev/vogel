import css from './Messages.module.css';
import DialogsContainer from './Dialogs/DialogsContainer.jsx';
import MessagesBlockContainer from './MessagesBlock/MessagesBlockContainer.jsx';

const Messages = (props) => {
  const { store } = props;

  return (
    <div className={css.messages}>
      <div className={css.dialogs}>
        <DialogsContainer store={store} />
      </div>
      <div className={css.messages_block}>
        <MessagesBlockContainer store={store} />
      </div>
    </div>
  );
};

export default Messages;