import s from './NewPost.module.css';

function NewPost() {
    return (
      <div className={s.new_post}>
        <textarea className={s.textarea}></textarea>
        <button className={s.button}>Post</button>
      </div>
    );
  }
  
  export default NewPost;