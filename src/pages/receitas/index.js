import React, { useState, useEffect } from "react";

import Title from "../../styles/title";
import Section from "../../components/default/section/SectionDefault";
import Card from "../../components/default/card";
import { useDispatch, useSelector } from "react-redux";
import { getAllRequest } from "../../store/modules/recipe/actions";

export default function Receitas() {
  const { token } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const { recipes } = useSelector(state => state.recipe);
  useEffect(() => {
    dispatch(getAllRequest(token));
  }, [dispatch, token]);
  return (
    <>
      <Title>
        <span>Receitas</span>
      </Title>
      <Section>
        {recipes.map((recipe, indice) => {
          return (
            <Card
              page={"receitas"}
              key={indice}
              id={recipe.id}
              description={
                recipe.description
              }
              category={recipe.category}
              title={
                recipe.title
              }
            />
          );
        })}
      </Section>
    </>
  );
}
