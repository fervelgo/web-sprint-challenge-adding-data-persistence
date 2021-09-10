// build your `Resource` model here
const db = require('../../data/dbConfig');

function getAll() {
    return db('resources')
}

async function getById(id) {
    const result = await db('resources').where('id', id).first()
    return result
}

async function createNew(resource) {
    const [id] =await db('resources').insert(resource)
    return getById(id)
}

module.exports = {
    getAll,
    getById,
    createNew
}