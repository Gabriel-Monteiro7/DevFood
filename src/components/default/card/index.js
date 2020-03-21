import React from "react";

import { StylesCard, Imagem, Body,BodyNewCard } from "./styles";
import { Link } from "react-router-dom";
import {FaPlus} from 'react-icons/all'
export default function Card({ page, novo = false }) {
  return (
    <StylesCard>
      {novo ? (
        <BodyNewCard>
          <FaPlus size={50}/>
          <a>Adicionar Receita</a>
        </BodyNewCard>
      ) : (
        <>
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
        </>
      )}
    </StylesCard>
  );
}
