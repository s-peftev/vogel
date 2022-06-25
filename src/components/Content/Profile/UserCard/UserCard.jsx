import css from './UserCard.module.css';

const UserCard = (props) => {
  const { user_info } = props;

  return (
    <div className={css.user_card}>
      <div className={css.header}>
        <div className={css.photo}>
          <img src={user_info.photo} alt='profile avatar'></img>
        </div>
        <div className={css.name}>
          <h6 className={css.user_name}>{user_info.name}</h6>
          <p className={css.login}>{user_info.login}</p>
        </div>
      </div>
      <div className={css.body}>
        <p className={css.info}>
          <span className={css.key}>Birthday: </span>
          <span className={css.value}>{user_info.birthday}</span>
        </p>
        <p className={css.info}>
          <span className={css.key}>City: </span>
          <span className={css.value}>{user_info.city}</span>
        </p>
        <p className={css.info}>
          <span className={css.key}>Website: </span>
          <span className={css.value}>{user_info.website}</span>
        </p>
        <p className={css.info}>
          <span className={css.key}>About: </span>
          <span className={css.value}>{user_info.about}</span>
        </p>
      </div>
    </div>
  );
};

export default UserCard;