import React, { Component } from 'react'
import './Clock.css'
import Author from '../Author/Author';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date(),
            date: new Date()
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            time: new Date(),
            date: new Date()
        });
    }

    render() {
        return (
            <div className="clock">
                <h1>Horário de ... </h1>
                <h2>Agora são exatamente {this.state.time.toLocaleTimeString()} do dia {this.state.date.toLocaleDateString()}</h2>
                <Author />
            </div>
        );
    }
}

export default Clock