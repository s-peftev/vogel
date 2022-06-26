import UserCardContainer from './UserCard/UserCardContainer.jsx';
import PostsContainer from './Posts/PostsContainer.jsx';
import css from './Profile.module.css';

const Profile = () => {

  return (
    <div className={css.profile}>
      <div className={css.user_card}>
        <UserCardContainer />
      </div>
      <div className={css.posts}>
        <PostsContainer />
      </div>
    </div>
  );
};

export default Profile;