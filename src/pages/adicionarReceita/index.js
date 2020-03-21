import React from "react";

import Title from "../../styles/title";
import Section from "../../components/default/section/SectionDefault";
import { FaArrowLeft } from "react-icons/all";
import history from "../../service/history";
import Form from "../../components/default/Form";
export default function AdicionarReceita() {
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
        <span>Adicionar Receita</span>
      </Title>
      <Section>
        <Form />
      </Section>
    </>
  );
}
