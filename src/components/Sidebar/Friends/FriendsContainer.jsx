import { connect } from 'react-redux';
import Friends from './Friends.jsx';

const mapStateToProps = (state) => ({
  friends: state.sidebar.friends,
});

const FriendsContainer = connect(mapStateToProps)(Friends);

export default FriendsContainer;
