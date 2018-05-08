import { FETCH_DATA_REQUEST, API_URL } from "../constants";
// import fetch from "isomorphic-fetch";
import axios from "axios";

// export const refreshGif = () => (dispatch) => {
//   fetch(API_URL).then(response => response.json()).then(images =>
//     dispatch({
//       type: FETCH_DATA_REQUEST,
//       payload: images.data.image_original_url
//     })
//   );
// };

export const refreshGif = () => async dispatch => {
  const images = await axios.get(API_URL);
  dispatch({
    type: FETCH_DATA_REQUEST,
    payload: images.data.data.image_original_url
  });
};
