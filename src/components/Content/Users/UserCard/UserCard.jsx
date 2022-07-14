import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { follow, unfollow } from '../../../../api/api';
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
              disabled={props.disabledFollowBtnUsersId.includes(id)}
              className={`${css.following_btn} ${css.unfollow}`}
              onClick={() => {
                props.toggleDisabledFollowBtnUsersId(id);
                unfollow(id).then((data) => {
                  if (data.done) {
                    unfollowUser(id);
                    props.toggleDisabledFollowBtnUsersId(id);
                  }
                });
              }} >Unfollow
            </button>
            : <button
              disabled={props.disabledFollowBtnUsersId.includes(id)}
              className={`${css.following_btn} ${css.follow}`}
              onClick={() => {
                props.toggleDisabledFollowBtnUsersId(id);
                follow(id).then((data) => {
                  if (data.done) {
                    followUser(id);
                    props.toggleDisabledFollowBtnUsersId(id);
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
  toggleDisabledFollowBtnUsersId: PropTypes.func.isRequired,
  unfollowUser: PropTypes.func.isRequired,
  disabledFollowBtnUsersId: PropTypes.array.isRequired,
};

export default UserCard;
