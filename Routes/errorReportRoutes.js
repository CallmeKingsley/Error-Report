const express = require('express')
const router = express.Router()
const controller = require('../Controllers').errorReportController

router.post('/sendError', controller.sendErrorReport)
router.get('/getErrors', controller.getErrorReport)
router.get('/deleteErrors', controller.deleteErrorReport)


module.exports = router