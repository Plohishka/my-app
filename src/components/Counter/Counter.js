import React, { Component } from 'react';

class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
        this.intervalId = null;
    }

    start() {

        this.intervalId = setInterval(() => {
        const { count } = this.state;

            this.setState({
                count: count + 1
            });

        }, 1000)
    }

    componentDidMount() {
        this.start();
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
        return true;
    }

    componentDidUpdate() {

    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }



    render() {
        const {count} = this.state;
        return (
            <>
    <h1>{count}</h1>
            </>
        );
    }
}

export default Counter;
