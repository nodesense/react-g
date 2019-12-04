// bootstrap file
import ReactDOM, {render} from 'react-dom';
import React from 'react';

// render === ReactDOM.render
// take teh app component, deploy into html browser
// push the virtual dom to real dom or
// update real dom from virutla dom
// run the react event loop
import "./index.css"
import App from './app/App';

import store from './app/store';
import {Provider} from 'react-redux';
// real dom
const rootDOM  = document.getElementById('root');
 ;
render(<Provider store={store}>
    <App />
</Provider>, rootDOM);
