import React from 'react';

const LosingPage = () => {

    const losingStyle = {
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    }

    const imageStyle = {
        width: '25px',
    }

    const buttonStyle = {
        backgroundColor: 'red',
        outline: 'none',
        borderRadius: '5px',
        width: '100px',
    }

    return (
        <div style={losingStyle} className='losingPage'>
            <div>
                Game Over!
            </div>
            <button style={buttonStyle}>Play Again</button>
            <div className='links'>
                <a href="https://github.com/philling83">
                    Philip's Github
                    <img style={imageStyle} src='./images/Github.png' alt='github link' />
                </a>
                <a href="https://github.com/sal-wav">
                    Salina's Github
                    <img style={imageStyle} src='./images/Github.png' alt='github link' />
                </a>
                <a href="https://github.com/IvanGent">
                    Ivan's Github
                    <img style={imageStyle} src='./images/Github.png' alt='github link' />
                </a>
            </div>
        </div>
    )
};

export default LosingPage;