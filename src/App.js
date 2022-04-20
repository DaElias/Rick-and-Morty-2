import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Home from "./containers/Home";
import Menu from "./components/Menu";
import { Container } from "semantic-ui-react";
import { getPersonajes } from "./actions/type";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPersonajes());
  }, []);

  return (
    <>
      <Menu />
      <Container>
        <Home />
      </Container>
    </>
  );
};

export default App;
