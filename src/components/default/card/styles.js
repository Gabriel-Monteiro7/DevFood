import styled from "styled-components";
import {} from "styled-components";
import { md, sm } from "../../../styles/global";

export const StylesCard = styled.div`
  border-radius: 10px;
  width: 380px;
  background: white;
  height: 300px;
  margin: 20px 0px;
  @media (max-width: ${md}px) {
    width: 300px;
    height: 220px;
  }
`;
export const Imagem = styled.div`
  background-image: url(https://blog.novasafra.com.br/wp-content/uploads/2018/03/comida-arabe-780x450.jpg);
  height: 40%;
  border-radius: 7px 7px 0px 0px;
  padding: 2px 15px;
  color: white;
  display: flex;
  font-weight: bold;
  align-items: flex-end;
`;
export const Body = styled.div`
  padding: 15px;
  display: flex;
  word-break: break-all;
  flex-direction: column;
  justify-content: space-between;
  height: 60%;
  color: #267d9a;
  span,
  a {
    color: #f58324;
  }
  span {
    font-weight: bold;
    /* font-size; */
  }
  a {
    text-decoration: underline;
    text-align: end;
    &:hover {
      color: #f58324;
      text-decoration: underline;
      opacity:0.8;
    }
  }
  p {
    font-size: 15px;
    margin: 0px;
  }
  @media (max-width: ${md}px) {
    font-size: 12px;
    p {
      font-size: 11px;
    }
  }
`;
