import styled from "styled-components";
import { sm, md } from "../../../styles/global";

export default styled.nav`
  z-index: 1;
  background: #f58324 !important;
  width: 100%;
  border-bottom: 10px #267d9a solid;
  padding: 12px 0px;
  a,
  .navbar-toggler {
    color: white;
    &:hover {
      color: white;
    }
  }
  .nav-item {
    font-weight: bold;
    transition: 0.3s ease-in-out;
    margin: 0px 3px;
  }
  .navbar-brand {
    font-size: 25px;
    span {
      font-weight: bold;
      color: white;
      font-style: italic;
    }
    color: #267d9a !important;
  }
  .navbar-nav {
    justify-content: flex-end;
    align-items: center;
  }

  .user {
    margin-left: 50px;
    display: flex;
    padding: 0px 10px;
    align-items: center;
  }
  hr {
    border-left: 2px #267d9a solid;
    height: 30px;
    margin: 0px;
  }
  img {
    height: 45px;
    margin-right: 15px;
    border-radius: 100%;
  }
  @media (max-width: ${md}px) {
    .user {
      margin-left: 0px;
      flex-direction: column;
      padding: 0px;
    }
    hr {
      border: 0px;
      border-bottom: 2px #267d9a solid;
      height: 0px;
      width: 100%;
      margin: 10px 0px;
    }
    img {
      margin-right: 0px;
    }
  }
`;
