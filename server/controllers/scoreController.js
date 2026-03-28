import User from "../model/User.js";

export const addScore = async (req, res) => {
  try {
    const userId = req.user.id;
    const { value, date } = req.body;

    // If not in range
    if (value===undefined || 
        typeof value !=="number" ||
        value < 1 || value > 45) {
      return res.status(400).json({ message: "Score must be between 1 and 45" });
    }

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }



    // we maintain only 5 scores
    if (user.charity.scores.length >= 5) {
      user.charity.scores.shift(); // remove oldest
    }

    user.charity.scores.push({
      value,
      date: date || new Date()
    });

    await user.save();

    res.json({
      message: "Score added successfully",
      scores: user.charity.scores
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};



export const getScores = async (req, res) => {
  try {
    const userId = req.user.id;

    const user = await User.findById(userId);

    res.json({
      scores: user.charity.scores.reverse() // latest scores first
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }

};

export default {addScore, getScores};