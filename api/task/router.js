const express = require('express')
const Task = require('./model')
const router = express.Router()

router.get('/', (req,res,next) => {
    Task.getTasks()
        .then(tasks => {
            res.status(200).json(tasks)
        })
        .catch(err => {
            next(err)
        })
})

router.get('/:id', (req,res,next) => {
    const {id} = req.params
    Task.getTasks(id)
        .then(tasks => {
            res.status(200).json(tasks)
        })
        .catch(err => {
            next(err)
        })
})

router.post('/', (req,res,next) => {
    Task.addTask(req.body)
        .then(newTask => {
            res.status(201).json(newTask)
        })
        .catch(err => {
            next(err)
        })
})

module.exports = router;