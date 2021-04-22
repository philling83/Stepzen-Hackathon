import {useState} from 'react';
// import {Route} from 'react-router-dom';
// import HelloWorld from './HelloWorld';
import LosingPage from './losingPage';
// import GetTrack from './GetTrack';
import React, { NavLink } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

import Splash from './Splash';
import GetPlaylist from './GetPlaylist';

import './App.css';

const GET_PLAYLIST = gql`
  query PlaylistQuery {
    playlistById {
      id
      artists {
        name
      }
      images {
        url
      }
    }
    tracks {
      name
      popularity
    }
  }
`;

function App() {
  const [track1, setTrack1] = useState();
  const [track2, setTrack2] = useState();
  // const { loading, error, data } = useQuery(GET_TRACK);

  const { loading, error, data } = useQuery(GET_PLAYLIST);

  // if (error) return <p>{JSON.stringify(error)}</p>;
  // if (loading) return <p>Loading ...</p>;

  // const playlist = data.playlistById
  const playlist = data.playlistById
  const tracks = data.tracks

  return (
    <div className="App">
      <Route path='/' exact={true}>
        <BrowserRouter>
          <Route path="/" exact={true}>
            <Splash />
          </Route>
        <Route path="/game" exact={true}>
          <GetPlaylist playlist={playlist} tracks={tracks} />
        </Route>
        </BrowserRouter>


        {/* <HelloWorld /> */}
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
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
        {/* <GetPlaylist playlist={playlist}/> */}
      </header>
      </Route>
        <Route path='/lost'>
          <LosingPage track2={track2} />
        </Route>
    </div>
  );
}

export default App;
