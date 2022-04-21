import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Home from "./containers/Home";
import Menu from "./components/Menu";
import { Container } from "semantic-ui-react";
import { getPersonajes } from "./middlewares/index";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPersonajes());
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
