import UserCard from './UserCard/UserCard.jsx';
import css from './Users.module.css';

const fetchedUsers = [
  {
    id: 1,
    name: 'Emma Watson',
    login: '@emma-watson',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Emma_Watson_2013.jpg',
    followed: true,
    about: 'she/her'
  },
  {
    id: 2,
    name: 'Carlo Ancelotti',
    login: '@mrancelotti',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Carlo_Ancelotti_2016_%28cropped%29.jpg/640px-Carlo_Ancelotti_2016_%28cropped%29.jpg',
    followed: true,
    about: 'Real Madrid'
  },
  {
    id: 3,
    name: 'Avril Lavigne',
    login: '@avrillavigne',
    photo: 'https://upload.wikimedia.org/wikipedia/ru/thumb/d/dd/Love_Sux.jpg/800px-Love_Sux.jpg',
    followed: false,
    about: 'My new album “Love Sux” is out now and I`m on tour'
  },
  {
    id: 4,
    name: 'Dalai Lama',
    login: '@dalailama14',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Dalailama1_20121014_4639.jpg',
    followed: false,
    about: 'Where ignorance is our master, there is no possibility of real peace'
  }
]

const Users = (props) => {
  const {
    users,
    setUsers,
    followUser,
    unfollowUser,
  } = props;

  if (users.length === 0) {
    setUsers(fetchedUsers);
  }
  return (
    <div>
      {users.map((user) =>
        <div className={css.user_card} key={user.id}>
          <UserCard
            key={user.id}
            {...user}
            followUser={followUser}
            unfollowUser={unfollowUser}
          />
        </div>
      )}
    </div>
  );
};

export default Users;