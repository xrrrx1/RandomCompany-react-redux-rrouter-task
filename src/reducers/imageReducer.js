import { FETCH_DATA_REQUEST } from "../constants";

const initialState = {
  image: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        image: payload
      };
    default:
      return state;
  }
}
