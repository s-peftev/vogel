import React from 'react';
import PropTypes from 'prop-types';
import Counters from './Counters/Counters.jsx';
import css from './Post.module.css';

const Post = (props) => {
  const {
    postUserInfo,
    date,
    text,
    likesCount,
    commentsCount,
  } = props;

  return (
    <div className={css.post}>
      <div className={css.photo}>
        <img src={postUserInfo.userPhoto} alt='post avatar'></img>
      </div>
      <div className={css.body}>
        <div className={css.header}>
          <div className={css.user}>
            <h6 className={css.name}>{postUserInfo.userName}</h6>
            <p className={css.login}>{postUserInfo.userLogin}</p>
          </div>
          <p className={css.date}>{date}</p>
        </div>
        <div className={css.content}>
          <p>{text}</p>
        </div>
        <Counters likesCount={likesCount} commentsCount={commentsCount} />
      </div>
    </div>
  );
};

Post.propTypes = {
  postUserInfo: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  likesCount: PropTypes.number.isRequired,
  commentsCount: PropTypes.number.isRequired,
};

export default Post;
