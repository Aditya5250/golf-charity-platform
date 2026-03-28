import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-20 py-5 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      
      <h1 className="text-xl font-semibold tracking-wide">
        ⛳ Golf<span className="text-accent">Charity</span>
      </h1>


      <div className="flex gap-6 text-sm text-gray-300">
        <button onClick={() => navigate("/login")} className="hover:text-white transition">
          Login
        </button>

        <button
          onClick={() => navigate("/register")}
          className="px-4 py-2 rounded-lg bg-accent text-black font-medium hover:scale-105 transition"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;