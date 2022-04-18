import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPersonajes } from "../actions";
import { getPersonajes } from "../api/getPersonajes";
import PersonajesList from "../components/ListPokedex/PersonajesList";
import { Pagination } from "semantic-ui-react";

const Home = () => {
  const dispatch = useDispatch();
  const listPersonajes = useSelector((state) => state.list);
  const [show, setShow] = useState(true);
  // const [statePersonajes, setStatePersonajes] = useState([]);

  // console.log(listPersonajes);
  useEffect(() => {
    getPersonajes()
      .then((res) => {
        // console.log(res);
        dispatch(setPersonajes(res.data.results));
        // setStatePersonajes(res.data.results);
      })
      .catch((e) => console.log(e));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePage = async (e, payload) => {
    // console.log("payload", payload.activePage);
    const pagination = payload.activePage;
    await axios
      .get(`https://rickandmortyapi.com/api/character/?page=${pagination}`)
      .then((res) => {
        dispatch(setPersonajes(res.data.results));
        setShow(false);
        setTimeout(() => setShow(true), 500);
        // setStatePersonajes(res.data.results);
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <PersonajesList listPersonajes={listPersonajes} show={show} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "20px 0px 0px 20px",
        }}
      >
        <Pagination
          defaultActivePage={1}
          totalPages={42}
          onPageChange={handlePage}
        />
      </div>
    </>
  );
};

export default Home;
