import React from "react";

import Title from "../../styles/title";
import Section from "../../components/default/section/SectionDefault";
import { FaArrowLeft } from "react-icons/all";
import history from "../../service/history";
import {
  CardDescricao,
  ImagemDescricao,
  BodyDescricao
} from "../../components/default/card/styles";
export default function Descricao() {
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
        <span>Descrição</span>
      </Title>
      <Section>
        <CardDescricao>
          <ImagemDescricao />
          <BodyDescricao>
            <span>Descrição</span>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
            </p>
          </BodyDescricao>
        </CardDescricao>
      </Section>
    </>
  );
}
