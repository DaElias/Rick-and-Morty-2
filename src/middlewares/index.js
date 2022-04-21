import { CHANGEPAGE, GET_PERSONAJES } from "../actions/type";
import { getPersonajesAPI, paginationPersonajesAPI } from "../api/funcionsAPI";

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
