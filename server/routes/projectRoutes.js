const express = require("express");
const {
  createProject,
  getProject,
  getProjectById,
  updateProject,
  deleteProject,
} = require("../controllers/projectController");

const router = require("express").Router();

router.post("/", createProject);
router.get("/", getProject);
router.get("/:id", getProjectById);
router.put("/:id", updateProject);
router.delete("/:id", deleteProject);

module.exports = router;
