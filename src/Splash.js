import React from 'react';

const Splash = () => {
    return (
        <div className="splash-container">
            <div className="header-container">
                {/* <h1 className="header">The</h1> */}
                <h1 id="higher">Higher</h1>
                <h1 id="lower">Lower</h1>
                {/* <h1 className="header">Game</h1> */}
                <h2 className="main-subheader">Which song is more popular?</h2>
            </div>
            <div className="main-button-container">
                <button id="play-button" className="button">Start Playing!</button>
                <a href="https://github.com/philling83/Stepzen-Hackathon" className="button">GitHub Repo</a>
            </div>
            <div className="subheader-container">
                <p className="subheader">A frustratingly addictive game of higher or lower using song streams.</p>
                <p className="subheader">The app was developed in 4 days, using GraphQL, React, and Spotify's API library / algorithm, as a part of MintBean's April 2021 Hackathon.</p>
            </div>


            {/* about links */}
            <div className="button-container">
                <a className="link" href="https://github.com/sal-wav/">Salina's GitHub</a>
                <a className="link" href="https://github.com/philling83/">Philip's GitHub</a>
                <a className="link" href="https://github.com/IvanGent">Ivan's GitHub</a>
            </div>
        </div>
    )
}

export default Splash;
