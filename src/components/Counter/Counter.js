import React, { useState, useEffect } from 'react';

function Counter() {


    const [count, setCount] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        const intervalId = setInterval(() => {

            setCount(count => count + 1);

        }, 1000)
        return () => {                        // componentWillUnmount
            clearInterval(intervalId);
        }

    }, [])                                    // [] - componentDidMount


    return (
        <h1>
            {count}
        </h1>
    );
}

export default Counter;
