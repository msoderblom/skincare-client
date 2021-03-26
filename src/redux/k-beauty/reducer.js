import * as actionTypes from "./types";

const initState = {
  brands: null,
  resellers: null,
  loading: false,
  getAllBrandsError: null,
  getAllResellersError: null,
};

const kBeautyReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_BRANDS_REQUEST:
      return {
        ...state,
        loading: true,
        getAllBrandsError: null,
      };
    case actionTypes.GET_ALL_BRANDS_SUCCESS:
      console.log("Payload in reducer", action.payload);

      return {
        ...state,
        loading: false,
        brands: action.payload,
      };
    case actionTypes.GET_ALL_BRANDS_FAILURE:
      console.log("error from reducer: ", action.error);
      return {
        ...state,
        loading: false,
        getAllBrandsError: action.error,
      };

    // GET ALL RESELLERS
    case actionTypes.GET_ALL_RESELLERS_REQUEST:
      return {
        ...state,
        loading: true,
        getAllResellersError: null,
      };
    case actionTypes.GET_ALL_RESELLERS_SUCCESS:
      console.log("Payload in reducer", action.payload);

      return {
        ...state,
        loading: false,
        resellers: action.payload,
      };
    case actionTypes.GET_ALL_RESELLERS_FAILURE:
      console.log("error from reducer: ", action.error);
      return {
        ...state,
        loading: false,
        getAllResellersError: action.error,
      };

    default:
      return state;
  }
};

export default kBeautyReducer;
