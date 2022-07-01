import React from 'react';
import PropTypes from 'prop-types';
import * as axios from 'axios';
import UserCard from './UserCard/UserCard.jsx';
import css from './Users.module.css';

class Users extends React.Component {
  componentDidMount() {
    axios.get(`https://git-talks-server.herokuapp.com/api/users?page=${this.props.currentPage}&count=${this.props.usersPerPage}`)
      .then((response) => {
        this.props.setUsers(response.data.items.data);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  pageOnClick = (pageNumber) => {
    axios.get(`https://git-talks-server.herokuapp.com/api/users?page=${pageNumber}&count=${this.props.usersPerPage}`)
      .then((response) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setUsers(response.data.items.data);
      });
  };

  render() {
    const pages = [];
    const totalPages = Math.ceil(this.props.totalUsersCount / this.props.usersPerPage);
    for (let i = 1; i <= totalPages; i += 1) {
      pages.push(i);
    }
    return <div>
      <div className={css.paginator}>
        {pages.map((page) => <div
          key={`page_${page}`}
          className={this.props.currentPage === page ? `${css.page_number} ${css.page_number__active}` : css.page_number}
          onClick={() => { this.pageOnClick(page); }}
        >{page}</div>)}
      </div>
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
  setCurrentPage: PropTypes.func.isRequired,
  setTotalUsersCount: PropTypes.func.isRequired,
  followUser: PropTypes.func.isRequired,
  unfollowUser: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
  usersPerPage: PropTypes.number.isRequired,
  totalUsersCount: PropTypes.number.isRequired,
};

export default Users;
