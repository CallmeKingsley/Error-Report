const errorModel = require('../Models/errorModel')
const mongoose = require('mongoose')

module.exports = {

  sendErrorReport: async (req, res) => {
    try {
        const error = new errorModel({
            _id: new mongoose.Types.ObjectId(),
            user: req.body.user,
            url: req.body.url,
            version: req.body.version,
            status: req.body.status,
            device: req.body.device,
            details: req.body.details,
            payload: req.body.payload,
            error: req.body.error,
            location: req.body.location,
            method: req.body.methood,
            build: req.body.build
        })

        await error.save()

        res.status(200).json({
            message: 'successfully'
        })

    } catch (e) {
      res.status(500).json({
        error: e
      })
    }
  },

  getErrorReport: async (req, res) => {
    try {
        const allErrorModel = await errorModel.find({})

        res.status(200).json({
          errors: allErrorModel
        })
    } catch (e) {
        
      res.status(500).json({
        message: 'issue getting errors',
        error: e
      })
    }
  }
}
