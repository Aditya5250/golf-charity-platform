import { useEffect, useState } from "react";
import { getMe } from "../services/userService";
import { Link } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const [drawResult, setDrawResult] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await getMe();
                if (res && res.data) {
                    setUser(res.data.user);
                }
            } catch (err) {
                console.log("Error fetching User: ", err);
            }
        };

        fetchUser();
    }, []);

    const runDraw = async () => {
        try {
            const res = await axios.post("http://localhost:5000/api/draw/run");
            setDrawResult(res.data);
        } catch (err) {
            console.log("Draw error:", err);
        }
    };

    return (
        <div className="min-h-screen bg-black text-white p-6">

            <div className="max-w-4xl mx-auto">

                <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

                {/* User Card */}
                {user && (
                    <div className="bg-white/10 p-4 rounded mb-6">
                        <p className="text-lg font-semibold">{user.name}</p>
                        <p className="text-gray-300">{user.email}</p>
                    </div>
                )}

                {/* Actions */}
                <div className="flex gap-4 mb-6">
                    <Link to="/scores" className="bg-white/10 px-4 py-2 rounded hover:bg-white/20">
                        Scores
                    </Link>

                    <Link to="/charities" className="bg-white/10 px-4 py-2 rounded hover:bg-white/20">
                        Charities
                    </Link>
                </div>

                {/* Draw Button */}
                <button
                    onClick={runDraw}
                    className="bg-green-500 px-5 py-2 rounded text-black font-semibold"
                >
                    Run Monthly Draw
                </button>

                {/* Draw Result */}
                {drawResult && (
                    <div className="mt-6 bg-white/10 p-4 rounded">
                        <p className="font-bold">Draw Numbers:</p>
                        <p className="mb-4">{drawResult.numbers.join(", ")}</p>

                        <p className="font-bold">Winners:</p>
                        {drawResult.winners.length === 0 ? (
                            <p>No winners</p>
                        ) : (
                            drawResult.winners.map((w, i) => (
                                <p key={i}>
                                    {w.userId?.name || "User"} - Match: {w.matchType}
                                </p>
                            ))
                        )}
                    </div>
                )}
            </div>

        </div>
    );
};

export default Dashboard;