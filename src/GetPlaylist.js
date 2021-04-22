import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';


function GetPlaylist({ playlist, tracks }) {

  const history = useHistory()

  const [leftSongIndex, setLeftSongIndex] = useState(0);
  const [rightSongIndex, setRightSongIndex] = useState(1);
  // const [trackFeed, setTrackFeed] = useState({ images: playlist.images, tracks });
  const [gameFeed, setGameFeed] = useState({ song1: {artist: tracks[leftSongIndex].artist, image: playlist.images[leftSongIndex], track: tracks[leftSongIndex]},
                                             song2: {artist: tracks[rightSongIndex].artist, image: playlist.images[rightSongIndex], track: tracks[rightSongIndex]}});
  const [highScore, setHighScore] = useState(0);
  const [currentHighScore, setCurrentHighScore] = useState(0);

  console.log(leftSongIndex)
  console.log(gameFeed)
  
  const checkHigher = () => {
    if (gameFeed.song2.track.popularity > gameFeed.song1.track.popularity) {
      setLeftSongIndex(leftSongIndex => leftSongIndex + 1);
      setRightSongIndex(rightSongIndex => rightSongIndex + 1);
      setGameFeed(gameFeed => gameFeed = {
        song1: { artist: tracks[leftSongIndex].artist, image: playlist.images[leftSongIndex], track: tracks[leftSongIndex] },
        song2: { artist: tracks[rightSongIndex].artist, image: playlist.images[rightSongIndex], track: tracks[rightSongIndex] }
      });
      setHighScore(highScore => highScore + 1);
      setCurrentHighScore(currentHighScore => currentHighScore + 1);
    } else {
      history.push('/lost');
    };
  };

  const checkLower = () => {
    if (gameFeed.song2.track.popularity < gameFeed.song1.track.popularity) {
      setLeftSongIndex(leftSongIndex => leftSongIndex + 1);
      setRightSongIndex(rightSongIndex => rightSongIndex + 1);
      setGameFeed(gameFeed => gameFeed = {
        song1: { artist: tracks[leftSongIndex].artist, image: playlist.images[leftSongIndex], track: tracks[leftSongIndex] },
        song2: { artist: tracks[rightSongIndex].artist, image: playlist.images[rightSongIndex], track: tracks[rightSongIndex] }
      });
      setHighScore(highScore => highScore + 1);
      setCurrentHighScore(currentHighScore => currentHighScore + 1);
    } else {
      history.push('/lost');
    };
  };

  const checkTie = () => {
    if (gameFeed.song2.track.popularity === gameFeed.song1.track.popularity) {
      setLeftSongIndex(leftSongIndex => leftSongIndex + 1);
      setRightSongIndex(rightSongIndex => rightSongIndex + 1);
      setGameFeed(gameFeed => gameFeed = {
        song1: { artist: tracks[leftSongIndex].artist, image: playlist.images[leftSongIndex], track: tracks[leftSongIndex] },
        song2: { artist: tracks[rightSongIndex].artist, image: playlist.images[rightSongIndex], track: tracks[rightSongIndex] }
      });
      setHighScore(highScore => highScore + 1);
      setCurrentHighScore(currentHighScore => currentHighScore + 1);
    } else {
      history.push('/lost');
    };
  };

  return (
    <>
      <div className="game_grid">
        <div className="song_tile">
          <div className="left_song">
            <img src={gameFeed.song1.image.url}></img>
            <div className="text">{gameFeed.song1.track.name} by {gameFeed.song1.artist}</div>
            <div className="text">Has a Popularity Score of: </div>
            <div className="text">{gameFeed.song1.track.popularity}</div>
          </div>
        </div>
        <div className="circle">VS</div>
        <div className="right_song">
          <img src={gameFeed.song2.image.url}></img>
          <div className="text">{gameFeed.song2.track.name} by {gameFeed.song2.artist}</div>
          <div>
            <button className="game_button" onClick={checkHigher}>Higher</button>
          </div>
          <div>
            <button className="game_button" onClick={checkLower}>Lower</button>
          </div>
          <div>
            <button className="game_button" onClick={checkTie}>Tied?!</button>
          </div>
          <div className="text">Popularity Score than {gameFeed.song1.track.name}</div>
        </div>
        <div className="high_score_container">
          <div className="high_score">High Score: {highScore}</div>
          <div className="current_high_score">Current High Score: {currentHighScore}</div>
        </div>
      </div>
    </>
  );
}

export default GetPlaylist;
