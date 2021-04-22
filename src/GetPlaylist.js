import React, { useState } from 'react';


function GetPlaylist({ playlist, tracks }) {

  // let i = 0;
  // let j = 1;

  const [leftSongIndex, setLeftSongIndex] = useState(0);
  const [rightSongIndex, setRightSongIndex] = useState(1);
  const [trackFeed, setTrackFeed] = useState({artists: playlist.artists, images: playlist.images, tracks});
  const [gameFeed, setGameFeed] = useState({ song1: {artist: playlist.artists[leftSongIndex], image: playlist.images[leftSongIndex], track: tracks[leftSongIndex]},
                                             song2: {artist: playlist.artists[rightSongIndex], image: playlist.images[rightSongIndex], track: tracks[rightSongIndex]}});
  const [highScore, setHighScore] = useState(0);
  const [currentHighScore, setCurrentHighScore] = useState(0);

  const checkHigher = () => {
    setLeftSongIndex(leftSongIndex + 1);
    setGameFeed({
      song1: { artist: playlist.artists[leftSongIndex], image: playlist.images[leftSongIndex], track: tracks[leftSongIndex] },
      song2: { artist: playlist.artists[rightSongIndex], image: playlist.images[rightSongIndex], track: tracks[rightSongIndex] }
    })
    console.log(leftSongIndex)
  }

  return (
    <>
      <div className="game_grid">
        <div className="song_tile">
          <div className="left_song">
            <img src={gameFeed.song1.image.url}></img>
            <div className="text">{gameFeed.song1.track.name} by {gameFeed.song1.artist.name}</div>
            <div className="text">Has a Popularity Score of: </div>
            <div className="text">{gameFeed.song1.track.popularity}</div>
          </div>
        </div>
        <div className="circle">VS</div>
        <div className="right_song">
          <img src={gameFeed.song2.image.url}></img>
          <div className="text">{gameFeed.song2.track.name} by {gameFeed.song2.artist.name}</div>
          <div>
            <button className="game_button" onClick={checkHigher}>Higher</button>
          </div>
          <div>
            <button className="game_button">Lower</button>
          </div>
          <div>
            <button className="game_button">Tied?!</button>
          </div>
          <div className="text">Popularity Score than {gameFeed.song1.track.name}</div>
        </div>
        {/* </div> */}
        <div className="high_score_container">
          <div className="high_score">High Score: {highScore}</div>
          <div className="current_high_score">Current High Score: {currentHighScore}</div>
        </div>
      </div>
    </>
  );
}

export default GetPlaylist;
