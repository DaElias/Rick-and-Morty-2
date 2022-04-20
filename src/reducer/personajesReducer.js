import { GET_PERSONAJES, CHANGEPAGE } from "../actions/type";
const initialState = {
  list: [],
  totalPage: 1,
  totalPersonajes: 0,
  favorite: [],
};

const personajesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PERSONAJES:
      // * Solo se inicia al correr la app
      return {
        ...state,
        totalPage: payload.pages,
        list: payload.results,
        totalPersonajes: payload.count,
      };

    case CHANGEPAGE:
      return { ...state, totalPage: payload.pages, list: payload.results };
    default:
      return { ...state };
  }
};

export default personajesReducer;
