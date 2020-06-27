import React, { useEffect, useState } from "react";

import Title from "../../styles/title";
import Section from "../../components/default/section/SectionDefault";
import Card from "../../components/default/card";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllRequest,
  deleteRecipeRequest,
} from "../../store/modules/recipe/actions";
import swal from "sweetalert";
import Lottie from "react-lottie";
import load from "../../assets/load.json";
import { Icon, ButtonDelete, Load, NoProduct } from "./styles";
export default function Receitas() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: load,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const [loading, setLoading] = useState(true);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { recipes } = useSelector((state) => state.recipe);
  useEffect(() => {
    dispatch(getAllRequest(token));
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function deleteRecipe(token, recipe) {
    swal({
      title: "Tem certeza que deseja deletar?",
      buttons: { false: "Cancelar", true: "Deletar" },
    }).then((willDelete) => {
      if (willDelete === "true") {
        dispatch(deleteRecipeRequest(null, recipe));
      }
    });
  }
  return (
    <>
      <Title>
        <span>Receitas</span>
      </Title>
      {loading ? (
        <Load>
          <Lottie options={defaultOptions} />
        </Load>
      ) : (
        <Section>
          {recipes.length > 0 ? (
            recipes.map((recipe, indice) => {
              return (
                <Card
                  page={"receitas"}
                  key={indice}
                  id={recipe.id}
                  description={recipe.description}
                  category={recipe.category}
                  name={recipe.name}
                  image={recipe.image}
                >
                  <ButtonDelete
                    title={"Deletar"}
                    onClick={() => {
                      deleteRecipe(null, recipe);
                    }}
                  >
                    <Icon />
                  </ButtonDelete>
                </Card>
              );
            })
          ) : (
            <NoProduct>Não existe produtos cadastrados</NoProduct>
          )}
          {recipes.length > 0 && <Card newCard={true} />}
        </Section>
      )}
    </>
  );
}
