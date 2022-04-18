import React from "react";
import PersonajesCard from "./PersonajesCard";
import { Grid, Segment, Placeholder } from "semantic-ui-react";
import PersonajesCargando from "../ListPokedex/PersonajesCargando";
const PersonajesList = ({ listPersonajes = [], show = false }) => {
  console.log("PersonajesList");

  return (
    <>
      <h2>Lista de Personajes</h2>
      {
        show ? (
          <Grid className="PokemonList">
            {listPersonajes.map((personaje, key) => (
              <PersonajesCard personaje={personaje} key={key} />
            ))}
          </Grid>
        ) : (
          <PersonajesCargando />
        )
        // <div style={{ backgroundColor: "black", height: "600px" }}>
        //   <Loader size="massive">Loading</Loader>
        // </div>
      }
    </>
  );
};

export default PersonajesList;
