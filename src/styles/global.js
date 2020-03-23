import { createGlobalStyle } from "styled-components";
import "react-toastify/dist/ReactToastify.css";
// Dispositivos small (telefones em modo paisagem, com 576px ou mais)
export const sm = 576;

// Dispositivos médios (tablets com 768px ou mais)
export const md = 768;

// Dispositivos large (desktops com 992px ou mais)
export const lg = 992;

// Dispositivos extra large (desktops grandes com 1200px ou mais)
export const xl = 1200;
export const GlobalStyle = createGlobalStyle`
    margin:0px;
    padding:0px;
    outline:0px;
    box-sizing:border-box;

    html,body,#root{
        background: #EDEDED;
        margin:0px;
        font-family: sans-serif;
        min-height:100vh;
        .btn,a,button{
        
        cursor: pointer;
    }
    
    }
    body{
        -webkit-font-smoothing: antialiased !important;
    }
    
    #root{
        /* max-width:1020px; */

    }


    ::-webkit-scrollbar {
    width: 10px;
    background-color: transparent;

}
::-webkit-scrollbar-thumb {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #6E6E6E;
}

::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #F5F5F5;
}
.swal-footer {
    display: flex;
    justify-content: space-around;
    padding:0px;
    margin:10px 0px;
    .swal-button{
        border-radius: 2px;
        padding: 6px 25px;
        background: transparent;
        &:hover,&:active{
        background: transparent;
      }
    }
    .swal-button--true {
      color: #6e6e6e;
      &:hover{
        color: #6e6e6e;
      }
    }
    .swal-button--false {

        color: #f58324;
    &:hover,&:active{

        color: #f58324;
    }
    }
  }

  .swal-modal {
    
    .swal-title {
        font-size: 17px;
    font-weight: normal;
        margin: 0px 20px;
    border-bottom: 1px solid;
      padding: 25px 16px;
    }
  }
  .btn,button{
        outline:0 !important;
        border-radius:5px;
        &:active:focus{
            outline:0 !important;
            border:0;
        }
    }
    .link {
    float:right;
    cursor:pointer;
    text-decoration: underline;
    text-align:end;
    &:hover {
      color: #f58324;
      text-decoration: underline;
      opacity: 0.8;
    }
  }
`;
