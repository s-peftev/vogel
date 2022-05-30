import React from 'react';
import Counters from './Counters/Counters.jsx';
import s from './Post.module.css';

class Post extends React.Component {
  render() {
    const { 
      parrentClass,
      photo,
      name,
      login,
      date,
      text,
      likes_count,
      comments_count
    } = this.props;
    
    return (
      <div className={`${parrentClass} ${s.post}`}>
        <div className={s.photo}>
          <img src={ photo } alt='post avatar'></img>
        </div>
        <div className={s.body}>
          <div className={s.header}>
            <div className={s.user}>
              <h6 className={s.name}>{ name }</h6>
              <p className={s.login}>{ login }</p>
            </div>
            <p className={s.date}>{ date }</p>
          </div>
          <div className={s.content}>
            <p>{ text }</p>
          </div>
          <Counters parrentClass={s.counters} likes_count={ likes_count } comments_count={ comments_count }/>
        </div>
      </div>
    );
  }
}

export default Post;