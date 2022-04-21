import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PersonajesList from "../components/ListPokedex/PersonajesList";
import { getPersonajesPage } from "../middlewares";
import {  Pagination } from "semantic-ui-react";
// import {  } from "../actions/type";
const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector(({ list, totalPage }) => ({
    list,
    totalPage,
  }));
  const [show, setShow] = useState(true);

  const handlePage = async (e, payload) => {
    const pagination = payload.activePage;
    //* Cambia de pagina a los personajes
    dispatch(getPersonajesPage(pagination));
    setShow(false);
    setTimeout(() => setShow(true), 500);
  };

  return (
    <>
      <PersonajesList listPersonajes={state.list} show={show} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "20px 0px 0px 20px",
        }}
      >
        <Pagination
          defaultActivePage={1}
          totalPages={state.totalPage}
          onPageChange={handlePage}
        />
      </div>
    </>
  );
};

export default Home;
