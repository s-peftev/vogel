import { NavLink } from 'react-router-dom';
import FriendsContainer from './Friends/FriendsContainer.jsx';
import css from './Sidebar.module.css';

const Sidebar = () => {

  return (
    <>
      <div className={css.nav}>
        <NavLink
          className={({ isActive }) => {
            return isActive ? `${css.link} ${css.active}` : css.link;
          }}
          to="/profile"
        >
          <img src="https://img.icons8.com/ios-filled/24/C9D1D9/home.png" alt='' />
          <h2>Profile</h2>
        </NavLink>

        <NavLink
          className={({ isActive }) => {
            return isActive ? `${css.link} ${css.active}` : css.link;
          }}
          to="/messages"
        >
          <img src="https://img.icons8.com/ios-filled/24/C9D1D9/chat-message--v1.png" alt='' />
          <h2>Messages</h2>
        </NavLink>

        <NavLink
          className={({ isActive }) => {
            return isActive ? `${css.link} ${css.active}` : css.link;
          }}
          to="/news"
        >
          <img src="https://img.icons8.com/ios-filled/24/C9D1D9/news.png" alt='' />
          <h2>News</h2>
        </NavLink>

        <NavLink
          className={({ isActive }) => {
            return isActive ? `${css.link} ${css.active}` : css.link;
          }}
          to="/music"
        >
          <img src="https://img.icons8.com/ios-glyphs/24/C9D1D9/apple-music.png" alt='' />
          <h2>Music</h2>
        </NavLink>

        <NavLink
          className={({ isActive }) => {
            return isActive ? `${css.link} ${css.active}` : css.link;
          }}
          to="/settings"
        >
          <img src="https://img.icons8.com/ios-filled/24/C9D1D9/settings--v1.png" alt='' />
          <h2>Settings</h2>
        </NavLink>

        <NavLink
          className={({ isActive }) => {
            return isActive ? `${css.link} ${css.active}` : css.link;
          }}
          to="/users"
        >
          <img src="https://img.icons8.com/ios-filled/24/C9D1D9/find-user-male.png" alt='' />
          <h2>Users</h2>
        </NavLink>
      </div>
      <div className={css.friends}>
        <FriendsContainer />
      </div>
    </>
  );
};

export default Sidebar;