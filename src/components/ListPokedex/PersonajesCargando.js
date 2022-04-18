import React from "react";
import { Grid, Segment, Placeholder, Loader } from "semantic-ui-react";
const PersonajesCargando = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div style={{ position: "absolute" }}>
        <Loader active inline />
      </div>
      <Placeholder fluid>
        <div style={{ margin: "800px" }}>
          <Placeholder.Paragraph>
            <Placeholder.Line />
          </Placeholder.Paragraph>
        </div>
        <Placeholder.Paragraph>
          <Placeholder.Line />
        </Placeholder.Paragraph>
      </Placeholder>
    </div>
  );
};

export default PersonajesCargando;
