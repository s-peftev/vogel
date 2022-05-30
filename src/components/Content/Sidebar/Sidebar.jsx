import s from './Sidebar.module.css';

const Sidebar = (props) => {
    return (
      <div className={`${props.parrentClass} ${s.sidebar}`}>
        <div className={s.header}>
          <a className={s.logo} href="/">
            <img src="https://bootstraptl.cn/preview/2022/1/qshu311796/img/logo.png" alt="logo"></img>
          </a>
        </div>
        <div className={s.nav}>
          <div className={s.item}>
            <a className={`${s.link} ${s.active}`} href="/">
              <img src="https://img.icons8.com/ios/24/000000/home--v1.png" alt=''/>
              <span>Profile</span>
            </a>
          </div>
          <div className={s.item}>
            <a className={s.link} href="/">
              <img src="https://img.icons8.com/ios/24/000000/topic.png" alt=''/>
              <span>Messages</span>
            </a>
          </div>
          <div className={s.item}>
            <a className={s.link} href="/">
              <img src="https://img.icons8.com/ios/24/000000/news.png" alt=''/>
              <span>News</span>
            </a>
          </div>
          <div className={s.item}>
            <a className={s.link} href="/">
              <img src="https://img.icons8.com/ios-glyphs/24/000000/apple-music.png" alt=''/>
              <span>Music</span>
            </a>
          </div>
          <div className={s.item}>
            <a className={s.link} href="/">
              <img src="https://img.icons8.com/ios/24/000000/settings--v1.png" alt=''/>
              <span>Settings</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
  
  export default Sidebar;