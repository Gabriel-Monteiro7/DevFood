import React from "react";
// import { Provider } from "react-redux";
import { Router } from "react-router-dom";
// import { PersistGate } from "redux-persist/integration/react";
import NavBar from "./components/default/navbar";
import Routes from "./routes";
// import { persistor, store } from "./store";
import { GlobalStyle } from "./styles/global";
import history from "./service/history";

function App() {
  return (
    // <Provider store={store}>
    // <PersistGate persistor={persistor}>
    <Router history={history}>
      <NavBar />
      <div className="container-fluid px-5">
        <Routes />
      </div>
      <GlobalStyle />
    </Router>
    // </PersistGate>
    // </Provider>
  );
}

export default App;
