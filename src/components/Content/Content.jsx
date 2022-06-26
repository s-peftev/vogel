import { Route, Routes } from 'react-router-dom';
import Profile from './Profile/Profile.jsx';
import Messages from './Messages/Messages.jsx';
import News from './News/News.jsx';
import Music from './Music/Music.jsx';
import Settings from './Settings/Settings.jsx';

const Content = (props) => {
  const { store } = props;
  return (
    <Routes>
      <Route path='/profile' element={<Profile store={store} />} />
      <Route path='/messages/*' element={<Messages store={store} />} />
      <Route path='/news' element={<News store={store} />} />
      <Route path='/music' element={<Music store={store} />} />
      <Route path='/settings' element={<Settings store={store} />} />
    </Routes>
  );
};

export default Content;