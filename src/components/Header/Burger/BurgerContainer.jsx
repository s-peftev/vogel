import Burger from './Burger.jsx';
import { toggleBurgerAction } from '../../../redux/redusers/headerReducer.js';

const BurgerContainer = (props) => {
  const { store } = props;
  const state = store.getState();
  const isActive = state.header.burger_menu.isActive;

  const toggleBurger = () => {
    store.dispatch(toggleBurgerAction());
  }

  return (<Burger isActive={isActive} toggleBurger={toggleBurger}/>);
};

export default BurgerContainer;