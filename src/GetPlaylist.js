import React, { useState } from 'react';


function GetPlaylist({ playlist, tracks }) {

  const [trackFeed, setTrackFeed] = useState({artists: playlist.artists, images: playlist.images, tracks})
  const [gameFeed, setGameFeed] = useState({ song1: {artist: playlist.artists[0], image: playlist.images[0], track: tracks[0]},
                                             song2: {artist: playlist.artists[1], image: playlist.images[1], track: tracks[1]}})

  return (
    <>
      <div className="game_grid">
        <div className="song_tile">
          <div className="left_song">
            <img src={gameFeed.song1.image.url}></img>
            <div className="text">{gameFeed.song1.track.name}</div>
            <div className="text">{gameFeed.song1.artist.name}</div>
          </div>
        </div>
        <div className="song_tile">
          <div className="right_song">
            <img src={gameFeed.song2.image.url}></img>
            <div className="text">{gameFeed.song2.track.name}</div>
            <div className="text">{gameFeed.song2.artist.name}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GetPlaylist;
