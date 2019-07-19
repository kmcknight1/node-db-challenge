const express = require("express");

const Actions = require("./action-model");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const actions = await Actions.find();
    res.json(actions);
  } catch (err) {
    res.status(500).json({ message: "Failed to get actions" });
  }
});

router.post("/", async (req, res) => {
  const actionData = req.body;

  try {
    const action = await Actions.addAction(actionData);
    res.status(201).json(action);
  } catch (err) {
    res.status(500).json({ message: "Failed to add action" });
  }
});

module.exports = router;
