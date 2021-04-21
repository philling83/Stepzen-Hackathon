import React from 'react';

const Splash = () => {
    return (
        <div className="splash-container">
            <h1>The Higher Lower Game</h1>
            <h2>Which song has more streams?</h2>
            <div className="button-container">
                <button>Play</button>
                <button>GitHub Repo</button>
            </div>

            {/* about links */}
            <div className="button-container">
                <a href="https://github.com/sal-wav/">Salina's GitHub</a>
                <a href="https://github.com/philling83/">Phillip's GitHub</a>
                <a href="https://github.com/IvanGent">Ivan's GitHub</a>
            </div>
        </div>
    )
}

export default Splash;
