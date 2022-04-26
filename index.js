function receivesAFunction(callback) {
    return callback()
}

function returnsANamedFunction() {
    return function namedFunction() {
        console.log('hi')
    }
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log('hi')
    }
}