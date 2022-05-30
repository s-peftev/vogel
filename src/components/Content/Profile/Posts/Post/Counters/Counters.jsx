import s from './Counters.module.css';

const Counters = (props) => {
    return (
      <div className={`${props.parrentClass} ${s.counters}`}>
        <div className={s.counter}>
          <a href='/'>
            <div className={s.icon}>
              <img src='https://img.icons8.com/ios/24/000000/macbook-chat--v1.png' alt=''></img>
            </div>
          </a>
          <p>{ props.comments_count }</p>
        </div>
        <div className={s.counter}>
          <a href='/'>
            <div className={s.icon}>
              <img src='https://img.icons8.com/ios-filled/24/000000/two-hearts.png' alt=''></img>
            </div>
          </a>
          <p>{ props.likes_count }</p>
        </div>
      </div>
    );
  }
  
  export default Counters;