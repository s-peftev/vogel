import css from './UserCard.module.css';

const UserCard = (props) => {
  const {
    photo,
    name,
    login,
    birthday,
    city,
    website,
    about,
  } = props;

  return (
    <div className={css.user_card}>
      <div className={css.header}>
        <div className={css.photo}>
          <img src={photo} alt='profile avatar'></img>
        </div>
        <div className={css.name}>
          <h6 className={css.user_name}>{name}</h6>
          <p className={css.login}>{login}</p>
        </div>
      </div>
      <div className={css.body}>
        <p className={css.info}>
          <span className={css.key}>Birthday: </span>
          <span className={css.value}>{birthday}</span>
        </p>
        <p className={css.info}>
          <span className={css.key}>City: </span>
          <span className={css.value}>{city}</span>
        </p>
        <p className={css.info}>
          <span className={css.key}>Website: </span>
          <span className={css.value}>{website}</span>
        </p>
        <p className={css.info}>
          <span className={css.key}>About: </span>
          <span className={css.value}>{about}</span>
        </p>
      </div>
    </div>
  );
};

export default UserCard;