import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Firebase/AuthProvider";

const Assigment = () => {
    const{user}=useContext(AuthContext)
  const [filterData, setFilterData] = useState("");
  const [data, setdata] = useState([]);

 // const url=`http://localhost:5000/assigment?email=${user?.email`;
  const url=`http://localhost:5000/assigment?level=${filterData}`;
  useEffect(() => {
    axios.get(url, {withCredentials:true})
    .then(res=>{
        setdata(res.data)
    })
    // fetch(`http://localhost:5000/assigment?level=${filterData}`, {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error("Network response was not ok");
    //     }
    //     return response.json();
    //   })
    //   .then((data) => {
    //     //  console.log(data);
    //     setdata(data);
    //   })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [filterData]);

  //----------------------------------

  const handeldelete = (id) => {
    // console.log("delete", id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      console.log(result);
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/assigment/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((res) => {
            console.log(res);
            const remaining = data.filter((d) => d._id !== id);
            setdata(remaining);
            //  console.log(remaining,data);
            if (res.deletedCount > 0) {
              // window.location.reload()
              Swal.fire({
                title: "Deleted!",
                text: "Your craft has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  //console.log(filterData);
  //-------------

  return (
    <div className="">
      <select
        onChange={(e) => setFilterData(e.target.value)}
        className="select w-full max-w-xs font-bold text-xl mt-5 mb-5"
      >
        <option disabled hidden selected className="">
          Assigment Level
        </option>
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>

      <div className=" mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
        {data?.map((item) => {
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
                      <button className="btn bg-blue-400">View</button>
                    </Link>

                    <Link to={`/update/${item?._id}`}>
                      <button className="btn bg-green-400">Updata</button>
                    </Link>

                    <button
                      onClick={() => handeldelete(item?._id)}
                      className="btn bg-red-400"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Assigment;
