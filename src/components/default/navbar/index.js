import React from "react";
// import { Link } from "react-router-dom";

import StylesNavBar from "./styles";
import { FaBars, FaCanadianMapleLeaf } from "react-icons/all";
export default function NavBar() {
  return (
    <StylesNavBar className="navbar navbar-expand-lg">
      <div className="container-fluid px-md-5 px-2">
        <a className="navbar-brand" to="/">
          <span>DEV</span>food
        </a>
        <button
          className="navbar-toggler align-self-end"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <FaBars />
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav w-100">
            <li className="nav-item">
              <a className="nav-link" to="/">
                Receitas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" to="/cadastro">
                Minhas receitas
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link " to="/cadastro">
                Adicionar receitas
              </a>
            </li>

            <li className="nav-item user">
              <a className="nav-link" to="/cadastro">
                Nome da Silva
              </a>
              <img src='https://receitas.devari.com.br/docs/user/DEVfood_user2_h1pK2NU.jpg'/>
              <hr />
              <a className="nav-link" to="/cadastro">
                Sair
              </a>
            </li>
          </ul>
        </div>
      </div>
    </StylesNavBar>
  );
}
