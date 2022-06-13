import React from 'react';
import Counters from './Counters/Counters.jsx';
import css from './Post.module.css';

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
      <div className={`${parrentClass} ${css.post}`}>
        <div className={css.photo}>
          <img src={ photo } alt='post avatar'></img>
        </div>
        <div className={css.body}>
          <div className={css.header}>
            <div className={css.user}>
              <h6 className={css.name}>{ name }</h6>
              <p className={css.login}>{ login }</p>
            </div>
            <p className={css.date}>{ date }</p>
          </div>
          <div className={css.content}>
            <p>{ text }</p>
          </div>
          <Counters likes_count={ likes_count } comments_count={ comments_count }/>
        </div>
      </div>
    );
  }
}

export default Post;