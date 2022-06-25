import css from './Counters.module.css';

const Counters = (props) => {
  const { comments_count, likes_count } = props;
  return (
    <div className={css.counters}>
      <div className={css.counter}>
        <a href='/'>
          <div className={css.icon}>
            <img src='https://img.icons8.com/ios/24/C9D1D9/macbook-chat--v1.png' alt=''></img>
          </div>
        </a>
        <p>{comments_count}</p>
      </div>
      <div className={css.counter}>
        <a href='/'>
          <div className={css.icon}>
            <img src='https://img.icons8.com/ios-filled/24/C9D1D9/two-hearts.png' alt=''></img>
          </div>
        </a>
        <p>{likes_count}</p>
      </div>
    </div>
  );
};

export default Counters;