import UserCard from './UserCard/UserCard.jsx';
import Posts from './Posts/Posts.jsx';
import s from './Profile.module.css';

function Profile() {
    return (
      <div className={s.profile}>
        <div className={s.user_card}>
          <UserCard />
        </div>
        <div className={s.posts}>
          <Posts />
        </div>
      </div>
    );
  }
  
  export default Profile;