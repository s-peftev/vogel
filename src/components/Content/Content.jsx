import React from 'react';
import Sidebar from './Sidebar/Sidebar.jsx';
import Profile from './Profile/Profile.jsx';
import s from './Content.module.css';

class Content extends React.Component {
  render() {
    return (
      <div className={s.content}>
        <div className={s.container}>
          <Sidebar parrentClass={s.sidebar} />
          <Profile parrentClass={s.main} /> 
        </div>
      </div>
    );
  }
}

export default Content;