import React from "react";

import Title from "../../styles/title";
import Section from "../../components/default/section/SectionDefault";
import FormLogin from "../../components/default/FormLogin";
export default function Login() {
  return (
    <>
      <Title>
        <span>Entre em sua conta</span>
      </Title>
      <Section>
        <FormLogin />
      </Section>
    </>
  );
}
