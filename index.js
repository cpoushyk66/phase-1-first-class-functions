function callerinoFunction ()
{
}

function receivesAFunction(callback)
{
    return callback()
}

function returnsANamedFunction() {
    return callerinoFunction;
}

function returnsAnAnonymousFunction() {
    return function () {};
}