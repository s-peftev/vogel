import { connect } from 'react-redux';
import ProfileCard from './ProfileCard.jsx';

const mapStateToProps = (state) => {
  const { userInfo } = state.profilePage;
  return { ...userInfo };
};

const ProfileCardContainer = connect(mapStateToProps)(ProfileCard);

export default ProfileCardContainer;
