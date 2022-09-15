
import { BrowserRouter, Route, Link } from "react-router-dom";
import Routes from "../../client/src/routes/routes";
import './App.css'
import { Provider } from "react-redux";
import store from "./redux/store";

import AuthContextProvider from "./store/AuthContent";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <div className="main">
            <Routes />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
