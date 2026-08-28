const express = require("express");
const {
  createProject,
  getProject,
  getProjectById,
  updateProject,
  deleteProject,
  likeProject,
} = require("../controllers/projectController");

const router = require("express").Router();

router.post(
  "/",
  (req, res, next) => {
    console.log("🔥 PROJECT POST ROUTE HIT");
    next();
  },
  createProject,
);
router.get("/", getProject);
router.get("/:id", getProjectById);
router.put("/:id", updateProject);
router.delete("/:id", deleteProject);
router.post("/:id/like", likeProject);

module.exports = router;
