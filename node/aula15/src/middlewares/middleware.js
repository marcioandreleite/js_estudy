// module.exports = (req, res, next) => {
//     next()
// }

exports.middlewareGlobal = (req, res, next) => {
    next()
}

exports.outroMiddleware = (req, res, next) => {
    next()
}
