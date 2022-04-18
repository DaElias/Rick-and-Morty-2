import { SET_PERSONAJES } from "../actions/type";
const initialState = {
  list: [],
};

const personajesReducer = (state = initialState, acction) => {
  switch (acction.type) {
    case SET_PERSONAJES:
      return { ...state, list: acction.payload };
    default:
      return { ...state };
  }
};

export default personajesReducer;
