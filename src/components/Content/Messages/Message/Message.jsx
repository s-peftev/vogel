import css from './Message.module.css';

const Message = (props) => {
  const { parrentClass, text } = props;

  return (
    <div className={`${parrentClass} ${css.message}`}>
      {text}
    </div>
  );
};

export default Message;