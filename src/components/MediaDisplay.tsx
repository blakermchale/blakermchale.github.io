import React from 'react';
import ReactPlayer from 'react-player/lazy';

// https://github.com/cyrilwanner/next-optimized-images/issues/182
const MediaDisplay = ({src, alt}) => {
    const width = "600px";
    if (src.endsWith(".mp4")) {
        return (
            <ReactPlayer url={src} controls="true" width={width}/>
        );
    }
    return (
        // <StaticImage
        // src="/data/gifs/swarm_team_ex.gif"
        // alt="hello"
        // />
        <img src={src} alt={alt} width={width}/>
    );
};

export default MediaDisplay;