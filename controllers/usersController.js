
//// DEPENDENCIES, MODULES, CONFIGURATIONS ////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

const express = require('express')
const router = express.Router()

const UserModel = require('../models/UserModel')





//// ROUTE CONTROLLER FUNCTIONS ///////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

router.get('/api/users', (req, res) => {
  UserModel.find()
    .catch(err => console.log(err))
    .then(users => res.json(users))
})

router.post('/api/users', (req, res) => {
  console.log(req.body)
  UserModel.create(req.body)
    .then(user => {
      res.json(user)
    })
    .catch(err => console.log(err))
})

router.get('/api/users/:id', (req, res) => {
  UserModel.findById(req.params.id)
    .catch(err => console.log(err))
    .then(users => res.json(users))
})

router.put('/api/users/:id', (req, res) => {
  UserModel.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then(user => {
      res.json(user)
    })
    .catch(err => console.log(err))
})

router.delete('/api/users/:id', (req, res) => {
  UserModel.findOneAndRemove({_id: req.params.id})
    .then(user => {
      res.json(user)
    })
    .catch(err=> console.log(err))
})

//// EXPORT MODULES ///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

module.exports = router








//// END //////////////////////////////////////////////////////////////////////
