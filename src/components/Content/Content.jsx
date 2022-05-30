import Sidebar from './Sidebar/Sidebar.jsx';
import Profile from './Profile/Profile.jsx';
import s from './Content.module.css';

function Content() {
    return (
      <div className={s.content}>
        <div className={s.container}>
          <div className={s.sidebar}>
            <Sidebar />
          </div>
          <div className={s.profile}>
            <Profile />
          </div>  
        </div>
      </div>
    );
  }
  
  export default Content;