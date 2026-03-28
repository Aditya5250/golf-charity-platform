import API from "./api";

// Add score
export const addScore = (data) => API.post("/scores/add", data);

// Get scores
export const getScores = () => API.get("/scores");