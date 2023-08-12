import React, { useState, useEffect } from "react";

const MouseTracker = (props) => {
    const [coordinates, setCoordinates] = useState({
        x: 0,
        y: 0,
    })

    const [counter, setCounter] = useState(0);

    const clickHandler = () => {
        setCounter(counter + 1);
    }

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
        <div onClick={clickHandler} style={{ background: 'black', color: 'white' }}>
            <p>X: {coordinates.x}</p>
            <p>Y: {coordinates.y}</p>
            <p>Counter: {counter}</p>
        </div>
    );
}

export default MouseTracker;


