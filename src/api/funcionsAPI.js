import axiosIntance from "./config";

export const getPersonajesAPI = async () => {
  const res = await axiosIntance.get("character/");
  const {
    results,
    info: { pages,count },
  } = res.data;
  return { results, pages,count };
};

export const paginationPersonajesAPI = async (page) => {
  const res = await axiosIntance.get(`character/?page=${page}`);
  const {
    results,
    info: { pages },
  } = res.data;
  return { results, pages };
};


