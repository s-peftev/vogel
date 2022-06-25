import css from './NewPost.module.css';

const NewPost = (props) => {
  return (
    <div className={css.new_post}>
      <textarea className={css.textarea} placeholder='What`s new?'></textarea>
      <button className={css.button}>Post</button>
    </div>
  );
};

export default NewPost;