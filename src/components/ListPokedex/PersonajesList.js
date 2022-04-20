import React from "react";
import PersonajesCard from "./PersonajesCard";
import { Grid } from "semantic-ui-react";
import PersonajesCargando from "../ListPokedex/PersonajesCargando";

const PersonajesList = ({ listPersonajes = [], show = false }) => {
  return (
    <>
      <h2>Lista de Personajes</h2>
      {show ? (
        <Grid className="PokemonList">
          {listPersonajes.map((personaje, key) => (
            <PersonajesCard personaje={personaje} key={key} />
          ))}
        </Grid>
      ) : (
        <PersonajesCargando />
      )}
    </>
  );
};

export default PersonajesList;
