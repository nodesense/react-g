import React from 'react';

const ReduxCounter = function(props) {
    return (
        <div>
            <h2>Redux Counter {props.counter}</h2>
            <button onClick={props.reset}>Reset</button>
            <button onClick={ () => props.counterDispatchers.increment(1)}> +1</button>
            <button onClick={ () => props.counterDispatchers.decrement(1)}> -1</button>
        </div>
    )
}

export default ReduxCounter;