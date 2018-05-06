import { FETCH_DATA_REQUEST, API_URL } from "../constants";
import fetch from "isomorphic-fetch";

export const refreshGif = () => (dispatch) => {
  fetch(API_URL).then(response => response.json()).then(images =>
    dispatch({
      type: FETCH_DATA_REQUEST,
      payload: images.data.image_original_url
    })
  );
};
