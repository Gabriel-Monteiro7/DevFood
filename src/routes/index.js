import { Switch, Redirect } from "react-router-dom";
import React from "react";
import Route from "./Route";

import Receitas from "../pages/receitas";

import Descricao from "../pages/descricao";
import MinhasReceitas from "../pages/minhasReceitas";
import AdicionarReceitas from "../pages/adicionarReceita";
import Login from "../pages/login";
export default function Routes(props) {
  return (
    <Switch>
      <Route path="/" component={Login} exact>
        {props.children}
      </Route>
      <Route path="/receitas" component={Receitas} exact isPrivate>
        {props.children}
      </Route>
      <Route path="/minhas-receitas" component={MinhasReceitas} exact isPrivate>
        {props.children}
      </Route>
      <Route
        path="/descricao"
        component={Descricao}
        exact
        isPrivate
        description={true}
      >
        {props.children}
      </Route>
      <Route
        path="/adicionar-receita"
        component={AdicionarReceitas}
        exact
        isPrivate
      >
        {props.children}
      </Route>
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
}
