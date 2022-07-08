import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import UsersPaginator from './UsersPaginator/UsersPaginator.jsx';
import UserCard from './UserCard/UserCard.jsx';
import DashLoader from '../../Common/Preloaders/DashLoader/DashLoader.jsx';
import css from './Users.module.css';

const Users = (props) => {
  const pages = [];
  const totalPages = Math.ceil(props.totalUsersCount / props.usersPerPage);
  for (let i = 1; i <= totalPages; i += 1) {
    pages.push(i);
  }

  return <div>
    <div className={css.paginator_container}>
      <UsersPaginator
        pages={pages}
        pageOnClick={props.pageOnClick}
        currentPage={props.currentPage}
      />
    </div>
    <div className={css.user_cards_container}>
      {props.isFetching ? <div className={css.loader}><DashLoader /></div>
        : props.users.map((user) => <div className={css.user_card} key={user.id}>
          <NavLink to={`/profile/${user.id}`}>
            <UserCard
              key={user.id}
              {...user}
              followUser={props.followUser}
              unfollowUser={props.unfollowUser}
            />
          </NavLink>
        </div>)}
    </div>
  </div >;
};

Users.propTypes = {
  pageOnClick: PropTypes.func.isRequired,
  followUser: PropTypes.func.isRequired,
  unfollowUser: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  currentPage: PropTypes.number.isRequired,
  usersPerPage: PropTypes.number.isRequired,
  totalUsersCount: PropTypes.number.isRequired,
};

export default Users;
