import React from 'react';
import s from './Messages.module.css';

class Messages extends React.Component {
  render() {
    const { parrentClass } = this.props;
    return (
      <main className={`${parrentClass} ${s.messages}`}>
        MESSAGES HERE
      </main>
    );
  }
}
  
export default Messages;