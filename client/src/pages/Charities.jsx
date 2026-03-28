import { useEffect, useState } from "react";
import { getCharities, selectCharity } from "../services/charityService";

const Charities = () => {
  const [charities, setCharities] = useState([]);

  useEffect(() => {
    const fetchCharities = async () => {
      try {
        const res = await getCharities();
        setCharities(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCharities();
  }, []);

  const handleSelect = async (id) => {
    try {
      await selectCharity({ charityId: id, percentage: 10 });
      alert("Charity selected");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-6">Charities</h1>

      {charities.map((c) => (
        <div
          key={c._id}
          className="bg-white/10 p-4 rounded mb-4 flex justify-between"
        >
          <div>
            <h2 className="font-semibold">{c.name}</h2>
            <p className="text-sm text-gray-300">{c.description}</p>
          </div>

          <button
            onClick={() => handleSelect(c._id)}
            className="bg-green-500 px-3 py-1 rounded text-black"
          >
            Select
          </button>
        </div>
      ))}
    </div>
  );
};

export default Charities;