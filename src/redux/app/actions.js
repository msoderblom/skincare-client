import * as actionTypes from "./types";
import * as api from "../../api";

export const setMenuIsOpen = (isOpen) => ({
  type: actionTypes.SET_MENU_IS_OPEN,
  payload: isOpen,
});
export const toggleBurgerMenu = () => ({
  type: actionTypes.TOGGLE_MENU,
});
