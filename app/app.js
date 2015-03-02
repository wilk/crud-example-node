var express = require('express'),
    app = express(),
    api = require('./routes/api'),
    bodyParser = require('body-parser'),
    domainMiddleware = require('express-domain-middleware'),
    errorMiddleware = require('./middlewares/error'),
    loggerMiddleware = require('./middlewares/logger');

app.use(domainMiddleware);
app.use(loggerMiddleware());
app.use(bodyParser.json());
app.use('/api', api);
app.use(errorMiddleware());

module.exports = app;