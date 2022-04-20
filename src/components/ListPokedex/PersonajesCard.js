import React from "react";
import { MAIN_COLOR, FAV_COLOR } from "../utils/constants";
import { Grid, Icon, Image, Label } from "semantic-ui-react";
import "./styles.css";
const PersonajesCard = ({ personaje }) => {
  return (
    <Grid.Column mobile={16} tablet={8} computer={4}>
      <div className="PokemonCard">
        <Icon name="favorite" color={FAV_COLOR} />
        <Image centered src={personaje.image} alt="Pokemon Front" />
        <h2 className="PokemonCard-title">{personaje.name}</h2>
        <Label color={MAIN_COLOR}>{personaje.species}</Label>
        <Label color={personaje.status === "Alive" ? "teal" : "red"}>
          {personaje.status}
        </Label>
      </div>
    </Grid.Column>
  );
};

export default PersonajesCard;
