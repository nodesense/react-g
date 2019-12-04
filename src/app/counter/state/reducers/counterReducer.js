// reducer.js
import {INCREMENT, DECREMENT, RESET} from '../action-types';

const INITIAL_STATE = 0;
export const counterReducer = (state = INITIAL_STATE, action) => {
    console.log('Counte reducer called', state, action)
    switch(action.type) {
        case INCREMENT:
                return state + action.payload.value;
        case DECREMENT:
                return state - action.payload.value;
        case RESET:
                return INITIAL_STATE
        default:
            return state;
    }
}
