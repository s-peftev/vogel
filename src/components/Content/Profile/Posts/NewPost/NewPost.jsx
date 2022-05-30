import s from './NewPost.module.css';

const NewPost = (props) => {
    return (
      <div className={`${props.parrentClass} ${s.new_post}`}>
        <textarea className={s.textarea} placeholder='What`s new?'></textarea>
        <button className={s.button}>Post</button>
      </div>
    );
  }
  
  export default NewPost;