import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Profile from './Profile/Profile.jsx';
import Messages from './Messages/Messages.jsx';
import News from './News/News.jsx';
import Music from './Music/Music.jsx';
import Settings from './Settings/Settings.jsx';

class Content extends React.Component {
  render() {
    const { state, handlers } = this.props;
    return (
      <Routes>
        <Route path='/profile' element={ <Profile state={ state.profilePage }/> } />
        <Route path='/messages/*' element={<Messages state={ state.messagesPage } handlers={ handlers.messagesPage } />} />
        <Route path='/news' element={<News />} />
        <Route path='/music' element={<Music />} />
        <Route path='/settings' element={<Settings />} />
      </Routes>
    );
  }
}

export default Content;