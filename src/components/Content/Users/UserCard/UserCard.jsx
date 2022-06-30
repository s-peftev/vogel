import React from 'react';
import PropTypes from 'prop-types';
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
      <div className={css.photo}>
        <img src={photo} alt='' />
      </div>
      <div className={css.info}>
        <div className={css.info_header}>
          <div className={css.user}>
            <h6 className={css.name}>{name}</h6>
            <p className={css.login}>{login}</p>
          </div>
          <div className={css.following}>
            {
              followed
                ? <button
                  className={`${css.following_btn} ${css.unfollow}`}
                  onClick={() => { unfollowUser(id); }} >Unfollow
                </button>
                : <button
                  className={`${css.following_btn} ${css.follow}`}
                  onClick={() => { followUser(id); }} >Follow
                </button>
            }
          </div>
        </div>
        <div className={css.info_body}>
          <p className={css.about}>{about}</p>
        </div>
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
