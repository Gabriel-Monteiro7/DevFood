import styled from "styled-components";
import { sm } from "../../styles/global";
import { FiEdit3 } from "react-icons/all";
export const ButtonEdit = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  background: #f3974b;
  clip-path: polygon(100% 0, 0% 100%, 100% 100%);
  height: 45px;
  width: 45px;
  border: 0px;
  color: wheat;
  border-radius: 0px 4px 4px 4px;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;
export const Icon = styled(FiEdit3)`
  font-size: 15px;
  position: absolute;
`;
