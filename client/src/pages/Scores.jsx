import { useEffect, useState } from "react";
import { addScore, getScores } from "../services/scoreService";

const Scores = () => {
    const [scores, setScores] = useState([]);
    const [value, setValue] = useState("");

    // 📥 Fetch scores
    const fetchScores = async () => {
        try {
            const res = await getScores();
            setScores(res.data.scores);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchScores();
    }, []);

    // ➕ Add score
    const handleAdd = async (e) => {
        e.preventDefault();
        console.log("Form submitted with value:", value);

        // empty check
        if (!value) return alert("Enter a score");

        const num = Number(value);

        //invalid number
        if (isNaN(num)) return alert("Invalid number");

        //range check (PRD requirement)
        if (num < 1 || num > 45) {
            return alert("Score must be between 1 and 45");
        }

        try {
            console.log("sending request");
            await addScore({ value: num });
            console.log("score added");
            setValue("");
            fetchScores();
        } catch (err) {
            console.log("Error: ", err);
        }
    };

    return (
        <div className="max-w-xl mx-auto text-white">
            <h1 className="text-3xl font-bold mb-6 text-center">
                Your Scores
            </h1>

            <form onSubmit={handleAdd} className="flex gap-2 mb-6">
                <input
                    type="number"
                    placeholder="Enter score (1-45)"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="flex-1 p-3 rounded text-black"
                />
                <button
                    type="submit"
                    className="bg-green-500 px-5 py-2 rounded font-semibold"
                >
                    Add
                </button>
            </form>

          
            <div className="grid grid-cols-2 font-bold border-b border-white/30 pb-2 mb-3">
                <span>Score</span>
                <span className="text-right">Date</span>
            </div>

           
            {scores.length === 0 ? (
                <p className="text-center text-gray-300">No scores yet</p>
            ) : (
                scores.slice(0, 5).map((s, i) => (
                    <div
                        key={i}
                        className="grid grid-cols-2 py-3 gap-24 border-b border-white/10"
                    >
                        <span className="font-semibold">{s.value}</span>

                        <span className="text-right text-gray-300">
                            {new Date(s.date).toLocaleDateString()}
                        </span>
                    </div>
                ))
            )}
        </div>
    );
};

export default Scores;