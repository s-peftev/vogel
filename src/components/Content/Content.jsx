import { Route, Routes } from 'react-router-dom';
import Profile from './Profile/Profile.jsx';
import Messages from './Messages/Messages.jsx';
import News from './News/News.jsx';
import Music from './Music/Music.jsx';
import Settings from './Settings/Settings.jsx';
import UsersContainer from './Users/UsersContainer.jsx';

const Content = () => {
  return (
    <Routes>
      <Route path='/profile' element={<Profile />} />
      <Route path='/messages/*' element={<Messages />} />
      <Route path='/news' element={<News />} />
      <Route path='/music' element={<Music />} />
      <Route path='/settings' element={<Settings />} />
      <Route path='/users' element={<UsersContainer />} />
    </Routes>
  );
};

export default Content;