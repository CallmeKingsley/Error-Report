const errorModel = require('../Models/errorModel')
const mongoose = require('mongoose')

module.exports = {

  sendErrorReport: async (req, res) => {

    try {
      const user = await errorModel.findOne({ userId: req.body.user, errorMessage: req.body.errorMessage })
      console.log(user)
      if(user){

        res.status(200).json({
          message: 'successfully'
      })
      }else{
          const error = new errorModel({
              _id: new mongoose.Types.ObjectId(),
              userId: req.body.user,
              url: req.body.url,
              version: req.body.version,
              isFatal: req.body.isFatal,
              errorType: req.body.errorType,
              functionName: req.body.functionName,
              payload: req.body.payload,
              cause: req.body.cause,
              platform: req.body.platform,
              method: req.body.methood,
              build: req.body.build,
              errorMessage: req.body.errorMessage,
              dateCreated: new Date().toLocaleString()
          })

          await error.save()

          res.status(200).json({
              message: 'successfully'
          })
      }
       

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
  },

  deleteErrorReport: async (req, res) => {
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
