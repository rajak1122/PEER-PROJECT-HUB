const User = require("../models/User");

const createUser = async (req, res) => {
  try {
    const { firebaseUid, name, email } = req.body;

    const userCount = await User.countDocuments();

    const userId = `PPH${String(userCount + 1).padStart(3, "0")}`;

    const user = await User.create({
      userId,
      firebaseUid,
      name,
      email,
    });

    res.status(200).json({
      message: "User Created Sucessfully",
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create user",
      error: error.message,
    });
  }
};

const getUser = async (req, res) => {
  try {
    const { firebaseUid } = req.params;

    const user = await User.findOne({ firebaseUid });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch user",
      error: error.message,
    });
  }
};

module.exports = {
  createUser,
  getUser,
};
