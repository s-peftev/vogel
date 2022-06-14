import React from 'react';
import css from './Friend.module.css';

class Friend extends React.Component {
  render() {
    const { name, photo } = this.props;
    return (
      <div className={ css.friend } >
        <div className={ css.photo } >
          <img src={ photo } alt='' />
        </div>
        <h3 className={ css.name } >
          { name }
        </h3>
      </div>
    );
  }
}

export default Friend;