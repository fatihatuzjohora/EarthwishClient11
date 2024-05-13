import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Feature = () => {
  const [data, setdata] = useState([]);
  const [limit, setLimit] = useState(6);
  useEffect(() => {
    fetch(`http://localhost:5000/assigment`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        //  console.log(data);
        setdata(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div className="mt-5 mb-5">
      <h1 className="text-3xl text-center font-bold mb-5 ">All Feature</h1>
      <div>
        <div className=" mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          {data?.slice(0, limit).map((item) => {
            return (
              <div key={item?._id}>
                <div className="w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-light text-gray-800 ">
                    Deadline: {item?.processingTime}
                    </span>
                    <span className="text-xs font-light text-gray-800 ">
                  Total Mark: {item?.mark}
                  </span>
                    <span className="px-3 py-1 text-blue-800 uppercase bg-blue-200 rounded-full ">
                      {item?.level}
                    </span>
                  </div>

                  <div>
                    <h1 className="mt-2 text-lg font-semibold text-gray-800 ">
                      {item?.titleName}
                    </h1>

                    <div className=" mt-3 mb-10 h-[200px]">
                      <img className="rounded-md" src={item?.photo} alt="" />
                    </div>

                    <p className="mt-2 text-sm text-gray-600 ">
                      {item?.description.slice(0, 90)}
                    </p>
                    <div className="flex gap-5 mt-3">
                      <Link to={`/ditels/${item?._id}`}>
                        <button className="btn">Touch Me</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Feature;
