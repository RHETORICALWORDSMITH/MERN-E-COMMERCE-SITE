import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import Clock from "./Clock";
import Footer from "./Footer";
import { useSelector } from "react-redux";

const PurchaseHistory = () => {
  const currEmail = useSelector((state) => state.email.currEmail);
  console.log("currEmail");
  console.log(currEmail);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isHistory, setisHistory] = useState(false);

  useEffect(() => {
    const getHistory = async () => {
      try {
        const res = await axios.get("http://localhost:3000/history/getfromDB");
        const data = res.data;

        const filteredData = data.filter((item) => item.email === currEmail);
        console.log("filteredData");
        console.log(filteredData);

        setHistory(filteredData); // Set the fetched data to state
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setLoading(false); // Set loading to false when done
      }
    };

    getHistory();
  }, []);
  console.log("history");
  console.log(history);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <Navbar />
      <Clock />
      <div className="overflow-auto h-96  mb-28 no-scrollbar">
        <table className="table mx-auto w-full md:w-auto">
          {/* head */}
          <thead>
            <tr>
              <th className="text-black dark:text-white text-xl">Item</th>
              <th className="text-black dark:text-white text-xl">Date</th>
              <th className="text-black dark:text-white text-xl">Count</th>
              <th className="text-black dark:text-white text-xl">Bill</th>
            </tr>
          </thead>
          <tbody>
            {history.map((item) => (
              <tr key={item._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={
                            item.image ||
                            "https://img.daisyui.com/images/profile/demo/2@94.webp"
                          }
                          alt={item.name || "Item Image"}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.name}</div>
                      <div className="text-sm opacity-50">{`Address: ${item.location}`}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {new Date(item.date).toLocaleDateString()}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {item.category}
                  </span>
                </td>
                <td>{item.noItem}</td>
                <td>
                  <button className="btn btn-ghost btn-xs">{item.price * item.noItem}$</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {history.length == 0 && (
          <div className="text-red-500 w-auto flex justify-center items-center mt-5 mb-16  text-5xl">
            Buy Something! <span className="emoji emoji-large">💀</span>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default PurchaseHistory;
