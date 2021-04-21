import React from 'react';
import {useHistory} from 'react-router-dom';

const LosingPage = () => {
    const history = useHistory();

    const losingStyle = {
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    }

    const imageStyle = {
        width: '20px',
        marginLeft: '10px',
        marginBottom: '-3px'
    }

    const buttonStyle = {
        backgroundColor: 'rgb(113, 211, 110)',
        outline: 'none',
        borderRadius: '10px',
        alignSelf: 'center',
        padding: '1rem 2rem',
        boxShadow: '0px 5px 5px gray',
        fontSize: '2.5rem',
        cursor: 'pointer',
    }

    const linkStyle = {
        textDecoration: 'none',
        fontSize: '1.2rem'
    }

    const textStyle = {
        fontSize: '8rem',
        alignText:'bottom'
    }

    const linksDivStyle = {
        display: 'flex',
        justifyContent: 'space-evenly',
    }

    const aboutStyle = {
        textDecoration: 'none',
        marginTop: '30px',
        fontSize: '1.2rem'
    }

    const footerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'space-evenly'
    }

    const handlePlayAgain = () => {
        history.push('/');
    }

    return (
        <div style={losingStyle} className='losingPage'>
            <div style={textStyle}>
                Game Over!
            </div>
            <div style={buttonStyle} onClick={handlePlayAgain} id='PlayAgainBtn'>Play Again</div>
            <div style={footerStyle}>
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
                <a style={aboutStyle} href="https://github.com/philling83/Stepzen-Hackathon">About</a>
            </div>
        </div>
    )
};

export default LosingPage;