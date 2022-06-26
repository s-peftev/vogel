import UserCardContainer from './UserCard/UserCardContainer.jsx';
import PostsContainer from './Posts/PostsContainer.jsx';
import css from './Profile.module.css';

const Profile = (props) => {
  const { store } = props;

  return (
    <div className={css.profile}>
      <div className={css.user_card}>
        <UserCardContainer store={store} />
      </div>
      <div className={css.posts}>
        <PostsContainer store={store} />
      </div>
    </div>
  );
};

export default Profile;