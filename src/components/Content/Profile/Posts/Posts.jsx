import NewPost from './NewPost/NewPost.jsx';
import Post from './Post/Post.jsx';
import s from './Posts.module.css';

function Posts() {
    return (
      <div className={s.posts}>
        <NewPost />
        <Post />
        <Post />
        <Post />
      </div>
    );
  }
  
  export default Posts;