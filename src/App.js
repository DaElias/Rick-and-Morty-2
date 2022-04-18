import React from "react";
import { createStore, compose, applyMiddleware } from "redux";
import logActions from "./middlewares";
import { Provider } from "react-redux";
import personajesReducer from "./reducer/personajesReducer";
import Home from "./containers/Home";
import { Container } from "semantic-ui-react";
import Menu from "./components/Menu";

const composeEnhacers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logActions)
);

const store = createStore(personajesReducer, composeEnhacers);

const App = () => (
  <Provider store={store}>
    <Menu />
    <Container>
      <Home />
    </Container>
  </Provider>
);

export default App;
