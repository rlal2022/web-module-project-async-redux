import axios from "axios";

export const FETCHING_DEFAULT = "FETCHING_DEFAULT";
export const FETCHING_ITEMS = "FETCHING_ITEMS";
export const FETCHING_ITEMS_SUCCESS = "FETCHING_ITEMS_SUCCESS";
export const FETCHING_ITEMS_ERROR = "FETCHING_ITEMS_ERROR";

export const getItems = () => (dispatch) => {
  dispatch(setIsFetching(true));
  axios
    .get("https://fakestoreapi.com/products")
    .then((res) => {
      dispatch(fetchingSuccess(res.data));
    })
    .catch((err) => dispatch(fetchingError(err)));
};

export const setIsFetching = (isFetching) => {
  return { type: FETCHING_ITEMS, payload: isFetching };
};

export const fetchingSuccess = (item) => {
  return { type: FETCHING_ITEMS_SUCCESS, payload: item };
};

export const fetchingError = (error) => {
  return { type: FETCHING_ITEMS_ERROR, payload: error };
};
