import axios from "axios";
export const FETCHING_ITEMS = "FETCHING_ITEMS";
export const FETCHING_ITEMS_SUCCESS = "FETCHING_ITEMS_SUCCESS";
export const FETCHING_ITEMS_ERROR = "FETCHING_ITEMS_ERROR";

export const getItems = () => (dispatch) => {
  dispatch(setIsFetching(true));
  axios
    .get("https://fakestoreapi.com/products")
    .then((res) => {
      // console.log(res.data);
      const items = res.data;
      dispatch(fetchingSuccess(items));
    })
    .catch((err) => console.error(err));
  dispatch(fetchingError);
};

const setIsFetching = (isFetching) => {
  return { type: FETCHING_ITEMS, payload: isFetching };
};

const fetchingSuccess = (items) => {
  return { type: FETCHING_ITEMS_SUCCESS, payload: items };
};

const fetchingError = (error) => {
  return { type: FETCHING_ITEMS_ERROR, payload: error };
};
