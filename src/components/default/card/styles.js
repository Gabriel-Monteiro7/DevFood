import styled from "styled-components";
import {} from "styled-components";
import { md, sm } from "../../../styles/global";

export const StylesCard = styled.div`
  border-radius: 8px;
  width: 380px;
  background: white;
  height: 300px;
  margin: 20px 40px 20px 0px;

  @media (max-width: ${md}px) {
    margin: 20px 0px;
    width: 260px;
    height: 220px;
  }
`;
export const Imagem = styled.div`
  background: ${props =>
    props.image !== undefined ? `url(${props.image})` : "#424242"};
  background-size: cover;
  background-position: center;
  height: 40%;
  border-radius: 8px 8px 0px 0px;
  padding: 2px 15px;
  color: white;
  display: flex;
  font-weight: bold;
  align-items: flex-end;
`;
export const Body = styled.div`
  padding: 15px;
  word-break: break-all;
  height: 60%;
  color: #267d9a;
  .categoria,
  a,
  .link {
    color: #f58324;
  }
  .categoria {
    font-weight: bold;
    /* font-size; */
  }

  p {
    height: 70%;
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
export const CardDescricao = styled.div`
  background: white;
  width: 75%;
  margin: auto;
  min-height: 600px;
  @media (max-width: ${sm}px) {
    width: 90%;
  }
`;
export const BodyDescricao = styled.div`
  padding: 20px 0px;
  color: #267d9a;
  height: 50%;
  width: 45%;
  margin-top: 20px;
  margin-left: 80px;

  span {
    font-weight: bold;
    font-size: 25px;
    color: #f58324;
  }
  @media (max-width: ${md}px) {
    margin: 0px;
    width: 65%;
    padding-left: 10px;
    font-size: 12px;
    p {
      font-size: 11px;
    }
  }
`;
export const ImagemDescricao = styled(Imagem)`
  border-radius: 0px;
  height: 300px;
  @media (max-width: ${md}px) {
    height: 170px;
  }
`;
export const BodyNewCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
  color: #f58324;
  a {
    margin: 10px 0px;
    font-size: 20px;
    text-decoration: underline;
    &:hover {
      color: #f58324;
      text-decoration: underline;
      opacity: 0.8;
    }
  }
  @media (max-width: ${md}px) {
    font-size: 12px;
    p {
      font-size: 11px;
    }
  }
`;
