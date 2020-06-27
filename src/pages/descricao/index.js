import React from "react";

import Title from "../../styles/title";
import Section from "../../components/default/section/SectionDefault";
import { FaArrowLeft } from "react-icons/all";
import history from "../../service/history";
import { useDispatch, useSelector } from "react-redux";
import { getOneRequest } from "../../store/modules/recipe/actions";

import {
  CardDescricao,
  ImagemDescricao,
  BodyDescricao,
} from "../../components/default/card/styles";
import { Icon, ButtonEdit } from "./styles";
export default function Descricao() {
  const dispatch = useDispatch();

  const { description, title, category, id } = useSelector(
    (state) => state.recipe.selectedRecipe
  );
  return (
    <>
      <Title>
        <span
          className="voltar"
          onClick={() => {
            history.goBack();
          }}
        >
          <FaArrowLeft size={9} />
          Voltar
        </span>
        <span className="descricao">{title}</span>
      </Title>
      <Section>
        <CardDescricao>
          <ImagemDescricao image={category.image || ""} />
          <BodyDescricao>
            <span>Descrição</span>
            <p>{description}</p>
            <ButtonEdit
              title={"Editar"}
              onClick={() => {
                dispatch(getOneRequest(null, { update: true, value: id }));
              }}
            >
              <Icon />
            </ButtonEdit>
          </BodyDescricao>
        </CardDescricao>
      </Section>
    </>
  );
}
