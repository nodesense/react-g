import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props)
        
        // we have option to predict if the state of the component got changed or not
        // by default state immutable
        // shallow compare O(1) to detect if the object state got changed or not
        this.state = {
            counter: 0
        }
 
    }

    increment = (e) => {
        //BAD, mutable
        // this.state.counter++;
        // this.forceUpdate(); // force render

        // Good parts
        // setState asynchornous
        // setState takes an object as input
        // prevState = this.state
        // then later merge this object with this.state to current state
       
        // setState(object {}, callback called after mergeState and state is updated then calls render)
        // setState( functional setState () => {} ==> best practice)
        // setState({})

        // this.setState({
        //     counter: this.state.counter + 1
        // }, () => {
        //     this.setState({
        //         counter: this.state.counter + 1
        //     })
        // })

        // functional setState
        this.setState( (state) => {
            return { 
                counter: state.counter + 1
            }
        } )

        this.setState( (state) => ({ 
                counter: state.counter + 1
        }))
    }

    render() {
        console.log('Counter render ', this.state);
        return (
            <div>
                <h2>Counter</h2>
                <p>Counter {this.state.counter}</p>
                <button onClick={this.increment}>+1</button>
            </div>
        )
    }
}

export default Counter;