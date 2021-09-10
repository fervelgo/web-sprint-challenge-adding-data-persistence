const express =require('express')
const router = express.Router()

const Resource = require('./model')

router.get('/', async (req,res, next) => {
    try{
        const all = await Resource.getAll()
        res.status(200).json(all)
    } catch  (err) {
        next(err)
    }
});

router.post('/', async (req,res,next) => {
    try{
        const createdResource = await Resource.createNew(req.body)
        res.status(201).json(createdResource)
    } catch (err) {
        next(err)
    }
});

module.exports = router