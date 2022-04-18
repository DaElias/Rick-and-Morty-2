import axios from "axios";

const URL = process.env.REACT_APP_RICK_MORTY_API || "";

const axiosIntance = axios.create({
  baseURL: URL,
});

export default axiosIntance;
