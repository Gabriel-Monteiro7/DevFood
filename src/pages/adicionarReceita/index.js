import React from "react";
import swal from "sweetalert";

import Title from "../../styles/title";
import Section from "../../components/default/section/SectionDefault";
import { FaArrowLeft } from "react-icons/all";
import history from "../../service/history";
import Form from "../../components/default/Form";
export default function AdicionarReceita() {
  function handleBack() {
    swal({
      title: "Tem certeza que deseja Descartar?",
      buttons: { false: "Cancelar", true: "Descartar" }
    }).then(willDelete => {
      if (willDelete === "true") {
        history.goBack();
      }
    });
  }
  return (
    <>
      <Title>
        <span className="voltar" onClick={handleBack}>
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
