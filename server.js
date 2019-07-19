const express = require("express");
const helmet = require("helmet");

// const projectRouter = require("./projects/project-router");
// const actionRouter = require("./actions/action-router");

const server = express();

server.use(helmet());
server.use(express.json());

server.get("/", (req, res) => {
  res.send("<h1>Sprint Challenge WOOHOO!</h1>");
});

// server.use("/api/projects", projectRouter);
// server.use("/api/actions", actionRouter);

module.exports = server;
