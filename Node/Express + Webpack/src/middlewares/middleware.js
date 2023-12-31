exports.globalMiddleware = (req, res, next) => {
    res.locals.localVariable = 'This is the local value'
    next();
}

exports.otherMiddleware = (req, res, next) => {
    next();
}

exports.checkCsrfError = (err, req, res, next) => {
    if(err && 'EBADCSRFTOKEN' === err.code) {
        return res.render('ERROR 404');
    }
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}