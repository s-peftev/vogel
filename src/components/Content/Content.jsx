import { Route, Routes } from 'react-router-dom';
import Profile from './Profile/Profile.jsx';
import Messages from './Messages/Messages.jsx';
import News from './News/News.jsx';
import Music from './Music/Music.jsx';
import Settings from './Settings/Settings.jsx';

const Content = (props) => {
  const { state, dispatch } = props;
  return (
    <Routes>
      <Route path='/profile' element={<Profile state={state.profilePage} />} />
      <Route path='/messages/*' element={<Messages state={state.messagesPage} dispatch={dispatch} />} />
      <Route path='/news' element={<News />} />
      <Route path='/music' element={<Music />} />
      <Route path='/settings' element={<Settings />} />
    </Routes>
  );
};

export default Content;