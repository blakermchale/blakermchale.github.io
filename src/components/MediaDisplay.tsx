import React from 'react';
import ReactPlayer from 'react-player/lazy';
import styled, { css } from 'styled-components';

// https://github.com/cyrilwanner/next-optimized-images/issues/182
const MediaDisplay = ({src, alt}) => {
    let inner = (
        <></>
    )
    if (src.endsWith(".mp4") || src.includes("www.youtube.com")) {
        inner = (
            <StyledReactPlayer url={src} controls/>
        );
    }
    else {
        inner = (
            // <StaticImage
            // src="/data/gifs/swarm_team_ex.gif"
            // alt="hello"
            // />
            <StyledImg src={src} alt={alt}/>
        );
    }
    return inner;
};


const Media = css`
    width: 600px;
    display: block;
    margin: auto;

    @media (max-width: 450px) {
        width: 350px !important;
        height: auto !important;
    }

    @media (max-width: 400px) {
        width: 300px !important;
        height: auto !important;
    }
`

const StyledReactPlayer = styled(ReactPlayer)`
    ${Media}
`

const StyledImg = styled.img`
    ${Media}
`

export default MediaDisplay;