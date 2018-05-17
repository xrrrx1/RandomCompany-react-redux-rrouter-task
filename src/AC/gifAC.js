import { FETCH_DATA_REQUEST, FETCH_DATA_RECEIVE, API_URL } from "../constants";
// import fetch from "isomorphic-fetch";
import axios from "axios";

// export const refreshGif = () => (dispatch) => {
//   fetch(API_URL).then(response => response.json()).then(images =>
//     dispatch({
//       type: FETCH_DATA_RECEIVE,
//       payload: images.data.image_original_url
//     })
//   );
// };

// export const refreshGif = () => async dispatch => {
//   const images = await axios.get(API_URL);
//   dispatch({
//     type: FETCH_DATA_RECEIVE,
//     payload: images.data.data.image_original_url
//   });
// };

// export const refreshGif = () => dispatch => {
//   dispatch({
//     type: FETCH_DATA_REQUEST
//   });
//   setTimeout(() => {
//     fetch(API_URL).then(res => res.json()).then(images =>
//       dispatch({
//         type: FETCH_DATA_RECEIVE,
//         payload: images.data.image_original_url
//       })
//     );
//   }, 1200);
// };

export const refreshGif = () => async dispatch => {
  const images = await axios.get(API_URL);
  dispatch({
    type: FETCH_DATA_REQUEST
  });
  setTimeout(() => {
    dispatch({
      type: FETCH_DATA_RECEIVE,
      payload: images.data.data.image_original_url
    });
  }, 1400);
};
