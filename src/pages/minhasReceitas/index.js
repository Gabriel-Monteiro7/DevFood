import React from "react";

import Title from "../../styles/title";
import Section from "../../components/default/section/SectionDefault";
import Card from "../../components/default/card";
export default function MinhasReceitas() {
  return (
    <>
      <Title>
        <span>Minhas Receitas</span>
      </Title>
      <Section>
        <Card page={"minhas-receitas"}/>
        <Card page={"minhas-receitas"}/>
        <Card page={"minhas-receitas"}/>
        <Card novo={true}/>
      </Section>
    </>
  );
}
