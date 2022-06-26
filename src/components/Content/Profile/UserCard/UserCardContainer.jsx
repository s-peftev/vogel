import UserCard from './UserCard.jsx';

const UserCardContainer = (props) => {
  const { store } = props;
  const state = store.getState();
  const userInfo = state.profilePage.user_info;

  return (<UserCard {...userInfo} />);
};

export default UserCardContainer;