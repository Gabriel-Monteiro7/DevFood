import { Switch, Route, Redirect } from "react-router-dom";
import React from "react";
import Receitas from "../pages/receitas";
import Descricao from "../pages/descricao";
import MinhasReceitas from "../pages/minhasReceitas";

export default function Routes(props) {
  return (
    <Switch>
      <Route path="/receitas" component={Receitas} exact>
        {props.children}
      </Route>
      <Route path="/minhas-receitas" component={MinhasReceitas} exact>
        {props.children}
      </Route>
      <Route path="/descricao" component={Descricao} exact>
        {props.children}
      </Route>
      <Route path="*">
        <Redirect to="/receitas" />
      </Route>
    </Switch>
  );
}
