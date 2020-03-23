import styled from "styled-components";
import { Form } from "@rocketseat/unform";
import { darken } from "polished";
import { sm } from "./global";

export const StyleForm = styled(Form)`
  background: white !important;
  padding: 20px 30px;
  width: 450px;
  border-radius: 7px;
  @media (max-width: ${sm}px) {
    width: 100%;
    padding: 20px;
  }
  margin: auto;
  input {
    width: 100%;
    outline: none;
    font-size: 15px;
    padding: 5px 20px;
    color: #6e6e6e;
    border: none;
    border: 2px solid #848484;
    overflow: visible;
    outline: none;
    width: 100%;
    border-radius: 7px;
  }

  button {
    border: 0px;
    padding: 10px 50px;
    background: #f58324;
    color: white;
    font-size: 16px;
    margin: 15px 0px 15px auto;
    font-weight: bold;
    @media (max-width: ${sm}px) {
      margin: 15px auto;
    }
    &:hover {
      background: ${darken(0.05, "#F58324")};
    }
  }
  label {
    font-size: 15px;
    margin: 5px 0px;
  }
  div {
    margin: 5px 0px;
    span {
      font-size: 12px;
      color: #fe2e2e;
    }
  }
  #id {
    vertical-align: sub;
  }
  .col-12 {
    padding: 0px;
  }
`;
