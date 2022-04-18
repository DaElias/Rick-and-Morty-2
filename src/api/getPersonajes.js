import axiosIntance from "./config";

const getPersonajes = (limit = 151) => axiosIntance.get("character/");


export { getPersonajes };
