import React from 'react';
import s from './Messages.module.css';
import Dialog from './Dialog/Dialog.jsx';

class Messages extends React.Component {
  render() {
    const dialogEmmaProps = {
      photo: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Emma_Watson_2013.jpg',
      name: 'Emma Watson',
    };

    const dialogCarloProps = {
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Carlo_Ancelotti_2016_%28cropped%29.jpg/640px-Carlo_Ancelotti_2016_%28cropped%29.jpg',
      name: 'Carlo Ancelotti',
    };

    return (
      <div className={s.messages}>
        <div className={s.dialogs}>
          <Dialog parrentClass={`${s.dialog} ${s.active}`} {...dialogEmmaProps}/>
          <Dialog parrentClass={s.dialog} {...dialogCarloProps}/>
        </div>
        <div className={s.messages_container}>
          <p>Hello</p>
          <p>What are u doing next Sat?</p>
          <p>=)</p>
        </div>
      </div>
    );
  }
}
  
export default Messages;