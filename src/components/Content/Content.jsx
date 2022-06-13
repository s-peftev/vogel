import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Profile from './Profile/Profile.jsx';
import Messages from './Messages/Messages.jsx';
import News from './News/News.jsx';
import Music from './Music/Music.jsx';
import Settings from './Settings/Settings.jsx';

class Content extends React.Component {
  render() {
    const { user_info, posts, dialogs, messages } = this.props;
    return (
      <Routes>
        <Route path='/profile' element={ <Profile user_info={user_info} posts={posts}/> } />
        <Route path='/messages/*' element={<Messages dialogs={dialogs} messages={messages}/>} />
        <Route path='/news' element={<News />} />
        <Route path='/music' element={<Music />} />
        <Route path='/settings' element={<Settings />} />
      </Routes>
    );
  }
}

export default Content;