import React from 'react';
import Unity, { UnityContent } from "react-unity-webgl"

const unityBuildPath = "/data/planetpolluter/PlanetPolluterBuild/";
const unityBuildJson = unityBuildPath + "PolluterWeb.json";
const unityLoaderJs = unityBuildPath + "UnityLoader.js";

const UnityPlanetPolluter = () => {
    const [unityContent, setUnityContent] = React.useState(null);
    React.useEffect(() => {
        setUnityContent(new UnityContent(
            unityBuildJson, unityLoaderJs
        ));
    })
    // const unityContent = new UnityContent(
    //     unityBuildJson, unityLoaderJs
    // );
    if (unityContent == null) {
        return (<>
        <h4>
            <a href="https://brockfenbert.com/planetpolluter.html">Playable game</a> at my friend's website
            while this <a href="https://github.com/jeffreylanters/react-unity-webgl/issues/229">issue</a> is resolved with `react-unity-webgl`
        </h4>
        </>);
    }
    else {
        return (
            <Unity unityContent={unityContent} />
            
        );
    }
}

export default UnityPlanetPolluter;
