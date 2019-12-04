src
    app
        core 
            components
                -- componet
                -- component
            containers
            state
                services [api calls]
                selectors
                reducers
                action-types.js
        shared
            components
            containers

        product
            pages
            components
                -- ProductList
                -- Productedit...
            containers
            state
                services [api calls]
                selectors
                reducers
                action-types.js

        cart
            pages
                CartPage [Presenter Component]
            components
                -- CartList
                -- CartSummary...
            containers
                CartPage [Presenter Component]
                CartList
                CartSummary
            state
                services [api calls]
                selectors
                reducers
                action-types.js

            Routes.js


