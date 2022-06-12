import React from 'react';
import UserCard from './UserCard/UserCard.jsx';
import Posts from './Posts/Posts.jsx';
import s from './Profile.module.css';

class Profile extends React.Component {
  render() {
    const user = {
      info: {
        id: 12345,
        name: 'Gustav Header',
        login: '@gustav_header',
        birthday: '25.05.1986',
        city: 'Amsterdam',
        website: 'none',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsa quam tempore unde totam ipsum quis aspernatur et reprehenderit ad iure aliquam dicta, officia, praesentium illum cum nisi! Excepturi, a!',
        photo: 'https://images.squarespace-cdn.com/content/v1/5b6a682125bf02f85e285689/1546478840771-HG0TE1RQUIZGUHHY2TKW/edited.jpg?format=1000w',
      },
    }

    return (
      <div className={s.profile}>
        <UserCard parrentClass={s.user_card} {...user} />
        <Posts parrentClass={s.posts} />
      </div>
    );
  }
}

export default Profile;