import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Profile from './Profile/Profile.jsx';
import Messages from './Messages/Messages.jsx';
import News from './News/News.jsx';
import Music from './Music/Music.jsx';
import Settings from './Settings/Settings.jsx';
import s from './Content.module.css';

class Content extends React.Component {
  render() {
    return (
        <main className="main">
          <Routes>
            <Route path='/profile' element={<Profile />} />
            <Route path='/messages' element={<Messages />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </main>
    );
  }
}

export default Content;