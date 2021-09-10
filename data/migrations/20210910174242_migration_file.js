exports.up = async function(knex) {
    await knex.schema
      .createTable('projects', table => {
          table.increments('project_id')
          table.string('project_name', 100).notNullable()
          table.string('project_description', 250)
          table.boolean('project_completed').defaultTo(0)
      })
      .createTable('resources', table => {
          table.increments('resource_id')
          table.string('resource_name', 100).notNullable().unique()
          table.string('resource_description', 250)
      })
      .createTable('tasks', table => {
          table.increments('task_id')
          table.string('task_description', 250).notNullable().unique()
          table.string('task_notes', 100)
          table.boolean('task_completed').defaultTo(0)
          table.integer('project_id')
              .unsigned()
              .notNullable()
              .references('project_id')
              .inTable('projects')
              .onDelete('RESTRICT')
              .onUpdate('RESTRICT')
      })
      .createTable('project_resources', table => {
          table.increments("project_resources_id")
          table.integer('project_id')
              .unsigned()
              .notNullable()
              .references('project_id')
              .inTable('projects')
              .onDelete('RESTRICT')
              .onUpdate('RESTRICT')
          table.integer('resource_id')
              .unsigned()
              .notNullable()
              .references('resource_id')
              .inTable('resources')
              .onDelete('RESTRICT')
              .onUpdate('RESTRICT')
      })
  
  };
  
  exports.down = async function(knex) {
    await knex.schema
      .dropTableIfExists('project_resources')
      .dropTableIfExists('tasks')
      .dropTableIfExists('resources')
      .dropTableIfExists('projects')
  };