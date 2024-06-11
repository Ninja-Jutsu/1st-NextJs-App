const mongoose = require('mongoose')
// require('dotenv').config()
const config = require('config')
const logger = require('./logging')

// Connect :
module.exports = function (app) {
  const DB_URL = config.get('db')
  mongoose
    .connect(DB_URL)
    .then(() => logger.info('Connected to MongoDB..'))
    .catch((err) => logger.error(err))
}
