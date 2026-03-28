import User from "../model/User.js";
import Winner from "../model/Winner.js";

//Getting all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

//Getting all the winners
export const getAllWinners = async (req, res) => {
  try {
    const winners = await Winner.find().populate("userId");
    res.json(winners);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};