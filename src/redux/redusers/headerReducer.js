/* eslint-disable default-param-last */
/* eslint-disable no-case-declarations */
const ACTIONS = {
  TOGGLE_BURGER: 'TOGGLE_BURGER',
};

const initialState = {
  burger_menu: {
    isActive: false,
  },
};

const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.TOGGLE_BURGER:
      const newState = { ...state };
      newState.burger_menu.isActive = !state.burger_menu.isActive;
      return newState;
    default:
      return state;
  }
};

export const toggleBurger = () => ({ type: ACTIONS.TOGGLE_BURGER });

export default headerReducer;
