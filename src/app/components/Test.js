import React from 'react';

export default class Test extends React.Component {
    constructor(props) {
        super(props)
        this.state = {r: 0}
    }
    componentDidMount2() {
        this.handle1 = setInterval( () => {
            const r = Math.random();
            console.log("in timer 1", r, new Date().getTime());
            this.setState({r})
        }, 0);
        this.handle2 = setInterval( () => {
            const r = Math.random();
            console.log("in timer 2", r, new Date().getTime());
            this.setState({r})
        }, 0);
        this.handle3 = setInterval( () => {
            const r = Math.random();
            console.log("in timer 3", r, new Date().getTime());
            this.setState({r})
        }, 0);
    }

    mouseMove = () => {
        const r = Math.random();
        console.log("in mousemove", r, new Date().getTime());
        this.setState({r})
    }


    keypress = () => {
        const r = Math.random();
        console.log("in keypress", r, new Date().getTime());
        this.setState({r})
    }
    stop = () => {
      clearInterval(this.handle1)
      clearInterval(this.handle2)
      clearInterval(this.handle3)
    }

    render() {
        console.log('Test Render', this.state.r, new Date().getTime());
        return (
            <div onMouseMove={this.mouseMove}
                
            >
                <h2>Test</h2>
                <button onClick={this.stop}>Stop</button>
                <input  onKeyPress={this.keypress}   />
            </div>
        )
    }
}