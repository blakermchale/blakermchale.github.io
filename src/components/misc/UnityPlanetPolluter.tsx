import { Link } from 'gatsby';
import React from 'react';
import Unity, { UnityContent } from "react-unity-webgl";

const unityBuildPath = "/data/planetpolluter/PlanetPolluterBuild/";
const unityBuildJson = unityBuildPath + "PolluterWeb.json";
const unityLoaderJs = unityBuildPath + "UnityLoader.js";

const UnityPlanetPolluter = () => {
    const unityContent = new UnityContent(
        unityBuildJson, unityLoaderJs
    );
    return (
        <Unity unityContent={unityContent} />
        // <>
        // <h4>
        //     <Link to="https://brockfenbert.com/planetpolluter.html">Playable game</Link> at my friend's website
        //     while this <Link to="https://github.com/jeffreylanters/react-unity-webgl/issues/229">issue</Link> is resolved with `react-unity-webgl`
        // </h4>
        // </>
    );
}

export default UnityPlanetPolluter;
