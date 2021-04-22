import React, { useEffect, useState } from 'react';
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

  useEffect(() => {
    setHighScore(highScore => highScore = Number(localStorage.getItem("highscore")));
  }, []);

  const checkHigher = () => {
    if (gameFeed.song2.track.popularity > gameFeed.song1.track.popularity) {
      setGameFeed(gameFeed => gameFeed = {
        song1: { artist: tracks[leftSongIndex + 1].artist, image: playlist.images[leftSongIndex + 1], track: tracks[leftSongIndex + 1] },
        song2: { artist: tracks[rightSongIndex + 1].artist, image: playlist.images[rightSongIndex + 1], track: tracks[rightSongIndex + 1] }
      });
      setLeftSongIndex(leftSongIndex => leftSongIndex + 1);
      setRightSongIndex(rightSongIndex => rightSongIndex + 1);
      setHighScore(highScore => highScore + 1);
      setCurrentHighScore(currentHighScore => currentHighScore + 1);
    } else {
      if (currentHighScore > localStorage.getItem('highscore')) {
        localStorage.setItem('highscore', currentHighScore);
      }
      localStorage.setItem('lostTrack', playlist.images[rightSongIndex].url)
      history.push('/lost');
    };
  };

  const checkLower = () => {
    if (gameFeed.song2.track.popularity < gameFeed.song1.track.popularity) {
      setGameFeed(gameFeed => gameFeed = {
        song1: { artist: tracks[leftSongIndex + 1].artist, image: playlist.images[leftSongIndex + 1], track: tracks[leftSongIndex + 1] },
        song2: { artist: tracks[rightSongIndex + 1].artist, image: playlist.images[rightSongIndex + 1], track: tracks[rightSongIndex + 1] }
      });
      setLeftSongIndex(leftSongIndex => leftSongIndex + 1);
      setRightSongIndex(rightSongIndex => rightSongIndex + 1);
      setHighScore(highScore => highScore + 1);
      setCurrentHighScore(currentHighScore => currentHighScore + 1);
    } else {
      if (currentHighScore > localStorage.getItem('highscore')) {
        localStorage.setItem('highscore', currentHighScore);
      }
      localStorage.setItem('lostTrack', playlist.images[rightSongIndex].url)
      history.push('/lost');
    };
  };

  const checkTie = () => {
    if (gameFeed.song2.track.popularity === gameFeed.song1.track.popularity) {
      setGameFeed(gameFeed => gameFeed = {
        song1: { artist: tracks[leftSongIndex + 1].artist, image: playlist.images[leftSongIndex + 1], track: tracks[leftSongIndex + 1] },
        song2: { artist: tracks[rightSongIndex + 1].artist, image: playlist.images[rightSongIndex + 1], track: tracks[rightSongIndex + 1] }
      });
      setLeftSongIndex(leftSongIndex => leftSongIndex + 1);
      setRightSongIndex(rightSongIndex => rightSongIndex + 1);
      setHighScore(highScore => highScore + 1);
      setCurrentHighScore(currentHighScore => currentHighScore + 1);
    } else {
      if (currentHighScore > localStorage.getItem('highscore')) {
        localStorage.setItem('highscore', currentHighScore);
      }
      localStorage.setItem('lostTrack', playlist.images[rightSongIndex].url)
      history.push('/lost');
    };
  };

  return (
    <>
      <div className="game_grid">
        <div className="song_tile">
          <div className="left_song">
            <img className="game_image" src={gameFeed.song1.image.url} alt='album cover'/>
            <div className="text">{gameFeed.song1.track.name} by {gameFeed.song1.artist}</div>
            <div className="text">Has a Popularity Score of: </div>
            <div className="text popularity">{gameFeed.song1.track.popularity}</div>
          </div>
        </div>
        <div className="circle">VS</div>
        <div className="right_song">
          <img className="game_image" src={gameFeed.song2.image.url} alt='album cover'/>
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
          <div className="score high_score">High Score: {highScore}</div>
          <div className="score current_high_score">Current High Score: {currentHighScore}</div>
        </div>
      </div>
    </>
  );
}

export default GetPlaylist;
