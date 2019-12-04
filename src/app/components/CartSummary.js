// CartSummary.js
import React, {Component} from "react";
import PropTypes from "prop-types";

//TODO: PropTypes

// TODO: PureComponent
 class CartSummary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            discount: 0,
            grandTotal: 0
        }
    }
 
    //TODO: componentWillMount

    // creation cycle
    componentWillMount() {
        this.recalculate(this.props);
    }

    //TODO: componentWillReceiveProps, recalculate 
 

    // invoked on parent render method on update cycle
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps this.props', this.props)
        console.log('nextPrps ', nextProps)
        this.recalculate(nextProps);
    }

    test = () => {
        this.setState( {flag: true});
    }


    //TODO: shouldComponentUpdate

    recalculate(props) {
        let discount = 0;

        if (props.count >= 10) {
            discount = 20;
        } else if (props.count >= 5) {
            discount = 10;
        }

        let grandTotal = props.amount - (props.amount * discount / 100);

        this.setState({
            discount, 
            grandTotal
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Cart Summary shouldComponentUpdate', nextProps, nextState)

        return nextProps.count !== this.props.count || 
                nextProps.amount !== this.props.amount || 
                nextState.discount !== this.state.discount ||
                nextState.grandTotal !== this.state.grandTotal;
    }
     

    // this.props is not yet update with nextProps
    // this.state is not yet updated with nextState
    componentWillUpdate(nextProps, nextState) {
        console.log('Cart Summary componentWillUpdate', nextProps, nextState)
    }

    
    render() {
        console.log("CartSummary Render");
        return (
            <div> 
            <h2>Cart Summary</h2>
            <p> Amount : {this.props.amount} </p>
            <p> Count : {this.props.count} </p>

            <p> Discount: {this.state.discount} %</p>
            <p> Grand Total: {this.state.grandTotal} </p>

            <button onClick={this.test}> Test </button>
            </div>
        )
    }


    // this.props is the current props, got from parent, means updated
    // this.state same as parent
    componentDidUpdate(oldProps, oldState) {
        console.log('Cart Summary componentDidUpdate', oldProps, oldState)
    }

} 


CartSummary.defaultProps = {
    
}

CartSummary.propTypes = {
    
}

export default CartSummary;