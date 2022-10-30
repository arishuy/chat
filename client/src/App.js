
import { BrowserRouter, Route, Link } from "react-router-dom";
import Routes from "../../client/src/routes/routes";
import './App.css'

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
