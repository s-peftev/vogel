import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar.jsx';
import Profile from './Profile/Profile.jsx';
import Messages from './Messages/Messages.jsx';
import News from './News/News.jsx';
import Music from './Music/Music.jsx';
import Settings from './Settings/Settings.jsx';
import s from './Content.module.css';

class Content extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className={s.content}>
          <div className={s.container}>
            <Sidebar parrentClass={s.sidebar} />
            <div className={s.main}>
              <Routes>
                <Route path='/' element={<Profile />}/>
                <Route path='/profile' element={<Profile />}/>
                <Route path='/messages' element={<Messages />}/>
                <Route path='/news' element={<News />}/>
                <Route path='/music' element={<Music />}/>
                <Route path='/settings' element={<Settings />}/>
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Content;