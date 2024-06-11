require('express-async-errors')
const express = require('express')
const app = express()
const config = require('config')
const logger = require('./startup/logging')

require('./startup/db')(app)
require('./startup/routes')(app)
require('./startup/prod')(app)

const port = config.get('port') || 3000
const server = app.listen(port, () => logger.info(`Server is listening on port: ${port}`))

module.exports = server
