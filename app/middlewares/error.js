var logger = require('../utils/logger');

module.exports = function () {
    return function (err, req, res, next) {
        logger.error(err);
        res.status(500).send(err.toString());
    };
};