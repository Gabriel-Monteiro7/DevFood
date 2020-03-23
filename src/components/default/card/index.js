import React from "react";

import { StylesCard, Imagem, Body, BodyNewCard } from "./styles";
import { FaPlus } from "react-icons/all";
import { useDispatch, useSelector } from "react-redux";
import { getOneRequest } from "../../../store/modules/recipe/actions";
export default function Card({
  page,
  newCard = false,
  category = { image: "" },
  title,
  description,
  id
}) {
  const { token } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  function handleGetOne(token, id) {
    dispatch(getOneRequest(token, id));
  }
  return (
    <StylesCard>
      {newCard ? (
        <BodyNewCard>
          <FaPlus size={50} />
          <span
            className="link"
            onClick={() => {
              handleGetOne(token, null);
            }}
          >
            Adicionar Receita
          </span>
        </BodyNewCard>
      ) : (
        <>
          <Imagem image={`url(${category.image})`}>
            <span>
              {title.length > 70 ? title.substring(0, 70) + "..." : title}
            </span>
          </Imagem>
          <Body>
            <span className="categoria">{category.name}</span>
            <p>
              {description.length > 200
                ? description.substring(0, 205) + "..."
                : description}
            </p>
            {page === "receitas" ? (
              <span
                className="link"
                onClick={() => {
                  handleGetOne(token, { update: false, value: id });
                }}
              >
                Ver Receita
              </span>
            ) : (
              <span
                className="link"
                onClick={() => {
                  handleGetOne(token, { update: true, value: id });
                }}
              >
                Editar
              </span>
            )}
          </Body>
        </>
      )}
    </StylesCard>
  );
}
