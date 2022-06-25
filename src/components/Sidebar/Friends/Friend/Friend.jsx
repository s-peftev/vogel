import css from './Friend.module.css';

const Friend = (props) => {
  const { name, photo } = props;
  return (
    <div className={css.friend} >
      <div className={css.photo} >
        <img src={photo} alt='' />
      </div>
      <h3 className={css.name} >
        {name}
      </h3>
    </div>
  );
};

export default Friend;