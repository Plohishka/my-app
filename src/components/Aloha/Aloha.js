import React, { Component } from 'react';


class Aloha extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isGreeting: true
        }
    }

    clickHandler = () => {
        this.setState({
            isGreeting: !this.state.isGreeting
        })
    }


    render() {
        const { isGreeting } = this.state;
        const {name, lastName} = this.props;
        const greetingText = isGreeting ? 'Hello' : 'Bue';

        return <h1 onClick={() => { this.clickHandler() }}>{greetingText} {name} {lastName}</h1>
    }
}

export default Aloha;

