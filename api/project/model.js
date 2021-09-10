// build your `Project` model here

const db = require('../../data/dbConfig');

async function getAll() {
    const projects = await db('projects')
    return projects

    // if(projects.project_completed === 0) {
    //     const tweakedProject = [{...projects, project_completed: "false"}]
    //     return tweakedProject
    // } else {
    //     const tweakedProjects = {...projects, project_completed: "true"}
    //     return tweakedProjects
    // }
}

async function getById(project_id) {
    const result = await db('projects').where('project_id', project_id).first()
    return result
}

async function createNew(resource) {
    const [id] = await db('projects').insert(resource)
    return getById(id)
}

module.exports = {
    getAll,
    getById,
    createNew
}