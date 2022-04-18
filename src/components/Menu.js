import React from "react";
import { Menu as SemanticMenu, Container, Image } from "semantic-ui-react";
const Menu = () => (
  <div style={{ marginBottom: "48px" }}>
    <SemanticMenu fixed="top">
      <Container>
        <SemanticMenu.Item to="/">
          <Image
            size="small"
            // src={logo}
          />
        </SemanticMenu.Item>
        <SemanticMenu.Item to="/">Home</SemanticMenu.Item>
        <SemanticMenu.Item to="/" position="right">
          Favorites
        </SemanticMenu.Item>
      </Container>
    </SemanticMenu>
  </div>
);

export default Menu;
