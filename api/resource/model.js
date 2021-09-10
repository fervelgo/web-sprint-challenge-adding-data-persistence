// build your `Resource` model here
const db = require('../../data/dbConfig');

function getAll() {
    return db('resources')
}

async function getById(resource_id) {
    const result = await db('resources').where('resource_id', resource_id).first()
    return result
}

async function createNew(resource) {
    const [id] = await db('resources').insert(resource)
    return getById(id)
}

module.exports = {
    getAll,
    getById,
    createNew
}