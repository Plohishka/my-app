import React, { Component } from 'react';
import Counter from './Counter';

class CounterPage extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isMount: true
        }
    }




    render() {
        const {isMount} = this.state
        return (
            <>
                <button onClick={() => this.setState({isMount: !isMount})}>Click</button>
                {isMount ? <Counter/> : null }
            </>
        )
    }
}

export default CounterPage;
