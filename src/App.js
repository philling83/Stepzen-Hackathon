import React, { NavLink } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// import HelloWorld from './HelloWorld';
import Splash from './Splash';

import './App.css';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Route path="/" exact={true}><Splash /></Route>
        </BrowserRouter>


        {/* <HelloWorld /> */}
    </div>
  );
}

export default App;
