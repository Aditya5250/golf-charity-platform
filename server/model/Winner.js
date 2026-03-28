import mongoose from "mongoose";

const winnerSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  drawId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Draw"
  },
  matchType: Number, // 3, 4, 5
  prize: Number,
  status: {
    type: String,
    default: "pending"
  }
}, { timestamps: true });

export default mongoose.model("Winner", winnerSchema);