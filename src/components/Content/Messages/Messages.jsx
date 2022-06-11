import React from 'react';
import s from './Messages.module.css';
import Dialog from './Dialog/Dialog.jsx';
import Message from './Message/Message.jsx';

class Messages extends React.Component {
  render() {
    const dialogEmmaProps = {
      id: 1,
      photo: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Emma_Watson_2013.jpg',
      name: 'Emma Watson',
    };

    const dialogCarloProps = {
      id: 2,
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Carlo_Ancelotti_2016_%28cropped%29.jpg/640px-Carlo_Ancelotti_2016_%28cropped%29.jpg',
      name: 'Carlo Ancelotti',
    };

    const messages = [
      'Hello',
      'What are u doing next Sat?',
      '=)'
    ]

    return (
      <div className={s.messages}>
        <div className={s.dialogs}>
          <div className={s.dialog}>
            <Dialog  {...dialogEmmaProps} />
          </div>
          <div className={s.dialog}>
            <Dialog {...dialogCarloProps} />
          </div>
        </div>
        <div className={s.messages_container}>
          <div className={s.message}>
            <Message text={messages[0]} />
          </div>
          <div className={s.message}>
            <Message text={messages[1]} />
          </div>
          <div className={s.message}>
            <Message text={messages[2]} />
          </div>
        </div>
      </div>
    );
  }
}

export default Messages;