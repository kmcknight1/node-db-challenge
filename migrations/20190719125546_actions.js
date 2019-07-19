exports.up = function(knex) {
  return knex.schema.createTable("actions", table => {
    table.increments();
    table.text("action_name").notNullable();
    table.text("action_description").notNullable();
    table
      .integer("project_id")
      .unsigned()
      .references("id")
      .inTable("projects")
      .notNullable();
    table.text("notes").notNullable();
    table
      .boolean("complete")
      .defaultTo(false)
      .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("actions");
};
