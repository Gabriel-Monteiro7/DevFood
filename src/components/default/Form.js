import { Input } from "@rocketseat/unform";
import React, { useEffect, useState } from "react";
import { FaCaretDown, GoTrashcan } from "react-icons/all";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import api from "../../service/api";
import {
  addRecipeRequest,
  deleteRecipeRequest,
  updateRecipeRequest,
} from "../../store/modules/recipe/actions";
import { StyleForm } from "../../styles/form";
import swal from "sweetalert";
let schema = Yup.object().shape({
  name: Yup.string().max(100).required("Campo obrigatório"),
  description: Yup.string().required("Campo obrigatório"),
  category: Yup.string().required("Campo obrigatório"),
});
export default function Form() {
  let { token } = useSelector((state) => state.auth);
  let { user } = useSelector((state) => state.user);
  let { selectedRecipe } = useSelector((state) => state.recipe);
  selectedRecipe = selectedRecipe === null ? {} : selectedRecipe;
  const dispatch = useDispatch();
  function handleSubmit({ name, description, category }, { resetForm }) {
    let recipe = {
      name,
      category,
      description,
      user: user.id,
    };
    if (selectedRecipe.id !== undefined) {
      dispatch(updateRecipeRequest(token, recipe, selectedRecipe.id));
    } else {
      dispatch(addRecipeRequest(token, recipe));
    }
    resetForm();
  }
  function handleDelete() {
    swal({
      title: "Tem certeza que deseja excluir ?",
      buttons: { false: "Cancelar", true: "excluir" },
    }).then((willDelete) => {
      if (willDelete === "true") {
        dispatch(deleteRecipeRequest(token, selectedRecipe));
      }
    });
  }
  return (
    <StyleForm
      initialData={selectedRecipe}
      schema={schema}
      onSubmit={handleSubmit}
    >
      {selectedRecipe.user !== undefined && (
        <GoTrashcan className="btn-delete" onClick={handleDelete} />
      )}
      <div className="row">
        <div className="col-12">
          <Input name="name" type="text" placeholder={"Nome da receita"} />
        </div>
        <div className="select col-xl-7 col-md-8 col-12">
          <Input
            name="category"
            type="text"
            placeholder={"Nome da categoria"}
            maxLength={20}
          />
        </div>
        <div className="col-12">
          <Input
            name="description"
            multiline
            type="text"
            label={"Descrição"}
            placeholder={``}
            maxLength={200}
          />
        </div>
        <button type="submit">
          {selectedRecipe.id !== undefined
            ? "Atualizar Receita"
            : "Criar Receita"}
        </button>
      </div>
    </StyleForm>
  );
}
