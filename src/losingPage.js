import React from 'react';

const LosingPage = () => {

    const imageStyle = {
        width: '50px',
    }

    return (
        <section className='losingPage'>
            <div>
                Game Over!
            </div>
            <button>Play Again</button>
            <div className='links'>
                <a href="https://github.com/philling83">
                    Philip's Github
                    <img style={imageStyle} src='./images/Github.png' alt='github' />
                </a>
                <a href="https://github.com/sal-wav">
                    Salina's Github
                    <img style={imageStyle} src='./images/Github.png' alt='github' />
                </a>
                <a href="https://github.com/IvanGent">
                    Ivan's Github
                    <img style={imageStyle} src='./images/Github.png' alt='github' />
                </a>
            </div>
        </section>
    )
};

export default LosingPage;