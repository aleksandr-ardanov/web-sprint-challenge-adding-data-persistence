const express = require('express')
const Project = require('./model')
const router = express.Router()

router.get('/', (req,res,next) => { //gets all projects
    Project.getProjects()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(err => {
            next(err)
        })
})

router.get('/:id', (req,res,next) => {      // added as a stretch, project by id
    const {id} = req.params
    Project.getProjects(id)
        .then(project => {
            res.status(200).json(project)
        })
        .catch(err => {
            next(err)
        })
})

router.post('/', (req,res,next) => {    //add project
    Project.addProject(req.body)
        .then(newProject => {
            res.status(201).json(newProject)
        })
        .catch(err => {
            next(err)
        })
})

module.exports = router;