import React, {useState} from 'react';

export default function FuncState(props) {

    const t = ['one'];
    //    current state value, setter method
    const [count, setCount] = useState(0); // count = 0
     
    console.log('state ', count, typeof count)
    const [tv, setT] = useState(t);
    console.log("tv is ", tv)

    return (
        <div>
            <h2>Func State {count}</h2>
                        
            <button onClick={() => {
                setT([...tv, "k"])
                setCount(count + 1)
            }}> + 1</button>
        </div>
    )
}