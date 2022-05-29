function Sidebar() {
    return (
      <div className="sidebar">
        <div className="sidebar__body">
          <div className="sidebar__logo">
            <img src="https://bootstraptl.cn/preview/2022/1/qshu311796/img/logo.png" alt="logo"></img>
          </div>
          <div className="sidebar__nav">
            <a className="sidebar__link" href="/">
              <div className="sidebar__btn">Profile</div>
            </a>
            <a className="sidebar__link" href="/">
              <div className="sidebar__btn">Messages</div>
            </a>
            <a className="sidebar__link" href="/">
              <div className="sidebar__btn">News</div>
            </a>
            <a className="sidebar__link" href="/">
              <div className="sidebar__btn">Music</div>
            </a>
            <a className="sidebar__link" href="/">
              <div className="sidebar__btn">Settings</div>
            </a>
          </div>
        </div>
      </div>
    );
  }
  
  export default Sidebar;