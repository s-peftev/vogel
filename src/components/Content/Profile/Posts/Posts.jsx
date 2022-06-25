import NewPost from './NewPost/NewPost.jsx';
import Post from './Post/Post.jsx';
import css from './Posts.module.css';

const Posts = (props) => {
  const { posts } = props;
  const postElements = posts.map((post) => <Post key={post.id} parrentClass={css.post} {...post} />);

  return (
    <div className={css.posts}>
      <NewPost />
      {postElements}
    </div>
  );
};

export default Posts;