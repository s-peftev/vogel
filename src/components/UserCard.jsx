import s from './UserCard.module.css';

function UserCard() {
    return (
      <div className={s.user_card}>
        <div className={s.header}>
          <div className={s.photo}>
            <img src='https://images.squarespace-cdn.com/content/v1/5b6a682125bf02f85e285689/1546478840771-HG0TE1RQUIZGUHHY2TKW/edited.jpg?format=1000w' alt='profile avatar'></img>
          </div>
          <div className={s.name}>
            <h6 className={s.user_name}>Gustav Header</h6>
            <div className={s.login}>@gustav_header</div>
          </div>
        </div>
        <div className={s.body}>
          <div className={s.info}>
            <span className={s.key}>Birthday: </span>
            <span className={s.value}>25.05.1986</span>
          </div>
          <div className={s.info}>
            <span className={s.key}>City: </span>
            <span className={s.value}>Amsterdam</span>
          </div>
          <div className={s.info}>
            <span className={s.key}>Website: </span>
            <span className={s.value}>none</span>
          </div>
          <div className={s.info}>
            <span className={s.key}>About: </span>
            <span className={s.value}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit libero fuga voluptatibus ipsum. Incidunt cumque soluta adipisci, est repellendus dignissimos earum ad placeat harum libero! Consectetur dolor vero ducimus voluptas.</span>
          </div>
        </div>
      </div>
    );
  }
  
  export default UserCard;