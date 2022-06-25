import UserCard from './UserCard/UserCard.jsx';
import Posts from './Posts/Posts.jsx';
import css from './Profile.module.css';

const Profile = (props) => {
  const { state } = props;
  return (
    <div className={css.profile}>
      <div className={css.user_card}>
        <UserCard user_info={state.user_info} />
      </div>
      <div className={css.posts}>
        <Posts posts={state.posts} />
      </div>
    </div>
  );
};

export default Profile;