exports.up = function(knex) {
  return knex.schema.createTable("projects", table => {
    table.increments();
    table.text("project_name").notNullable();
    table.text("project_description").notNullable();
    table
      .boolean("complete")
      .defaultTo(false)
      .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("projects");
};
