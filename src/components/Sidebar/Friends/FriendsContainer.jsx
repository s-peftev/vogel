import Friends from './Friends.jsx';

const FriendsContainer = (props) => {
  const { store } = props;
  const state = store.getState();
  const friendsList = state.sidebar.friends;

  return (<Friends friends={friendsList} />);
};

export default FriendsContainer;