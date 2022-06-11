import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Sidebar.module.css';

class Sidebar extends React.Component {
  render() {
    return (
      <div className={s.nav}>
        <NavLink
          className={({ isActive }) => {
            return isActive ? `${s.link} ${s.active}` : s.link;
          }}
          to="/profile">
          <img src="https://img.icons8.com/ios-filled/24/C9D1D9/home.png" alt='' />
          <span>Profile</span>
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? `${s.link} ${s.active}` : s.link;
          }}
          to="/messages">
          <img src="https://img.icons8.com/ios-filled/24/C9D1D9/chat-message--v1.png" alt='' />
          <span>Messages</span>
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? `${s.link} ${s.active}` : s.link;
          }}
          to="/news">
          <img src="https://img.icons8.com/ios-filled/24/C9D1D9/news.png" alt='' />
          <span>News</span>
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? `${s.link} ${s.active}` : s.link;
          }}
          to="/music">
          <img src="https://img.icons8.com/ios-glyphs/24/C9D1D9/apple-music.png" alt='' />
          <span>Music</span>
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? `${s.link} ${s.active}` : s.link;
          }}
          to="/settings">
          <img src="https://img.icons8.com/ios-filled/24/C9D1D9/settings--v1.png" alt='' />
          <span>Settings</span>
        </NavLink>
      </div>
    );
  }
}

export default Sidebar;