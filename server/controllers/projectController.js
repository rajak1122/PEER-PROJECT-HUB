const Project = require("../models/Project");
const User = require("../models/User");

const createProject = async (req, res) => {
  try {
    const { firebaseUid, ...projectData } = req.body;

    const user = await User.findOne({ firebaseUid });

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
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        message: "Project Not Found",
      });
    }

    const owner = await User.findById(project.owner).select("name email");

    const projectData = {
      ...project.toObject(),
      owner: owner,
    };

    res.status(200).json(projectData);
  } catch (error) {

    res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};

const getProjectByUserId = async (req, res) => {
  try {
    const { userId } = req.params;

    const projectsByUserId = await Project.find({
      owner: userId,
    });

    res.status(200).json(projectsByUserId);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch user projects",
      error: error.message,
    });
  }
};

const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updateProjectByID = await Project.findByIdAndUpdate(id, updateData, {
      new: true,
    });

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
  getProjectByUserId,
};
