import React from "react";
import { FaBars } from "react-icons/all";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { singOut } from "../../../store/modules/auth/actions";
import { getOneRequest } from "../../../store/modules/recipe/actions";
import { Nav, Image } from "./styles";
import swal from "sweetalert";

export default function NavBar() {
  let { user } = useSelector((state) => state.user);
  let { signed, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  function handleSingOut() {
    swal({
      title: "Tem certeza que deseja sair ?",
      buttons: { false: "Cancelar", true: "sair" },
    }).then((willDelete) => {
      if (willDelete === "true") {
        dispatch(singOut());
      }
    });
  }
  function handleGetOne(token, id) {
    dispatch(getOneRequest(token, id));
  }
  return (
    <Nav className="navbar navbar-expand-lg">
      <div className="container-fluid px-md-5 px-2">
        <Link className="navbar-brand" to="/receitas">
          <span>DEV</span>food
        </Link>
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
        {signed && (
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav w-100">
              <li className="nav-item">
                <Link className="nav-link" to="/receitas">
                  Receitas
                </Link>
              </li>

              <li className="nav-item">
                <span
                  className="nav-link btn-event"
                  onClick={() => {
                    handleGetOne(token, null);
                  }}
                >
                  Adicionar Receitas
                </span>
              </li>

              <li className="nav-item user">
                <span className="nav-link">{user.nome}</span>
                <Image src={user.image} />
                <hr />
                <span className="nav-link btn-event" onClick={handleSingOut}>
                  Sair
                </span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </Nav>
  );
}
