import React from "react";

import { StylesCard, Imagem, Body } from "./styles";
import { Link } from "react-router-dom";

export default function Card({ page }) {
  return (
    <StylesCard>
      <Imagem>
        <span>Pizza</span>
      </Imagem>
      <Body>
        <span>Calabresa</span>
        <p>
          dfgdfgggggggggggggggasdasdasggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg
          dfgdfgdfgdfgdfgdfgdf{" "}
        </p>
        {page === "receitas" ? (
          <Link to={"/descricao"}>Ver Receita</Link>
        ) : (
          <Link to={"/editar"}>Editar</Link>
        )}
      </Body>
    </StylesCard>
  );
}
