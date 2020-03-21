import React from "react";
import { Input, Select } from "@rocketseat/unform";
import * as Yup from "yup";
import { StyleForm } from "../../styles/form";
import uuid from "react-uuid";
import { FaCaretDown } from "react-icons/all";
// import {
//   addTaskRequest,
//   updateTaskRequest
// } from "../../store/modules/task/actions";
// import { useDispatch, useSelector } from "react-redux";
let schema = Yup.object().shape({
  nome: Yup.string().required("Campo obrigatório"),
  categoria: Yup.string().required("Campo obrigatório"),
  descricao: Yup.string().required("Campo obrigatório"),
  id: Yup.string()
});
const options = [
  { id: "Muito Alta", title: "Muito Alta" },
  { id: "Alta", title: "Alta" },
  { id: "Média", title: "Média" },
  { id: "Baixa", title: "Baixa" }
];

export default function Form({ nome, categoria, descricao, id }) {
  // let { selectedTasks } = useSelector(state => state.task);
  // const dispatch = useDispatch();
  function handleSubmit(
    { nome, categoria, descricao, id = undefined },
    { resetForm }
  ) {
    let task = {
      id,
      nome,
      categoria,
      descricao
    };
    if (task.id !== undefined) {
      // dispatch(updateTaskRequest(task));
    } else {
      task.id = uuid();
      // dispatch(addTaskRequest(task));
    }
    resetForm();
  }
  return (
    <StyleForm
      // initialData={{ ...selectedTasks, prazo: selectedTasks.prazo.data || "" }}
      schema={schema}
      onSubmit={handleSubmit}
    >
      <div className="row">
        <div className="col-12">
          <Input name="nome" type="text" placeholder={"Nome da receita"} />
        </div>
        <div className="col-xl-7 col-md-8 col-12">
          <Select
            options={options}
            name="categoria"
            placeholder={"Escolha a categoria da receita"}
          />
          <FaCaretDown />
        </div>
        <div className="col-12">
          <Input
            name="descricao"
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
