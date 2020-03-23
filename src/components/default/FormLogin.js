import React from "react";
import { Input } from "@rocketseat/unform";
import * as Yup from "yup";
import { StyleForm } from "../../styles/formLogin";
import { singInRequest } from "../../store/modules/auth/actions";
import { useDispatch, useSelector } from "react-redux";
let schema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required("Campo obrigatório"),
  senha: Yup.string().required("Campo obrigatório")
});

export default function Form({ email, senha }) {
  let { loading } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  function handleSubmit({ email, senha }, { resetForm }) {
    dispatch(singInRequest(email, senha));
    // resetForm();
  }
  return (
    <StyleForm className="row" schema={schema} onSubmit={handleSubmit}>
      <div className="col-12">
        <Input
          name="email"
          type="text"
          label={"E-mail"}
          placeholder={"exemplo@exemplo.com"}
        />
      </div>
      <div className="col-12">
        <Input name="senha" type="password" label={"Senha"} />
      </div>
      <button type="submit">{loading ? "Carregando..." : "Entrar"}</button>
    </StyleForm>
  );
}
