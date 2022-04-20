import {
  getPersonajesAPI,
  paginationPersonajesAPI,
} from "../api/funcionsAPI";

export const GET_PERSONAJES = "@personajes/GET_PERSONAJES";
export const CHANGEPAGE = "@personajes/CHANGEPAGE";

export const getPersonajes = () => async (dispatch) => {
  const personajes = await getPersonajesAPI();
  dispatch({
    type: GET_PERSONAJES,
    payload: personajes,
  });
};



export const getPersonajesPage = (page) => async (dispatch) => {
  const newPagePersonajes = await paginationPersonajesAPI(page);
  dispatch({
    type: CHANGEPAGE,
    payload: newPagePersonajes,
  });
};

// export const setPersonajes = (payload) => ({
//   type: SET_PERSONAJES,
//   payload,
// });
