import Sidebar from './Sidebar/Sidebar.jsx';
import Profile from './Profile/Profile.jsx';
import s from './Content.module.css';

function Content() {
    return (
      <div className={s.content}>
        <div className={s.container}>
          <Sidebar parrentClass={s.sidebar} />
          <Profile parrentClass={s.profile} /> 
        </div>
      </div>
    );
  }
  
  export default Content;