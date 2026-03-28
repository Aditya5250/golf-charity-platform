import User from "../model/User.js";
import Draw from "../model/Draw.js";
import Winner from "../model/Winner.js";
import generateDrawNumbers from "../utils/generateDrawNumbers.js";
import matchScores from "../utils/matchScore.js";

export const runDraw = async (req, res) => {
  try {
    // Generating numbers
    const numbers = generateDrawNumbers();

    const now = new Date();

    //Creating draw
    const draw = await Draw.create({
      numbers,
      month: now.getMonth() + 1,
      year: now.getFullYear()
    });

    // Getting all users
    const users = await User.find();

    const winners = [];

    for (let user of users) {
      if (!user.charity.scores || user.charity.scores.length === 0) continue;

      const matchCount = matchScores(user.charity.scores, numbers);

      let prize = 0;

      if (matchCount === 5) prize = 1000;
      else if (matchCount === 4) prize = 500;
      else if (matchCount === 3) prize = 200;
      else continue;

      const winner = await Winner.create({
        userId: user._id,
        drawId: draw._id,
        matchType: matchCount,
        prize
      });

      winners.push(winner);
    }

    res.json({
      message: "Draw completed",
      numbers,
      winners
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};
