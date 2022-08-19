import './App.css';
import io from 'socket.io-client';
import Header from './components/Header';
import Body from './components/Body';
const socket = io.connect('http://localhost:3001');

function App() {
  return (
    <div classNameName="App">
      <Header />
      <Body />
      {/* <Footer /> */}
    </div>

  );
}

export default App;
