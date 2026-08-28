const express = require("express");
const {
  createProject,
  getProject,
  getProjectById,
  updateProject,
  deleteProject,
  likeProject,
  getProjectByUserId,
} = require("../controllers/projectController");

const router = require("express").Router();

router.post("/", createProject);
router.get("/", getProject);
router.get("/:id", getProjectById);
router.put("/:id", updateProject);
router.delete("/:id", deleteProject);
router.post("/:id/like", likeProject);
router.get("/user/:userId", getProjectByUserId);

module.exports = router;
