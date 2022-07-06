import React from 'react';
import PropTypes from 'prop-types';
import NewPost from './NewPost/NewPost.jsx';
import Post from './Post/Post.jsx';
import css from './Posts.module.css';

const Posts = (props) => {
  const { posts } = props;
  const postElements = posts
    .map((post) => <div key={post.id} className={css.post}>
      <Post key={post.id} postUserInfo={props.postUserInfo} {...post} />
    </div>);

  return (
    <div className={css.posts}>
      <NewPost />
      {postElements}
    </div>
  );
};

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
  postUserInfo: PropTypes.object.isRequired,
};

export default Posts;
