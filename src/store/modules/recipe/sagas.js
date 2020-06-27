import { takeLatest, call, put, all } from "redux-saga/effects";

import api from "../../../service/api";
import history from "../../../service/history";

import { toast } from "react-toastify";
import {
  getAllSuccess,
  getOneSuccess,
  addRecipeSuccess,
  getMyRecipesSuccess,
  updateRecipeSuccess,
  deleteRecipeSuccess,
} from "./actions";
export function* getAll({ payload }) {
  try {
    const { token } = payload;
    const { data } = yield call(api.apiRecipe.get, "/", {
      headers: { Authorization: `Bearer ${token}` },
    });
    yield put(getAllSuccess(data));
  } catch (erro) {
    toast.error("Erro na requisição");
  }
}
export function* getOne({ payload }) {
  try {
    const { token, id } = payload;
    if (id === null) {
      if (history.location.pathname !== "/adicionar-receita")
        yield put(getOneSuccess(null));
      return history.push("/adicionar-receita");
    }
    const { data } = yield call(api.apiRecipe.get, "/" + id.value);
    console.log(data);

    yield put(getOneSuccess(data));
    if (id.update) {
      return history.push("/adicionar-receita");
    }
    history.push("/descricao");
  } catch (erro) {
    toast.error("Erro na requisição");
  }
}
export function* addRecipe({ payload }) {
  try {
    const { token, recipe } = payload;
    const { data } = yield call(api.apiRecipe.post, "save/", recipe);
    yield put(addRecipeSuccess(data));
    toast.success("Receita salva com sucesso");
    history.push("/receitas");
  } catch (erro) {
    toast.error("Erro na requisição");
  }
}
export function* updateRecipe({ payload }) {
  try {
    const { token, recipe, id } = payload;
    const { data } = yield call(api.apiRecipe.put, `/${id}/`, recipe);
    yield put(updateRecipeSuccess(data));
    history.push("/receitas");
  } catch (erro) {
    toast.error("Erro na requisição");
  }
}

export function* deleteRecipe({ payload }) {
  try {
    const { token, recipe } = payload;
    const { data } = yield call(api.apiRecipe.delete, "/" + recipe.id);
    yield put(deleteRecipeSuccess(recipe));
    yield put(getOneSuccess(null));
    history.push("/receitas");
    toast.success("Receita deletada com sucesso");
  } catch (erro) {
    toast.error("Erro na requisição");
  }
}
export default all([
  takeLatest("@recipe/GET_ALL_REQUEST", getAll),
  takeLatest("@recipe/GET_ONE_REQUEST", getOne),
  takeLatest("@recipe/ADD_RECIPE_REQUEST", addRecipe),
  takeLatest("@recipe/UPDATE_RECIPE_REQUEST", updateRecipe),
  takeLatest("@recipe/DELETE_RECIPE_REQUEST", deleteRecipe),
]);
