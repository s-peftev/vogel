import React from 'react';
import s from './Music.module.css';

class Music extends React.Component {
  render() {
    const { parrentClass } = this.props;
    return (
      <main className={`${parrentClass} ${s.music}`}>
        Music HERE
      </main>
    );
  }
}
  
export default Music;