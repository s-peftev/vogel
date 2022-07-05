import { connect } from 'react-redux';
import Burger from './Burger.jsx';
import { toggleBurger } from '../../../redux/redusers/headerReducer';

const mapStateToProps = (state) => ({
  isActive: state.header.burger_menu.isActive,
});

const BurgerContainer = connect(mapStateToProps, { toggleBurger })(Burger);

export default BurgerContainer;
