const express = require('express')
const Resource = require('./model')
const router = express.Router()

router.get('/', (req,res,next) => {
    Resource.getResources()
        .then(resource => {
            res.status(200).json(resource)
        })
        .catch(err => {
            next(err)
        })
})

router.get('/:id', (req,res,next) => {
    const {id} = req.params
    Resource.getResources(id)
        .then(resource => {
            res.status(200).json(resource)
        })
        .catch(err => {
            next(err)
        })
})

router.post('/', (req,res,next) => {
    Resource.addResource(req.body)
        .then(newResource => {
            res.status(201).json(newResource)
        })
        .catch(err => {
            next(err)
        })
})

module.exports = router;