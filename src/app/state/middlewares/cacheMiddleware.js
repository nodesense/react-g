
const cacheMiddleware = ( {getState, dispatch}) => next => action => {
        const result = next(action);
        if (typeof action === 'object' && action.type.indexOf('COUNTER.') >= 0) {
            localStorage.setItem("counter", JSON.stringify(getState().counter));
        }
    
        return result;  
}

export {cacheMiddleware};
    