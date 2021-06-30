import React, { Component } from 'react';

class State extends Component{
    constructor(props){
        super(props);
        this.state = { date:  new Date().toLocaleTimeString()};
    }

    componentDidMount(){
        this.timerID = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount(){
        clearInterval(this.timerID)
    }

    tick(){
        this.setState({
            date: new Date().toLocaleTimeString()
        })
    }

    render(){
        return(
            <div>
                <h2>Time now!</h2>
                <h1>{this.state.date}</h1>
            </div>
        );
    }
}

setInterval(State, 1000)
export default State;