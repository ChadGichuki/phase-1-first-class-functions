function receivesAFunction(cb) {
    cb()
    return "Done"
}

function returnsANamedFunction() {
    const namedFunction = function(){
        console.log("Does something")
    }
    return namedFunction
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("Does something also")
    }
}