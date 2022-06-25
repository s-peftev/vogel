import { NavLink } from 'react-router-dom';
import Burger from './Burger/Burger.jsx';
import s from './Header.module.css';

const Header = (props) => {
  const { state, dispatch } = props;

  return (
    <div className={s.header}>
      <NavLink className={s.logo} to="/">
        <img src='https://logodix.com/logo/64439.png' alt="logo"></img>
      </NavLink>
      <div className={s.burger}>
        <Burger state={state.burger_menu} dispatch={dispatch} />
      </div>
    </div>
  );
};

export default Header;