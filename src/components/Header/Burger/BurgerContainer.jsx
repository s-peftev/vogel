import Burger from './Burger.jsx';
import { connect } from 'react-redux';
import { toggleBurgerAction } from '../../../redux/redusers/headerReducer.js';

const mapStateToProps = (state) => {
  return {
    isActive: state.header.burger_menu.isActive,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleBurger: () => {
      dispatch(toggleBurgerAction());
    },
  };
};

const BurgerContainer = connect(mapStateToProps, mapDispatchToProps)(Burger);

export default BurgerContainer;