import React from 'react';
import s from './Messages.module.css';
import Dialog from './Dialog/Dialog.jsx';
import Message from './Message/Message.jsx';

class Messages extends React.Component {
  render() {
    const dialogs = [
      {
        id: 1,
        photo: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Emma_Watson_2013.jpg',
        name: 'Emma Watson',
      },
      {
        id: 2,
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Carlo_Ancelotti_2016_%28cropped%29.jpg/640px-Carlo_Ancelotti_2016_%28cropped%29.jpg',
        name: 'Carlo Ancelotti',
      }
    ];
    const messages = [
      {
        id: 1,
        text: 'Hello',
      },
      {
        id: 2,
        text: 'What are u doing next Sat?',
      },
      {
        id: 3,
        text: '=)',
      },
    ];
    const dialogElements = dialogs.map((dialog) => {
      return <div key={dialog.id} className={s.dialog}>
        <Dialog key={dialog.id} {...dialog} />
      </div>
    })
    const messageElements = messages.map((message) => {
      return <div key={message.id} className={s.message}>
        <Message key={message.id} {...message} />
      </div>
    })

    return (
      <div className={s.messages}>
        <div className={s.dialogs}>
          {dialogElements}
        </div>
        <div className={s.messages_container}>
          {messageElements}
        </div>
      </div>
    );
  }
}

export default Messages;