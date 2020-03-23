import React, { useEffect } from "react";

import Title from "../../styles/title";
import Section from "../../components/default/section/SectionDefault";
import Card from "../../components/default/card";
import { useDispatch, useSelector } from "react-redux";
import { getMyRecipesRequest } from "../../store/modules/recipe/actions";
export default function MinhasReceitas() {
  const { token } = useSelector(state => state.auth);
  const { user } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const recipes = useSelector(state => state.recipe.myRecipes);
  useEffect(() => {
    dispatch(getMyRecipesRequest(token, user.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Title>
        <span>Minhas Receitas</span>
      </Title>
      <Section>
        {recipes.map((recipe, indice) => {
          return (
            <Card
              page={"minhas-receitas"}
              key={indice}
              id={recipe.id}
              description={recipe.description}
              category={recipe.category}
              title={recipe.title}
            />
          );
        })}
        <Card newCard={true} />
      </Section>
    </>
  );
}
