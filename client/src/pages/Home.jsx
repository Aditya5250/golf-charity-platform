import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden">

      <Navbar />

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0e172d] via-[#0B1120] to-black"></div>

      {/* Glow effects */}
      <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-green-500/20 blur-[160px] rounded-full"></div>
      <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-yellow-400/20 blur-[160px] rounded-full"></div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 min-h-screen">

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold max-w-3xl leading-tight"
        >
          Turn your <span className="text-accent">golf game</span> into real{" "}
          <span className="text-gold">impact</span>.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 text-gray-400 max-w-xl"
        >
          Track performance. Enter draws. Support causes.  
          One platform. Real purpose.
        </motion.p>

        {/* SINGLE CTA */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={() => navigate("/register")}
          className="mt-10 px-8 py-4 rounded-xl bg-gradient-to-r from-green-400 to-emerald-500 text-black font-semibold shadow-glow hover:scale-105 transition"
        >
          Start Playing
        </motion.button>

        {/* MINI FEATURE TAGS (PREMIUM TOUCH) */}
        <div className="mt-16 flex flex-wrap justify-center gap-4 text-sm text-gray-300">

          <div className="px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">
            🎯 Smart Score Tracking
          </div>

          <div className="px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">
            🏆 Monthly Rewards
          </div>

          <div className="px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">
            ❤️ Charity Contribution
          </div>

        </div>

      </div>
    </div>
  );
};

export default Home;