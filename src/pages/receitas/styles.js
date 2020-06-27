import styled from "styled-components";
import { sm } from "../../styles/global";

import { FiTrash } from "react-icons/all";
export const ButtonDelete = styled.button`
  position: absolute;
  bottom: 0;
  left: 0;
  background: #38383896;
  clip-path: polygon(0 0, 0% 100%, 100% 100%);
  height: 45px;
  width: 45px;
  border: 0px;
  color: wheat;
  border-radius: 0px 4px 4px 4px;
  &:hover {
    background: #fa5858;
  }
`;
export const Icon = styled(FiTrash)`
  font-size: 15px;
  position: absolute;
  left: 7px;
`;
export const NoProduct = styled.span`
  align-items: center;
  font-size: 30px;
  color: #989898;
  display: flex;
  height: 62vh;
  margin: auto;
  justify-content: center;
  @media (max-width: ${sm}px) {
    font-size: 20px;
  }
`;
export const Load = styled.div`
  height: 500px;
  width: 500px;
  margin: auto;
  padding-top: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  & div {
    width: 60% !important;
    height: 60% !important;
    overflow: hidden !important;
    margin: auto !important;
    outline: none !important;
  }
  @media (max-width: ${sm}px) {
    height: 350px;
    width: 350px;
  }
`;
