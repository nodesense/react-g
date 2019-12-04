
    //middleware.js

    // dispatch --> middlewares --> reducers
    //                  forward/not-forward

    //--> dispatch --> m1 -> m2 --> m3 
    
export function loggerMiddleware (store) {
        console.log('loggerMiddleware store')
        // called during createStore
        return function (nextFunc) {
            // called during createStore
            console.log('loggerMiddleware next')
            return function (action) {
                // called during dispatch
                console.log('loggerMiddleware action', action)
                // call any middleware if present, or calls reducer
                const result =  nextFunc(action);

                console.log("result ", result);
                return result;
            }
        }
    }
