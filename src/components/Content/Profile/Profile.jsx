import UserCard from './UserCard/UserCard.jsx';
import Posts from './Posts/Posts.jsx';
import s from './Profile.module.css';

const Profile = (props) => {
    return (
      <div className={`${props.parrentClass} ${s.profile}`}>
        <UserCard parrentClass={s.user_card} />
        <Posts parrentClass={s.posts} />
      </div>
    );
  }
  
  export default Profile;