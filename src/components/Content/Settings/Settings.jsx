import React from 'react';
import s from './Settings.module.css';

class Settings extends React.Component {
  render() {
    const { parrentClass } = this.props;
    return (
      <main className={`${parrentClass} ${s.settings}`}>
        Settings HERE
      </main>
    );
  }
}
  
export default Settings;