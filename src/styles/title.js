import styled from "styled-components";
import { sm } from "./global";

export default styled.div`
  word-break: break-all;
  background: white;
  text-align: center;
  left: 0px;
  width: 100%;
  position: absolute;
  padding: 20px 0px;
  font-weight: bold;
  margin: 15px 0px;
  min-height: 64px;
  span {
    color: #f58324;
  }
  .voltar {
    cursor: pointer;
    color: #267d9a;
    font-size: 12px;
    position: absolute;
    left: 49px;
    top: 24px;
    @media (max-width: ${sm}px) {
      left: 0.5rem;
    }
    svg {
      margin: 0px 5px;
    }
  }
  .descricao {
    margin: auto;
    width: 75%;
    display: inherit;
    @media (max-width: ${sm}px) {
      font-size: 11px;
      width: 65%;
    }
  }
`;
