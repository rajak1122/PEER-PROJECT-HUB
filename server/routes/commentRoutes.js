const express = require("express");
const {
  createComment,
  getComments,
} = require("../controllers/commentController");

const router = require("express").Router();

router.get("/:projectId", getComments);
router.post("/:projectId", createComment);

module.exports = router;
