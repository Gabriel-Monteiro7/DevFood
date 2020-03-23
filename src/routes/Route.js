import React from "react";
import { Route, Redirect } from "react-router-dom";

import { store } from "../store";

export default function RouteWrapper({
  component: Component,
  isPrivate = false,
  description = false,
  ...rest
}) {
  const { signed } = store.getState().auth;
  const { selectedRecipe } = store.getState().recipe;
  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }
  if (signed && !isPrivate) {
    return <Redirect to="/receitas" />;
  } else if (selectedRecipe === null && description) {
    return <Redirect to="/receitas" />;
  }
  return <Route {...rest} render={props => <Component {...props} />} />;
}
