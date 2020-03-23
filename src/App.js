import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import NavBar from "./components/default/navbar";
import Routes from "./routes";
import { persistor, store } from "./store";
import { GlobalStyle } from "./styles/global";
import history from "./service/history";
import { ToastContainer } from "react-toastify";
import ButtonTop from "./components/default/ButtonTop";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <NavBar />
          <div className="container-fluid px-md-5 px-2">
            <Routes />
          </div>
          <ButtonTop />
          <GlobalStyle />
          <ToastContainer autoClose={3000} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
