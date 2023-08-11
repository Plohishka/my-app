import React, {useState, useEffect} from "react";

const MouseTracker = (props) => {
    const [coordinates, setCoordinates] = useState({
        x: 0,
        y: 0
    })

    useEffect(() => {
        window.addEventListener('mousemove', tracker);
        return () => {
            window.removeEventListener('mousemove', tracker);
        }
    }, [])

    const tracker = (event) => {
        setCoordinates({
            x: event.clientX,
            y: event.clientY
        })
    }

    return (
        <div>
            <p>X: {coordinates.x}</p>
            <p>Y: {coordinates.y}</p>
        </div>
    );
}

export default MouseTracker;


