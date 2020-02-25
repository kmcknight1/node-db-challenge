const db = require("../data/db-config");

module.exports = {
  find,
  findById,
  addProject,
  findActionsById
};

function find() {
  return db("projects");
}

function findById(id) {
  return db("projects as p")
    .where({ id })
    .first();
}

function findActionsById(id) {
  return db("actions").where({ project_id: id });
}

function addProject(projectData) {
  return db("projects")
    .insert(projectData)
    .then(project => {
      const [id] = project;
      return {
        id: id,
        project_name: projectData.project_name,
        project_description: projectData.project_description,
        complete: false
      };
    });
}
