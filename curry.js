function add(a) {
    return function(b) {
        return a + b;
    }
}

const adder5 = add(5);
const adder10 = add(10);
console.log(adder10(10));

// map is higher order function, filter, sort
 