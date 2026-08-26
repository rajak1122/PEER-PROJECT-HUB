const Project = require("../models/Project");

const createProject = async (req, res) => {
  try {
    const { title, description, techStack, githubUrl, liveUrl, owner } =
      req.body;

    const project = await Project.create({
      title,
      description,
      techStack,
      githubUrl,
      liveUrl,
      owner,
    });

    res.status(201).json({
      message: "Project created sucessfully",
      project,
    });
  } catch (error) {
    res.status(200).json({
      message: "Failed to create project",
      error: error.message,
    });
  }
};

const getProject = async (req, res) => {
  try {
    const prevProjects = await Project.find().sort({ createdAt: -1 });

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

    if (!updateProject) {
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

module.exports = {
  createProject,
  getProject,
  getProjectById,
  updateProject,
  deleteProject,
};
