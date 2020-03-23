import { takeLatest, call, put, all } from "redux-saga/effects";

import api from "../../../service/api";
import history from "../../../service/history";

import { toast } from "react-toastify";
import {
  getAllSuccess,
  getOneSuccess,
  addRecipeSuccess,
  getMyRecipesSuccess
} from "./actions";
export function* getAll({ payload }) {
  try {
    const { token } = payload;
    const { data } = yield call(api.apiRecipe.get, "recipe/", {
      headers: { Authorization: "Token " + token }
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
      yield put(getOneSuccess({}));
      return history.push("/adicionar-receita");
    }
    const { data } = yield call(api.apiRecipe.get, "recipe/" + id.value, {
      headers: { Authorization: "Token " + token }
    });
    yield put(getOneSuccess(data));
    if (id.update) {
      return history.push("/adicionar-receita");
    }
    history.push("/descricao");
  } catch (erro) {
    toast.error("Erro na requisição");
  }
}
export function* getMyRecipes({ payload }) {
  try {
    const { token, id } = payload;
    const { data } = yield call(api.apiRecipe.get, "recipe?user=" + id, {
      headers: { Authorization: "Token " + token }
    });
    yield put(getMyRecipesSuccess(data));
  } catch (erro) {
    toast.error("Erro na requisição");
  }
}
export function* addRecipe({ payload }) {
  try {
    const { token, recipe } = payload;
    const { data } = yield call(api.apiRecipe.post, "recipe/", recipe, {
      headers: { Authorization: "Token " + token }
    });
    yield put(addRecipeSuccess(data));
    history.push("/minhas-receitas");
  } catch (erro) {
    toast.error("Erro na requisição");
  }
}
export function* updateRecipe({ payload }) {
  try {
    const { token, recipe, id } = payload;
    const { data } = yield call(api.apiRecipe.put, `recipe/${id}/`, recipe, {
      headers: { Authorization: "Token " + token }
    });
    yield put(addRecipeSuccess(data));
    history.push("/minhas-receitas");
  } catch (erro) {
    toast.error("Erro na requisição");
  }
}

export function* deleteRecipe({ payload }) {
  try {
    const { token, recipe } = payload;
    const { data } = yield call(api.apiRecipe.delete, "recipe/" + recipe.id, {
      headers: { Authorization: "Token " + token }
    });
    yield put(addRecipeSuccess(data));
    yield put(getOneSuccess({}));
    history.push("/minhas-receitas");
  } catch (erro) {
    toast.error("Erro na requisição");
  }
}
export default all([
  takeLatest("@recipe/GET_ALL_REQUEST", getAll),
  takeLatest("@recipe/GET_ONE_REQUEST", getOne),
  takeLatest("@recipe/GET_MY_RECIPES_REQUEST", getMyRecipes),
  takeLatest("@recipe/ADD_RECIPE_REQUEST", addRecipe),
  takeLatest("@recipe/UPDATE_RECIPE_REQUEST", updateRecipe),
  takeLatest("@recipe/DELETE_RECIPE_REQUEST", deleteRecipe)
]);
