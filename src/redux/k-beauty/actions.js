import * as actionTypes from "./types";
import * as api from "../../api";

export const getAllBrands = () => async (dispatch) => {
  dispatch({ type: actionTypes.GET_ALL_BRANDS_REQUEST });

  try {
    const {
      data: { brands },
    } = await api.getAllBrands();

    dispatch({
      type: actionTypes.GET_ALL_BRANDS_SUCCESS,
      payload: brands,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_ALL_BRANDS_FAILURE,
      error: error?.response?.data?.error || error?.message,
    });
    console.error(error);
    console.log(error?.response?.data?.error);
  }
};

export const getAllResellers = () => async (dispatch) => {
  dispatch({ type: actionTypes.GET_ALL_RESELLERS_REQUEST });

  try {
    const {
      data: { resellers },
    } = await api.getAllResellers();

    dispatch({
      type: actionTypes.GET_ALL_RESELLERS_SUCCESS,
      payload: resellers,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_ALL_RESELLERS_FAILURE,
      error: error?.response?.data?.error || error?.message,
    });
    console.error(error);
    console.log(error?.response?.data?.error);
  }
};
