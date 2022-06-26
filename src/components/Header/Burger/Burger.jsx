import s from './Burger.module.css';

const Burger = (props) => {
  const { isActive, toggleBurger } = props;

  return (
    <div
      onClick={toggleBurger}
      className={isActive ? `${s.burger} ${s.active}` : s.burger}
    >
      <span className={s.line}></span>
    </div>
  );
};

export default Burger;