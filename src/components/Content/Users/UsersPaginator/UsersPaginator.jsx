import React from 'react';
import PropTypes from 'prop-types';
import css from './UsersPaginator.module.css';

const UsersPaginator = (props) => <div className={css.paginator}>
    <div
      className={css.paginator_btn}
      onClick={() => { props.pageOnClick(props.currentPage - 1); }}
    >{'<'}</div>

    {props.pages.map((page) => <div
      key={`page_${page}`}
      className={props.currentPage === page ? `${css.paginator_btn} ${css.paginator_btn__active}` : css.paginator_btn}
      onClick={() => { props.pageOnClick(page); }}
    >{page}</div>)}

    <div
      className={css.paginator_btn}
      onClick={() => { props.pageOnClick(props.currentPage + 1); }}
    >{'>'}</div>
  </div>;

UsersPaginator.propTypes = {
  pages: PropTypes.array.isRequired,
  pageOnClick: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default UsersPaginator;
