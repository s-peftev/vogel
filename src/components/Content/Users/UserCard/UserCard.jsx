import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';
import css from './UserCard.module.css';

const UserCard = (props) => {
  const {
    id,
    photo,
    name,
    login,
    about,
    followed,
    followUser,
    unfollowUser,
  } = props;

  const http = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    headers: {
      'X-Requested-With': 'XMLHttpReques',
    },
    withCredentials: true,
  });

  return (
    <div className={css.user_card}>
        <NavLink to={`/profile/${id}`} className={css.photo}>
          <img src={photo} alt='' />
        </NavLink>
        <NavLink to={`/profile/${id}`} className={css.info}>
          <div className={css.info_header}>
            <div className={css.user}>
              <h6 className={css.name}>{name}</h6>
              <p className={css.login}>{login}</p>
            </div>
          </div>
          <div className={css.info_body}>
            <p className={css.about}>{about}</p>
          </div>
        </NavLink>
      <div className={css.following}>
        {
          followed
            ? <button
              className={`${css.following_btn} ${css.unfollow}`}
              onClick={() => {
                http.delete(`api/follow/${id}`).then((response) => {
                  if (response.data.done) {
                    unfollowUser(id);
                  }
                });
              }} >Unfollow
            </button>
            : <button
              className={`${css.following_btn} ${css.follow}`}
              onClick={() => {
                http.post(`api/follow/${id}`).then((response) => {
                  if (response.data.done) {
                    followUser(id);
                  }
                });
              }} >Follow
            </button>
        }
      </div>
    </div>
  );
};

UserCard.propTypes = {
  id: PropTypes.number.isRequired,
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  followed: PropTypes.bool.isRequired,
  followUser: PropTypes.func.isRequired,
  unfollowUser: PropTypes.func.isRequired,
};

export default UserCard;
