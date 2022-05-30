import React from 'react';
import s from './NewPost.module.css';

class NewPost extends React.Component {
  render() {
    const { parrentClass } = this.props;
    return (
      <div className={`${parrentClass} ${s.new_post}`}>
        <textarea className={s.textarea} placeholder='What`s new?'></textarea>
        <button className={s.button}>Post</button>
      </div>
    );
  }
}

export default NewPost;