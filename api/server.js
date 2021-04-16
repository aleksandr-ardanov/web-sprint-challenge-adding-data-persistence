const express = require('express');
const resourceRouter = require('./resource/router')
const projectRouter = require('./project/router')
const taskRouter = require('./task/router')
const server = express()

server.use(express.json())

server.use('/api/resources', resourceRouter)
server.use('/api/projects', projectRouter)
server.use('/api/tasks', taskRouter)

server.use((err,req,res,next) => {
    res.status(500).json({message:err.message})
})

server.use("*",(req,res) => {
    res.status(404).json({message:"Page Not Found!"})
})

module.exports = server;