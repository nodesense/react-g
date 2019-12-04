// Ref
import React from 'react';
import { POINT_CONVERSION_COMPRESSED } from 'constants';

class Input extends React.Component {
    setMe() {
        console.log('SetMe called');
    }

    render() {
        return (
            <div>
                <span>{this.props.label}</span>
                <input name="something" value={this.props.value} />
            </div>
        )
    }
}

// no ref possible
// ref is not possible within functional component
function FuncInput(props) {
        return (
            <div>
                <span>{props.label}</span>
                <input name="something" value={props.value} />
            </div>
        )
}

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.lNameRef = React.createRef();
        this.inputCompRef = React.createRef();

        // Not possible
        this.inputFuncCompRef = React.createRef();

        this.state = {
            focusFName: false
        }
    }

    inputNow = () => {
        this.setState({
            focusFName: true
        })

        this.refs.fname.focus();
    }

    componentDidMount() {
        this.inputCompRef.current.setMe();
        console.log('ref for functional component ', this.inputFuncCompRef.current);
        // ref to access real dom
        // <input ref="fname" --> string refs, not recommended
        this.refs.fname.value = "Nila";
        //current is like ng nativeElement ie Real DOM Element 
        this.lNameRef.current.value = "Krish" 
        this.streetElement.value = "Sai Paradise"
        let i = 0;
        setInterval( () =>{
            this.refs.fname.value = "Nila-" + i + 1;
            i++;
            this.forceUpdate();
        }, 5000)
    }

    render() {
        return (
            <div>
                <p> Focus {this.state.focusFName.toString()}</p>

                <Input label="G Name" value="Gayathri"
                       ref={this.inputCompRef} 
                />

                <FuncInput label="Func Ref Attempt" value="KK"
                       ref={this.inputFuncCompRef}
                       />

                <input name="firstname" 
                       ref="fname"
                /> 
                 {/*
                to access this.refs.fname.focus() or vlaue = ""
                */}

                <input name="lastname"
                        ref = {this.lNameRef} />

                <input name="street"
                        ref = { (element) => this.streetElement = element } />

                <button onClick={this.inputNow}>Input Now</button>
            </div>
        )
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
        this.refs.fname.select();
    }
}

export default Contact;