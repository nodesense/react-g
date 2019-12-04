import React, {Component} from 'react';
import Footer from './components/Footer'
import Cart from './components/Cart'
import Counter from './components/Counter'
import Contact from './components/Contact'
import Test from  './components/Test';
import FuncState from  './components/FuncState';
import ReduxCounter from './counter/containers/ReduxCounter';

// h2, div, p, input are elements
// App, Header, Footer are REACT components

// Class Component
export default class App extends Component {
    // create and returns a virtual dom whenever render is called
    // developer should optimizally call render fucntion
    // react keyword
    render2() {
        console.log('App render');
        const pDom = React.createElement('p', {}, 'Para')
        const pDom2 = React.createElement('p', {}, 'Para2')
        // JSX 
        const pDom3 = <p>Para3</p>
        
        const pDom4 = false? <h2>true</h2>: <h2>false side</h2>;
        const pDom6 = false? React.createElement('p', {}, 'Para'): <h2>false side</h2>;

        const vDom = React.createElement('div', {}, pDom, pDom3, 
                             null, undefined, false, 0,  pDom2, pDom4)
         
        console.log('vDom', vDom)
        ;
        return vDom;
    }

    render() {
        console.log('App render');
         
        return (
            <div>
            
                <ReduxCounter  title="welcome" />
                 
                 <Footer />
            </div>
        )
    }
}