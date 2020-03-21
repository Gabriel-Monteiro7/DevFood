import React from "react";

import Title from "../../styles/title";
import Section from "../../components/default/section/SectionDefault";
import Card from "../../components/default/card";
export default function Receitas() {
  return (
    <>
      <Title>
        <span>Receitas</span>
      </Title>
      <Section>
        <Card page={"receitas"}/>
        <Card page={"minhas-receitas"}/>
        <Card page={"receitas"}/>
        <Card />
      </Section>
    </>
  );
}
