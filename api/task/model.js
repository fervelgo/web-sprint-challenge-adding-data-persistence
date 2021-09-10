
const db = require('../../data/dbConfig');

async function getAll() {
    const tasks  = await db('tasks as t')
        .leftJoin('projects as p', 'p.project_id', 't.project_id')
        .select('t.task_id', 't.task_description', 't.task_notes', 't.task_completed', 'p.project_name', 'p.project_description')

        return tasks
}

async function getById(task_id) {
    const result = await db('tasks').where('task_id', task_id).first()
    return result
}

async function createNew(task) {
    const [id] = await db('tasks').insert(task)
    return getById(id)
}

module.exports = {
    getAll,
    getById,
    createNew
}