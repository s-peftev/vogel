import Posts from './Posts.jsx';

const PostsContainer = (props) => {
  const { store } = props;
  const state = store.getState();
  const posts = state.profilePage.posts;

  return (<Posts posts={posts} />);
};

export default PostsContainer;