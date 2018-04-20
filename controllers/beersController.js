
//// DEPENDENCIES, MODULES, CONFIGURATIONS ////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

const express = require('express')
const router = express.Router()

const BeerModel = require('../models/BeerModel')





//// ROUTE CONTROLLER FUNCTIONS ///////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

router.get('/api/beers', (req, res) => {
  BeerModel.find()
    .catch(err => console.log(err))
    .then(beers => res.json(beers))
})

router.post('/api/beers', (req, res) => {
  console.log(req.body)
  BeerModel.create(req.body)
    .then(beer => {
      res.json(beer)
    })
    .catch(err => console.log(err))
})

router.get('/api/beers/:id', (req, res) => {
  BeerModel.findById(req.params.id)
    .catch(err => console.log(err))
    .then(beers => res.json(beers))
})

router.put('/api/beers/:id', (req, res) => {
  BeerModel.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then(beer => {
      res.json(beer)
    })
    .catch(err => console.log(err))
})

router.delete('/api/beers/:id', (req, res) => {
  BeerModel.findOneAndRemove({_id: req.params.id})
    .then(beer => {
      res.json(beer)
    })
    .catch(err=> console.log(err))
})

//// EXPORT MODULES ///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

module.exports = router








//// END //////////////////////////////////////////////////////////////////////
