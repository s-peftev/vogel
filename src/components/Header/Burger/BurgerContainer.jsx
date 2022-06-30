import { connect } from 'react-redux';
import Burger from './Burger.jsx';
import { toggleBurgerAction } from '../../../redux/redusers/headerReducer';

const mapStateToProps = (state) => ({
  isActive: state.header.burger_menu.isActive,
});

const mapDispatchToProps = (dispatch) => ({
  toggleBurger: () => {
    dispatch(toggleBurgerAction());
  },
});

const BurgerContainer = connect(mapStateToProps, mapDispatchToProps)(Burger);

export default BurgerContainer;
