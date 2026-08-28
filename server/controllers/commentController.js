const Comment = require("../models/Comment");
const User = require("../models/User");

const createComment = async (req, res) => {
  try {
    const { projectId } = req.params;
    const { firebaseUid, content } = req.body;

    const user = await User.findOne({ firebaseUid });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const comment = await Comment.create({
      project: projectId,
      user: user._id,
      content,
    });

    const populatedComment = await comment.populate("user", "name email");

    res.status(201).json(populatedComment);
  } catch (error) {
    console.error("Failed to create comment:", error);

    res.status(500).json({
      message: "Failed to create comment",
      error: error.message,
    });
  }
};

const getComments = async (req, res) => {
  try {
    const { projectId } = req.params;

    const comments = await Comment.find({
      project: projectId,
    })
      .populate("user", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json(comments);
  } catch (error) {
    console.error("Failed to fetch comments:", error);

    res.status(500).json({
      message: "Failed to fetch comments",
      error: error.message,
    });
  }
};

module.exports = {
  createComment,
  getComments,
};
