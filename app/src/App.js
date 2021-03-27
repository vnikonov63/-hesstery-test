import React from "react";
import MainPage from "./components/mainPage";
import PokemonGeneral from "./components/pokemonsGeneral";

import {
  Redirect,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exac path="/:id">
          <PokemonGeneral />
        </Route>
        <Route exac path="/">
          <MainPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
