const express = require('express')
const Project = require('./model')
const router = express.Router()


router.get('/', (req,res,next) => {
    Project.getProjects()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(err => {
            next(err)
        })
})

router.post('/', (req,res,next) => {
    Project.addProject(req.body)
        .then(newProject => {
            res.status(201).json(newProject)
        })
        .catch(err => {
            next(err)
        })
})


module.exports = router;