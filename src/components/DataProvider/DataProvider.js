/* import React, { Component } from 'react';

class DataProvider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            isLoading: true,
            error: null
        }
    }

    componentDidMount() {
        this.load();
    }

    load = () => {
            this.props.children[0]()
            .then((data) => {
                this.setState({
                    data
                })
            })
            .catch((error) => {
                this.setState({
                    error
                })
            })
            .finally(() => {
                this.setState({
                    isLoading: false
                })
            })
    }


    render() {
        return this.props.children[1](this.state);
    }
}

export default DataProvider; */


import { useState, useEffect } from "react";

export function useData(loadData) {
const [data, setData] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
    loadData()
    .then((data) => {
        setData(data)
    })
    .catch((error) => {
        setError(error)
    })
    .finally(() => {
        setIsLoading(false)
    })
}, [])

return {data, isLoading, error};

}
