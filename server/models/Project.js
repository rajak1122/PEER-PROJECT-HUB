const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    techStack: {
      type: [String],
      default: [],
    },

    githubUrl: {
      type: String,
      trim: true,
    },

    liveUrl: {
      type: String,
      trim: true,
    },

    owner: {
      type: String,
      required: true,
    },

    likes: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Project", projectSchema);
