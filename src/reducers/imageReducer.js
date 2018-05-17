import { FETCH_DATA_REQUEST, FETCH_DATA_RECEIVE } from "../constants";

const initialState = {
  image: null,
  isLoading: false
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_DATA_RECEIVE:
      return {
        ...state,
        image: payload,
        isLoading: false
      };
    default:
      return state;
  }
}
