import {
  FETCHING_ITEMS,
  FETCHING_ITEMS_SUCCESS,
  FETCHING_ITEMS_ERROR,
} from "../actions/actions.js";

const item = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  rating: { rate: 3.9, count: 120 },
  isFetching: false,
  error: "",
};

const initialState = {
  item: item,
  isFetching: false,
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_ITEMS:
      return {
        ...state,
        isFetching: true,
        error: "",
      };
    case FETCHING_ITEMS_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        item: action.payload,
        error: "",
      };
    }
    case FETCHING_ITEMS_ERROR:
      return {
        ...state,
        item: [],
        isFetching: false,
        error: action.payload,
      };
  }
};
