import React from 'react';
import * as axios from 'axios';
import UserCard from './UserCard/UserCard.jsx';
import css from './Users.module.css';

class Users extends React.Component {
  constructor(props) {
    super(props)
    axios.get('http://localhost:8000/api/users')
      .then((response) => {
        this.props.setUsers(response.data.items);
      })
  }

  render() {
    return <div>
      {this.props.users.map((user) =>
        <div className={css.user_card} key={user.id}>
          <UserCard
            key={user.id}
            {...user}
            followUser={this.props.followUser}
            unfollowUser={this.props.unfollowUser}
          />
        </div>
      )}
    </div>
  }
}

export default Users;