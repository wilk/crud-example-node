var config = require('../config/env'),
    bunyan = require('bunyan'),
    logger = bunyan.createLogger(config.logger);

module.exports = logger;