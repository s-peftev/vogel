import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Sidebar.module.css';

class Sidebar extends React.Component {
  render() {
    const { parrentClass } = this.props;

    return (
      <div className={`${ parrentClass } ${s.sidebar}`}>
        <div className={s.header}>
          <NavLink className={s.logo} to="/profile">
            <img src='https://thumbs.dreamstime.com/z/set-letter-s-logotype-technology-digital-abstract-dot-connection-vector-logo-128608790.jpg' alt="logo"></img>
          </NavLink>
        </div>
        <div className={s.nav}>
          <div className={s.item}>
            <NavLink 
              className={({ isActive }) => {
                return isActive ? `${s.link} ${s.active}` : s.link;
            }} 
              to="/profile">
                <img src="https://img.icons8.com/ios/24/000000/home--v1.png" alt=''/>
                <span>Profile</span>
            </NavLink>
          </div>
          <div className={s.item}>
            <NavLink
              className={({ isActive }) => {
                return isActive ? `${s.link} ${s.active}` : s.link;
            }} 
              to="/messages">
                <img src="https://img.icons8.com/ios/24/000000/topic.png" alt=''/>
                <span>Messages</span>
            </NavLink>
          </div>
          <div className={s.item}>
            <NavLink
              className={({ isActive }) => {
                return isActive ? `${s.link} ${s.active}` : s.link;
            }} 
              to="/news">
                <img src="https://img.icons8.com/ios/24/000000/news.png" alt=''/>
                <span>News</span>
            </NavLink>
          </div>
          <div className={s.item}>
            <NavLink
              className={({ isActive }) => {
                return isActive ? `${s.link} ${s.active}` : s.link;
            }} 
              to="/music">
                <img src="https://img.icons8.com/ios-glyphs/24/000000/apple-music.png" alt=''/>
                <span>Music</span>
            </NavLink>
          </div>
          <div className={s.item}>
            <NavLink
              className={({ isActive }) => {
                return isActive ? `${s.link} ${s.active}` : s.link;
            }} 
              to="/settings">
                <img src="https://img.icons8.com/ios/24/000000/settings--v1.png" alt=''/>
                <span>Settings</span>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}
  
export default Sidebar;