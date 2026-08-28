const express = require("express");
const { createUser, getUser } = require("../controllers/userController");

const router = require("express").Router();

router.post("/", createUser);
router.get("/:firebaseUid", getUser);

module.exports = router;
