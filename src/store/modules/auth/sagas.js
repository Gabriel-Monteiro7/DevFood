import { takeLatest, call, put, all } from "redux-saga/effects";

import history from "../../../service/history";
import api from "../../../service/api";
import { toast } from "react-toastify";
import { singInSuccess, singFailure } from "./actions";

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.apiUser.post, "/session", {
      email,
      password,
    });
    const { token } = response.data;

    const responseUser = yield call(api.apiUser.get, "/perfil", {
      headers: { Authorization: `Bearer ${token}` },
    });
    const user = responseUser.data[0];
    yield put(singInSuccess(token, user));
    history.push("/receitas");
  } catch (erro) {
    toast.error("Erro na autenticação");
    yield put(singFailure());
  }
}
export function singOut() {
  history.push("/");
}
export default all([
  takeLatest("@auth/SIGN_IN_REQUEST", signIn),
  takeLatest("@auth/SIGN_OUT", singOut),
]);
