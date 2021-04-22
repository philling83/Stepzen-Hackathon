import React from 'react';
import {useHistory} from 'react-router-dom';

const LosingPage = ({track2}) => {
    const history = useHistory();

    const losingStyle = {
        position: 'absolute',
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
        // backgroundColor: 'rgb(113, 211, 110)',
        backgroundColor: '#4f6ce9',
        outline: 'none',
        borderRadius: '10px',
        alignSelf: 'center',
        padding: '1rem 2rem',
        boxShadow: '0px 5px 5px gray',
        fontSize: '2.5rem',
        cursor: 'pointer',
        color: 'white',
    }

    const textStyle = {
        fontSize: '8rem',
        alignText:'bottom',
        color: 'white'
    }

    const linksDivStyle = {
        display: 'flex',
        justifyContent: 'space-evenly',
    }

    const aboutStyle = {
        textDecoration: 'none',
        marginTop: '30px',
        fontSize: '1.2rem',
        color: 'white',
    }

    const footerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'space-evenly'
    }

    const trackArtStyle = {
        display: 'block',
        opacity: '0.5',
        zIndex: '-1',
        alignSelf: 'center',
        maxWidth: '800px',
        padding: '5px',
        borderRadius: '20px',
        // backgroundColor: 'rgba(255,255,255,0)',
        boxShadow: '0px 0px 100px 100px rgba(255,255,255,1)'
    }

    const mainStyle = {
        display: 'flex',
        justifyContent: 'center',
        height: '100vh'
    }

    const handlePlayAgain = () => {
        history.push('/');
    }

    return (
        <div style={mainStyle}>
            {/* <div>

            </div> */}
            <img style={trackArtStyle} src="https://i.scdn.co/image/ab67616d0000b273575af309dea98bed121ebd3f" alt='background'/>
            {/* <img style={trackArtStyle} src={track2.data.} alt='background'/> This would be for when data is retrieved */}
            <div style={losingStyle} className='losingPage'>
                <div style={textStyle}>
                    Game Over!
                </div>
                <button className='button' onClick={handlePlayAgain} id='PlayAgainBtn'>Play Again</button>
                <div style={footerStyle}>
                    <div style={linksDivStyle} className='links'>
                        <a className='link' href="https://github.com/philling83">
                            Philip's Github
                            <img style={imageStyle} src='./images/Github.png' alt='github link' />
                        </a>
                        <a className='link' href="https://github.com/sal-wav">
                            Salina's Github
                            <img style={imageStyle} src='./images/Github.png' alt='github link' />
                        </a>
                        <a className='link' href="https://github.com/IvanGent">
                            Ivan's Github
                            <img style={imageStyle} src='./images/Github.png' alt='github link' />
                        </a>
                    </div>
                    <a style={aboutStyle} href="https://github.com/philling83/Stepzen-Hackathon">About</a>
                </div>
            </div>
        </div>
    )
};

export default LosingPage;