import { connect } from 'react-redux';
import UserCard from './UserCard.jsx';

const mapStateToProps = (state) => {
  const userInfo = state.profilePage.user_info;
  return {...userInfo};
};

const UserCardContainer = connect(mapStateToProps)(UserCard);

export default UserCardContainer;