import styled from "styled-components";
import { sm } from "./global";

export default styled.div`
  background: white;
  text-align: center;
  left: 0px;
  width: 100%;
  position: absolute;
  padding: 15px 0px;
  font-weight: bold;
  margin: 15px 0px;
  span {
    color: #f58324;
  }
  .voltar {
    cursor: pointer;
    color: #267d9a;
    font-size: 11px;
    position: absolute;
    left: 49px;
    @media (max-width: ${sm}px) {
      left: 0.5rem;
    }
    top: 20px;
    svg {
      margin: 0px 5px;
    }
  }
  .descricao {
    @media (max-width: ${sm}px) {
      margin: auto;
      font-size: 11px;
      width: 70%;
      display: inherit;
    }
  }
`;
