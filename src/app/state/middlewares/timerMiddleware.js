export function timerMiddleware (store) {
    setInterval( () => {
        store.dispatch({type: 'COUNTER.INCREMENT', payload: {value: 1}})
    }, 5000);

    return function (nextFunc) {
    
        return function (action) {
            return nextFunc(action);
        }
    }
}