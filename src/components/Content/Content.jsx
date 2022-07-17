import React from 'react';
import PropTypes from 'prop-types';
import { Route, Routes, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import withAuthRedirect from '../../hoc/withAuthRedirect.jsx';
import Messages from './Messages/Messages.jsx';
import News from './News/News.jsx';
import Music from './Music/Music.jsx';
import Settings from './Settings/Settings.jsx';
import UsersContainer from './Users/UsersContainer.jsx';
import ProfileContainer from './Profile/ProfileContainer.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';
import css from './Content.module.css';

const Content = (props) => (
  <>
    <nav
      className={props.burgerIsActive
        ? `${css.sidebar} ${css.sidebar_active}` : css.sidebar}
    >
      <Sidebar />
    </nav>
    <main className={css.main}>
      <Routes>
        <Route path='/' element={<Navigate to='/profile/' />} />
        <Route path='/profile/' element={<ProfileContainer />} >
          <Route path=':userId' element={<ProfileContainer />} />
        </Route>
        <Route path='/messages/*' element={<Messages />} />
        <Route path='/news' element={<News />} />
        <Route path='/music' element={<Music />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/users' element={<UsersContainer />} />
      </Routes>
    </main>
  </>
);

Content.propTypes = {
  burgerIsActive: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  burgerIsActive: state.header.burgerMenu.isActive,
});

export default compose(
  connect(mapStateToProps),
  withAuthRedirect,
)(Content);
