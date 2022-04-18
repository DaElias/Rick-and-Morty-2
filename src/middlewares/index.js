import { SET_PERSONAJES } from "../actions/type";

const logActions = (store) => (next) => (actionInfo) => {
  const { type } = actionInfo.action;
  if (type === SET_PERSONAJES) {
    next(actionInfo);
  } else {
    throw Error("Error reducer");
  }
};

export default logActions;
