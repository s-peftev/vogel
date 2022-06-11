import React from 'react';
import NewPost from './NewPost/NewPost.jsx';
import Post from './Post/Post.jsx';
import s from './Posts.module.css';

class Posts extends React.Component {
  render() {
    const { parrentClass, posts } = this.props;

    return (
      <div className={`${parrentClass} ${s.posts}`}>
        <NewPost parrentClass={s.new_post} />
        <Post parrentClass={s.post} {...posts[0]} />
        <Post parrentClass={s.post} {...posts[1]}/>
        <Post parrentClass={s.post} {...posts[2]}/>
      </div>
    );
  }
}

export default Posts;