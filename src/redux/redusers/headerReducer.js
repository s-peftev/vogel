const ACTIONS = {
    TOGGLE_BURGER: 'TOGGLE_BURGER',
};

const initialState = {
    burger_menu: {
        isActive: false,
    }
};

const headerReducer = (state = initialState, action) => {
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