// build your `/api/projects` router here
const express = require('express')
const router = express.Router()

const Project = require('./model')

router.get('/', async (req,res, next) => {
    try{
        const all = await Project.getAll()
        res.status(200).json(all)
    } catch  (err) {
        next(err)
    }
});

router.post('/', async (req,res,next) => {
    try{
        const createdProject = await Project.createNew(req.body)
        res.status(201).json(createdProject)
    } catch (err) {
        next(err)
    }
});

module.exports = router