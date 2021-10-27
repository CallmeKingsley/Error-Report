const express = require('express')
const router = express.Router()

const errorRoutes = require('./errorReportRoutes')

router.use('/error', errorRoutes)

module.exports = router
