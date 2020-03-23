import React, { useEffect } from "react";

import Title from "../../styles/title";
import Section from "../../components/default/section/SectionDefault";
import { FaArrowLeft } from "react-icons/all";
import history from "../../service/history";

import {
  CardDescricao,
  ImagemDescricao,
  BodyDescricao
} from "../../components/default/card/styles";
import { useSelector } from "react-redux";

export default function Descricao() {
  const { description, title, category } = useSelector(
    state => state.recipe.selectedRecipe
  );
  // if (category === undefined) {
  //   history.push("/receitas");
  // }
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
          <ImagemDescricao image={`url(${category.image || ""})`} />
          <BodyDescricao>
            <span>Descrição</span>
            <p>{description}</p>
          </BodyDescricao>
        </CardDescricao>
      </Section>
    </>
  );
}
