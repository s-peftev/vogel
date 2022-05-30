import Counters from './Counters/Counters.jsx';
import s from './Post.module.css';

const Post = (props) => {
    return (
      <div className={`${props.parrentClass} ${s.post}`}>
        <div className={s.photo}>
          <img src={ props.photo } alt='post avatar'></img>
        </div>
        <div className={s.body}>
          <div className={s.header}>
            <div className={s.user}>
              <h6 className={s.name}>{ props.name }</h6>
              <p className={s.login}>{ props.login }</p>
            </div>
            <p className={s.date}>{ props.date }</p>
          </div>
          <div className={s.content}>
            <p>{ props.text }</p>
          </div>
          <Counters parrentClass={s.counters} likes_count={ props.likes_count } comments_count={ props.comments_count }/>
        </div>
      </div>
    );
  }
  
  export default Post;