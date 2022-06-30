import React from 'react';
import PropTypes from 'prop-types';
import css from './Friend.module.css';

const Friend = (props) => {
  const { name, photo } = props;
  return (
    <div className={css.friend} >
      <div className={css.photo} >
        <img src={photo} alt='' />
      </div>
      <h3 className={css.name} >
        {name}
      </h3>
    </div>
  );
};

Friend.propTypes = {
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};

export default Friend;
