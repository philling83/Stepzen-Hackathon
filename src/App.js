import React from 'react';
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
  const { loading, error, data } = useQuery(GET_PLAYLIST);
  // console.log("data", data)

  if (error) return <p>{JSON.stringify(error)}</p>;
  if (!data) return null;
  if (loading) return <p>Loading ...</p>;

  const playlist = data.playlistById;
  const tracks = data.tracks;


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
          <LosingPage/>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
