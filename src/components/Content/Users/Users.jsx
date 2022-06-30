import React from 'react';
import PropTypes from 'prop-types';
import * as axios from 'axios';
import UserCard from './UserCard/UserCard.jsx';
import css from './Users.module.css';

class Users extends React.Component {
  componentDidMount() {
    axios.get('https://git-talks-server.herokuapp.com/api/users')
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    return <div>
      {this.props.users.map((user) => <div className={css.user_card} key={user.id}>
          <UserCard
            key={user.id}
            {...user}
            followUser={this.props.followUser}
            unfollowUser={this.props.unfollowUser}
          />
        </div>)}
    </div>;
  }
}

Users.propTypes = {
  setUsers: PropTypes.func.isRequired,
  followUser: PropTypes.func.isRequired,
  unfollowUser: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
};

export default Users;
