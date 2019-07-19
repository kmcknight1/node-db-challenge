const express = require("express");

const Projects = require("./project-model");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const projects = await Projects.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: "Failed to get projects" });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const project = await Projects.findById(id);
    const actions = await Projects.findActionsById(id);

    const newActions = actions.map(action => {
      return {
        ...action,
        complete: action.complete === 1 ? true : false
      };
    });

    res.json({
      ...project,
      complete: project.complete === 1 ? true : false,
      actions: [...newActions]
    });
  } catch (err) {
    res.status(500).json({ message: "Failed to get project" });
  }
});

router.post("/", async (req, res) => {
  const projectData = req.body;

  try {
    const project = await Projects.addProject(projectData);
    res.status(201).json(project);
  } catch (err) {
    res.status(500).json({ message: "Failed to create new project" });
  }
});

module.exports = router;
