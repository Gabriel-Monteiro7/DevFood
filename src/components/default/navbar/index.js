import React from "react";
import { Link } from "react-router-dom";

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
              <Link className="nav-link" to="/receitas">
                Receitas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/minhas-receitas">
                Minhas receitas
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link " to="/adicionar-receita">
                Adicionar receitas
              </Link>
            </li>

            <li className="nav-item user">
              <Link className="nav-link" to="/receitas">
                Nome da Silva
              </Link>
              <img src="https://receitas.devari.com.br/docs/user/DEVfood_user2_h1pK2NU.jpg" />
              <hr />
              <Link className="nav-link" to="/">
                Sair
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </StylesNavBar>
  );
}
