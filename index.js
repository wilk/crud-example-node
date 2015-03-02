var app = require('./app/app'),
    config = require('./app/config/env'),
    logger = require('./app/utils/logger'),
    db = require('./app/utils/db');

db.on('error', function (err) {
    logger.error(err);
});

db.once('open', function () {
    logger.info('Database connection is ready');
    app.listen(config.express.port, function () {
        logger.info('Application is listening on port', config.express.port);
    });
});