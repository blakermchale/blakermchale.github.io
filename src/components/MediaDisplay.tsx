import React from 'react';
import ReactPlayer from 'react-player';

// https://github.com/cyrilwanner/next-optimized-images/issues/182
const MediaDisplay = ({src, alt}) => {
    if (src.endsWith(".mp4")) {
        return (
            <ReactPlayer url={src} controls="true"/>
        );
    }
    return (
        // <StaticImage
        // src="/data/gifs/swarm_team_ex.gif"
        // alt="hello"
        // />
        <img src={src} alt={alt} />
    );
};

export default MediaDisplay;