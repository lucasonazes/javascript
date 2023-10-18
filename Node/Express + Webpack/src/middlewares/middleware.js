exports.globalMiddleware = (req, res, next) => {
    res.locals.localVariable = 'This is the local value'
    next();
}

exports.otherMiddleware = (req, res, next) => {
    next();
}