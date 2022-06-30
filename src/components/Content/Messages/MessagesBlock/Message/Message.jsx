import React from 'react';
import PropTypes from 'prop-types';
import css from './Message.module.css';

const Message = (props) => {
  const { parrentClass, text } = props;

  return (
    <div className={`${parrentClass} ${css.message}`}>
      {text}
    </div>
  );
};

Message.propTypes = {
  parrentClass: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Message;
