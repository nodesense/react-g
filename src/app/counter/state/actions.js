
//actions.js 
import {INCREMENT, DECREMENT, RESET} from './action-types';

//action creators, helper/utility functions
// create and return action objects
export function increment(value) {
    return {
        type: INCREMENT,
        payload: { value }
    }
}

export function decrement(value) {
    return {
        type: DECREMENT,
        payload: { value }
    }
}

export const reset = () => ({
    type: RESET
})
