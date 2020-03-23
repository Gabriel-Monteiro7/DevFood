import { takeLatest, call, put, all } from "redux-saga/effects";

import history from "../../../service/history";
import api from "../../../service/api";
import { toast } from "react-toastify";
import { singInSuccess, singFailure } from "./actions";

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.apiUser.post, "authentication/", {
      username: email,
      password: password
    });

    const { token, user } = {
      token: response.data.token,
      user: response.data
    };
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
  takeLatest("@auth/SIGN_OUT", singOut)
]);
