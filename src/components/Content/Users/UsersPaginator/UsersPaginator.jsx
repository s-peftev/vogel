import React from 'react';
import PropTypes from 'prop-types';
import Pagination from '@mui/material/Pagination';
import css from './UsersPaginator.module.css';

const UsersPaginator = (props) => <Pagination
  classes={{ ul: css.paginator }}
  count={props.pages.length}
  page={props.currentPage}
  onChange={(e, page) => { props.pageOnClick(page); }}
  variant="outlined"
  shape="rounded"
  color='primary' />;

UsersPaginator.propTypes = {
  pages: PropTypes.array.isRequired,
  pageOnClick: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default UsersPaginator;
