import React from "react";

const MAX_POSSIBLE_HEIGHT = 2000;

// https://stackoverflow.com/questions/61358400/how-to-collapse-part-of-the-text-inside-a-card-in-react-bootstrap
const Expandable = ({ maxHeight, children }) => {
    const ref = React.useRef();
    const [shouldShowExpand, setShouldShowExpand] = React.useState(false);
    const [expanded, setExpanded] = React.useState(true);

    const isBrowser = () => typeof window !== "undefined";

    function handleExpand() {
        if ((ref.current.scrollHeight - 40) > maxHeight) {
            if (!shouldShowExpand) {
                console.log("Showing expanded ", shouldShowExpand);
                setShouldShowExpand(true);
                setExpanded(false);
            }
        } else {
            setShouldShowExpand(false);
            setExpanded(true);
        }
    }
    function handleResize() {
        handleExpand();
    };

    isBrowser() && window.addEventListener('resize', handleResize);

    React.useEffect(() => {
        handleExpand()
    }, [maxHeight])
    let style = { 
        maxHeight: expanded ? MAX_POSSIBLE_HEIGHT : maxHeight,
        overflow: 'hidden', transition: 'max-height 0.2s ease',
    };
    let maskImage = 'linear-gradient(to bottom, black 50%, transparent 100%)';
    if (shouldShowExpand && !expanded) {
        style["WebkitMaskImage"] = maskImage;
        style["maskImage"] = maskImage;
    }
    

    return (
        <div ref={ref}>
        <div
            style={style}
        >
            {children}
        </div>
        {shouldShowExpand && (
            <button onClick={() => setExpanded(!expanded)}>{expanded ? 'Less' : 'Expand'}</button>
        )}
        </div>
    );
};

export default Expandable;
