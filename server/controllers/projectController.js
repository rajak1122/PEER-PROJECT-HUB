const Project = require("../models/Project");
const User = require("../models/User");

const createProject = async (req, res) => {
  try {
    const { firebaseUid, ...projectData } = req.body;

    console.log("🔥 Firebase UID:", firebaseUid);

    const user = await User.findOne({ firebaseUid });

    console.log("🔥 Mongo User:", user);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const project = await Project.create({
      ...projectData,
      owner: user._id,
    });

    res.status(201).json(project);
  } catch (error) {
    console.error("🔥 Failed to create project:", error);

    res.status(500).json({
      message: "Failed to create project",
      error: error.message,
    });
  }
};

const getProject = async (req, res) => {
  try {
    const prevProjects = await Project.find()
      .populate("owner", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json(prevProjects);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};

const getProjectById = async (req, res) => {
  try {
    const projectsByID = await Project.findById(req.params.id);

    if (!projectsByID) {
      return res.status(404).json({
        message: "Project Not Found",
      });
    }

    res.status(200).json(projectsByID);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};

const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    console.log("UPDATE ID:", id);
    console.log("UPDATE DATA:", updateData);

    const updateProjectByID = await Project.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    console.log("UPDATED PROJECT:", updateProjectByID);

    if (!updateProjectByID) {
      return res.status(404).json({
        message: "Project Not Fount",
      });
    }

    res.status(200).json({
      message: "Project updated sucessfully",
      updateProjectByID,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update project",
      error: error.message,
    });
  }
};

const deleteProject = async (req, res) => {
  try {
    const deletedProject = await Project.findByIdAndDelete(req.params.id);

    if (!deletedProject) {
      return res.status(404).json({
        message: "Project Not Found",
      });
    }

    res.status(200).json({
      message: "Project Deleted Sucessfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete project",
      error: error.message,
    });
  }
};

const likeProject = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      res.status(404).json({
        message: "ID is required",
      });
    }

    const likedProject = await Project.findByIdAndUpdate(
      id,
      {
        $inc: {
          likes: 1,
        },
      },
      {
        new: true,
      },
    );

    res.status(200).json({
      message: "Project liked sucessfully",
      likes: likedProject.likes,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to like Project",
      error: error.message,
    });
  }
};

module.exports = {
  createProject,
  getProject,
  getProjectById,
  updateProject,
  deleteProject,
  likeProject,
};
