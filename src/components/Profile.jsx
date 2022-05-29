import UserCard from './UserCard.jsx';
import s from './Profile.module.css';

function Profile() {
    return (
      <div className={s.profile}>
        <div className={s.user_card}>
          <UserCard />
        </div>
        <div className="profile__posts">
          <div className="profile__new-post">New Post</div>
          <div className="profile__post">Post 1</div>
          <div className="profile__post">Post 2</div>
          <div className="profile__post">Post 3</div>
        </div>
      </div>
    );
  }
  
  export default Profile;