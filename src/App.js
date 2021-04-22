import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

import Splash from './Splash';
import GetPlaylist from './GetPlaylist';
import LosingPage from './losingPage';

import './App.css';

const GET_PLAYLIST = gql`
  query PlaylistQuery {
    playlistById {
      id
      images {
        url
      }
    }
    tracks {
      name
      popularity
      artist
    }
  }
`;

function App() {
  const [track1, setTrack1] = useState();
  const [track2, setTrack2] = useState();

  const { loading, error, data } = useQuery(GET_PLAYLIST);

  if (error) return <p>{JSON.stringify(error)}</p>;
  if (loading) return <p>Loading ...</p>;

  const playlist = data.playlistById;
  const tracks = data.tracks;

  console.log(data);

  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact={true}>
          <Splash />
        </Route>
        <Route path="/game" exact={true}>
          <GetPlaylist playlist={playlist} tracks={tracks} />
        </Route>
        <Route path='/lost'>
          <LosingPage track2={track2} />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
