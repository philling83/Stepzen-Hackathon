import React, { NavLink } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// import HelloWorld from './HelloWorld';
import Splash from './Splash';
import GetTrack from './GetTrack';
import { gql, useQuery } from '@apollo/client';

import './App.css';

const GET_TRACK = gql`
  query GetTrackQuery {
    trackById {
      name
      popularity
      explicit
      images {
        url
      }
      artists {
        name
      }
    }
  }
`;

function App() {

  const { loading, error, data } = useQuery(GET_TRACK);

  if (error) return <p>{JSON.stringify(error)}</p>;
  if (loading) return <p>Loading ...</p>;

  const track = data?.trackById

  return (
    <div className="App">
        <BrowserRouter>
          <Route path="/" exact={true}><Splash /></Route>
        </BrowserRouter>


        {/* <HelloWorld /> */}
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
        <GetTrack />
      </header>
    </div>
  );
}

export default App;
