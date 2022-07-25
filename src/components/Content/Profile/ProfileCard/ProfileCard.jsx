import React from 'react';
import PropTypes from 'prop-types';
import css from './ProfileCard.module.css';

const ProfileCard = (props) => {
  const {
    photo,
    name,
    login,
    birthday,
    city,
    website,
    about,
    changeMainPhoto,
  } = props;

  const onPhotoSelected = ({ target }) => {
    if (target.files.length) {
      changeMainPhoto(target.files[0]);
    }
  };

  return (
    <div className={css.profile_card}>
      <div className={css.header}>
        <div className={css.photo}>
          <img src={photo} alt='profile avatar'></img>
        </div>
        <div className="">
          <input type={'file'} onChange={onPhotoSelected} />
        </div>
        <div className={css.name}>
          <h6 className={css.user_name}>{name}</h6>
          <p className={css.login}>{login}</p>
        </div>
      </div>
      <div className={css.body}>
        <p className={css.info}>
          <span className={css.key}>Birthday: </span>
          <span className={css.value}>{birthday}</span>
        </p>
        <p className={css.info}>
          <span className={css.key}>City: </span>
          <span className={css.value}>{city}</span>
        </p>
        <p className={css.info}>
          <span className={css.key}>Website: </span>
          <span className={css.value}>{website}</span>
        </p>
        <p className={css.info}>
          <span className={css.key}>About: </span>
          <span className={css.value}>{about}</span>
        </p>
      </div>
    </div>
  );
};

ProfileCard.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  birthday: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  changeMainPhoto: PropTypes.func.isRequired,
};

export default ProfileCard;
