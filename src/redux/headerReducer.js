const ACTIONS = {
    TOGGLE_BURGER: 'TOGGLE_BURGER',
};

const headerReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.TOGGLE_BURGER:
            state.burger_menu.isActive = state.burger_menu.isActive ? false : true;
            return state;
        default:
            return state;
    }
}

export const toggleBurgerAction = () => ({ type: ACTIONS.TOGGLE_BURGER });

export default headerReducer;