import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Messages from './Messages/Messages.jsx';
import News from './News/News.jsx';
import Music from './Music/Music.jsx';
import Settings from './Settings/Settings.jsx';
import UsersContainer from './Users/UsersContainer.jsx';
import ProfileContainer from './Profile/ProfileContainer.jsx';

const Content = () => (
  <Routes>
    <Route path='/profile/' element={<ProfileContainer />}>
      <Route path=':userId' element={<ProfileContainer />} />
    </Route>
    <Route path='/messages/*' element={<Messages />} />
    <Route path='/news' element={<News />} />
    <Route path='/music' element={<Music />} />
    <Route path='/settings' element={<Settings />} />
    <Route path='/users' element={<UsersContainer />} />
  </Routes>
);

export default Content;
