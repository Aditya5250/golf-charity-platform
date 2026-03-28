import Charity from "../model/charity.js";
import User from "../model/User.js";

//Creating Charity (Admin)
export const createCharity = async (req, res) => {
  try {
    const { name, description, image } = req.body;

    const charity = await Charity.create({
      name,
      description,
      image
    });

    res.json(charity);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};


// Getting All Charities
export const getCharities = async (req, res) => {
  try {
    const charities = await Charity.find();
    res.json(charities);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};


//Selecting Charity (User)
export const selectCharity = async (req, res) => {
  try {
    const userId = req.user.id;
    const { charityId, percentage } = req.body;

    const user = await User.findById(userId);

    user.charity = {
      ...user.charity,
      charityId,
      percentage: percentage || 10
    };

    await user.save();

    res.json({
      message: "Charity selected",
      charity: user.charity
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};