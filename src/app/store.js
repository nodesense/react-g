import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import {loggerMiddleware, 
        cacheMiddleware, 
        timerMiddleware
        } from './state/middlewares';

import {counterReducer} from './counter/state/reducers';

// store.js
const rootReducer = combineReducers({
    counter: counterReducer,
    // items: cartReducer
});

const persistConfig = {
    key: 'root',
    storage,
  }
  
const persistedReducer = persistReducer(persistConfig, rootReducer)

// createStore internally call the reducer to initialize default value
const store = createStore(persistedReducer, 
                            {counter: 1000},  // preloadedState
                            applyMiddleware(loggerMiddleware, cacheMiddleware, timerMiddleware));

let persistor = persistStore(store)

export default store;

/* 
setTimeout( () => {
    persistor.purge().then(() => console.log('done cleaning'))
}, 10000)

// called at end of dispatcher, after all reducers, after store value assigned
store.subscribe(() => {
    console.log('subscrive 1 called')
})

const unsub2 = store.subscribe(() => {
    console.log('subscrive 2 called')
})

console.log('getState ', store.getState());
const action = {
    type: INCREMENT,
    payload: {
        value: 10
    }
}

// dispatch internally calls reducer with current state and action passed in arg
// then update the current state from value from reducers
store.dispatch(action)
console.log('getState ', store.getState());

unsub2(); // unsubscribe sub2

// store.dispatch(increment(1));
console.log('getState ', store.getState());

const {dispatch, getState} = store;
// dispatch(decrement(3));

console.log('getState ', getState());
*/
