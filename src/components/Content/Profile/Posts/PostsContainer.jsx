import { connect } from 'react-redux';
import Posts from './Posts.jsx';

const mapStateToProps = (state) => {
  const { userInfo, posts } = state.profilePage;
  return {
    posts,
    postUserInfo: {
      userName: userInfo.name,
      userLogin: userInfo.login,
      userPhoto: userInfo.photo,
    },
  };
};

const PostsContainer = connect(mapStateToProps)(Posts);

export default PostsContainer;
