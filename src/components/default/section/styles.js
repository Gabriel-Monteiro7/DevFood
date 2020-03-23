import styled from "styled-components";
import { xl } from "../../../styles/global";

export default styled.div`
  /* min-height: 100vh; */
  padding: 115px 0px 20px 0px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  @media (max-width: ${xl}px) {
    justify-content: space-evenly;
  }
`;
