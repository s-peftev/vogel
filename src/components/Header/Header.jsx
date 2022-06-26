import { NavLink } from 'react-router-dom';
import BurgerContainer from './Burger/BurgerContainer.jsx';
import s from './Header.module.css';

const Header = (props) => {
  const { store } = props;

  return (
    <div className={s.header}>
      <NavLink className={s.logo} to="/">
        <img src='https://logodix.com/logo/64439.png' alt="logo"></img>
      </NavLink>
      <div className={s.burger}>
        <BurgerContainer store={store} />
      </div>
    </div>
  );
};

export default Header;