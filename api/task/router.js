const express =require('express')
const router = express.Router()

const Task = require('./model')

router.get('/', async (req,res, next) => {
    try{
        const all = await Task.getAll()
        res.status(200).json(all)
    } catch  (err) {
        next(err)
    }
});

router.post('/', async (req,res,next) => {
    try{
        const createdTask = await Task.createNew(req.body)
        res.status(201).json(createdTask)
    } catch (err) {
        next(err)
    }
});

module.exports = router