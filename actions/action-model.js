const db = require("../data/db-config");

module.exports = {
  find,
  addAction
};

function find() {
  return db("actions");
}

function addAction(actionData) {
  return db("actions")
    .insert(actionData)
    .then(action => {
      const [id] = action;
      return {
        id: id,
        action_name: actionData.action_name,
        action_description: actionData.action_description,
        project_id: actionData.project_id,
        notes: actionData.notes
      };
    });
}
