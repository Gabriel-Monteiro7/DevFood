import { Input, Select } from "@rocketseat/unform";
import React, { useEffect, useState } from "react";
import { FaCaretDown, GoTrashcan } from "react-icons/all";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import api from "../../service/api";
import {
  addRecipeRequest,
  deleteRecipeRequest,
  updateRecipeRequest
} from "../../store/modules/recipe/actions";
import { StyleForm } from "../../styles/form";
import swal from "sweetalert";
let schema = Yup.object().shape({
  title: Yup.string().required("Campo obrigatório"),
  category: Yup.string().required("Campo obrigatório"),
  description: Yup.string().required("Campo obrigatório"),
  id: Yup.string()
});
export default function Form() {
  let { token } = useSelector(state => state.auth);
  let { user } = useSelector(state => state.user);
  let { selectedRecipe } = useSelector(state => state.recipe);

  const [options, setOptions] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    async function getCategory() {
      return await api.apiRecipe.get("category/", {
        headers: { Authorization: "Token " + token }
      });
    }
    getCategory().then(response => {
      setOptions(
        response.data.map(value => {
          return { ...value, title: value.name };
        })
      );
    });
  }, [token]);
  function handleSubmit({ title, category, description }, { resetForm }) {
    let recipe = {
      title,
      category,
      description,
      user: user.id
    };
    if (selectedRecipe.user !== undefined) {
      dispatch(updateRecipeRequest(token, recipe, selectedRecipe.id));
    } else {
      dispatch(addRecipeRequest(token, recipe));
    }
    resetForm();
  }
  function handleDelete({ resetForm }) {
    swal({
      title: "Tem certeza que deseja Excluir ?",
      buttons: { Cancelar: "Cancelar", Descartar: "Excluir" }
    }).then(willDelete => {
      if (willDelete === "Excluir") {
        dispatch(deleteRecipeRequest(token, selectedRecipe));
      }
    });

    // resetForm();
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
          <Input name="title" type="text" placeholder={"Nome da receita"} />
        </div>
        <div className="col-xl-7 col-md-8 col-12">
          <Select
            options={options}
            name="category"
            placeholder={"Escolha a categoria da receita"}
          />
          <FaCaretDown />
        </div>
        <div className="col-12">
          <Input
            name="description"
            multiline
            type="text"
            label={"Descrição"}
            placeholder={`°\n°\n°\n°\n°`}
          />
        </div>
        <button type="submit">Criar Receita</button>
      </div>
    </StyleForm>
  );
}
