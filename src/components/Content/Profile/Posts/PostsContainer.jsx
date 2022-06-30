import { connect } from 'react-redux';
import Posts from './Posts.jsx';

const mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
});

const PostsContainer = connect(mapStateToProps)(Posts);

export default PostsContainer;
