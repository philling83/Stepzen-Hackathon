import {Route} from 'react-router-dom';
import HelloWorld from './HelloWorld';
import LosingPage from './losingPage';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route path='/' exact={true}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <HelloWorld />
      </header>
      </Route>
        <Route path='/lost'>
          <LosingPage />
        </Route>
    </div>
  );
}

export default App;
