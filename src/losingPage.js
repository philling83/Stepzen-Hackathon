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
        width: '20px',
        margin: '10px',
        marginBottom: '0px',
    }

    const buttonStyle = {
        backgroundColor: 'red',
        outline: 'none',
        borderRadius: '10px',
        alignSelf: 'center',
        padding: '1rem 2rem',
        boxShadow: '0px 5px 5px gray',
        fontSize: '2.5rem'
    }

    const linkStyle = {
        textDecoration: 'none',
    }

    const textStyle = {
        fontSize: '8rem',
        alignText:'bottom'
    }

    const linksDivStyle = {
        display: 'flex',
        justifyContent: 'space-evenly',
    }

    return (
        <div style={losingStyle} className='losingPage'>
            <div style={textStyle}>
                Game Over!
            </div>
            {/* <button style={buttonStyle}>Play Again</button> */}
            <div style={buttonStyle} id='PlayAgainBtn'>Play Again</div>
            <div style={linksDivStyle} className='links'>
                <a style={linkStyle} href="https://github.com/philling83">
                    Philip's Github
                    <img style={imageStyle} src='./images/Github.png' alt='github link' />
                </a>
                <a style={linkStyle} href="https://github.com/sal-wav">
                    Salina's Github
                    <img style={imageStyle} src='./images/Github.png' alt='github link' />
                </a>
                <a style={linkStyle} href="https://github.com/IvanGent">
                    Ivan's Github
                    <img style={imageStyle} src='./images/Github.png' alt='github link' />
                </a>
            </div>
        </div>
    )
};

export default LosingPage;