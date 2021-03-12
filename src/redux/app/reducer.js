import * as actionTypes from "./types";

const initState = {
  burgerMenu: {
    isOpen: false,
  },
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_MENU:
      const currentIsOpen = state.burgerMenu.isOpen;
      return {
        ...state,
        burgerMenu: { ...state.burgerMenu, isOpen: !currentIsOpen },
      };
    case actionTypes.SET_MENU_IS_OPEN:
      return {
        ...state,
        burgerMenu: { ...state.burgerMenu, isOpen: action.payload },
      };

    default:
      return state;
  }
};

export default userReducer;
