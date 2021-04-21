import GetTrack from './GetPlaylist';
import { gql, useQuery } from '@apollo/client';

import logo from './logo.svg';
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

  const { loading, error, data } = useQuery(GET_PLAYLIST);

  if (error) return <p>{JSON.stringify(error)}</p>;
  if (loading) return <p>Loading ...</p>;

  const playlist = data.playlistById

  return (
    <div className="App">
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
        <GetTrack playlist={playlist}/>
      </header>
    </div>
  );
}

export default App;
