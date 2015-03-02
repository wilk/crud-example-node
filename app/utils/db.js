var mongoose = require('mongoose'),
    config = require('../config/env');

module.exports = mongoose.connect(config.db.host).connection;