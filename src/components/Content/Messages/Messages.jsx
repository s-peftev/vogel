import React from 'react';
import css from './Messages.module.css';
import DialogsContainer from './Dialogs/DialogsContainer.jsx';
import MessagesBlockContainer from './MessagesBlock/MessagesBlockContainer.jsx';

const Messages = () => (
    <div className={css.messages}>
      <div className={css.dialogs}>
        <DialogsContainer />
      </div>
      <div className={css.messages_block}>
        <MessagesBlockContainer />
      </div>
    </div>
);

export default Messages;
