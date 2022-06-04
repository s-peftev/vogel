import React from 'react';
import s from './Sidebar.module.css';

class Sidebar extends React.Component {
  render() {
    const { parrentClass } = this.props;

    return (
      <div className={`${ parrentClass } ${s.sidebar}`}>
        <div className={s.header}>
          <a className={s.logo} href="/profile">
            <img src='https://thumbs.dreamstime.com/z/set-letter-s-logotype-technology-digital-abstract-dot-connection-vector-logo-128608790.jpg' alt="logo"></img>
          </a>
        </div>
        <div className={s.nav}>
          <div className={s.item}>
            <a className={`${s.link} ${s.active}`} href="/profile">
              <img src="https://img.icons8.com/ios/24/000000/home--v1.png" alt=''/>
              <span>Profile</span>
            </a>
          </div>
          <div className={s.item}>
            <a className={s.link} href="/messages">
              <img src="https://img.icons8.com/ios/24/000000/topic.png" alt=''/>
              <span>Messages</span>
            </a>
          </div>
          <div className={s.item}>
            <a className={s.link} href="/news">
              <img src="https://img.icons8.com/ios/24/000000/news.png" alt=''/>
              <span>News</span>
            </a>
          </div>
          <div className={s.item}>
            <a className={s.link} href="/music">
              <img src="https://img.icons8.com/ios-glyphs/24/000000/apple-music.png" alt=''/>
              <span>Music</span>
            </a>
          </div>
          <div className={s.item}>
            <a className={s.link} href="/settings">
              <img src="https://img.icons8.com/ios/24/000000/settings--v1.png" alt=''/>
              <span>Settings</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
  
export default Sidebar;