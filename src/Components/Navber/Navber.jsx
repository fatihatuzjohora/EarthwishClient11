import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Firebase/AuthProvider";

const Navber = () => {
  //--------------------
  const { user, logOut } = useContext(AuthContext);
  //--------------------------
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("synthwave");
    } else {
      setTheme("light");
    }
  };
  // console.log(theme);
  //--------------------

  const handleLogOut = () => {
    logOut()
      .then(() => {
        // console.log("user log Out succefully");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  // console.log(user);
  // //------------------------

  const links = (
    <div className=" flex md:flex-row flex-col font-semibold mt-5">
      <NavLink className="mr-5" to="/">
        Home
      </NavLink>
      <NavLink className="mr-5" to="/assigment">
        Assignments
      </NavLink>

      {user && (
        <>
          <NavLink className="mr-5" to="/createassigment">
            Create Assignments
          </NavLink>
          <NavLink className="mr-5" to="/pendingassigment">
            Pending Assignments
          </NavLink>
        </>
      )}
      {/* <NavLink className="mr-5" to="/contact">
        ContactUs
      </NavLink>
      <NavLink className="mr-5" to="/about">
        AboutUs
      </NavLink> */}
      <NavLink className="mr-5" to="/signin">
        login
      </NavLink>
    </div>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm container px-4 mt-5 ">
      <div className="dropdown ">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52"
        >
          {links}
        </ul>
      </div>
      <div className="flex-1">
        <div className="flex gap-2 items-center">
          <img
            className="w-[70px] h-[50px]"
            src="/public/group-study-4029949-3345550.webp"
            alt=""
          />
          <span className=" hidden lg:flex text-2xl font-bold">
            Earthwise Explorers
          </span>

          {/* dark light start  */}

          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
              onChange={handleToggle}
              type="checkbox"
              className="theme-controller"
              // value="synthwave"
            />

            {/* sun icon */}
            <svg
              className="swap-off fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-on fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>

          {/* dark light end  */}
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="flex-none">
        <div className="dropdown dropdown-end z-50">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar tooltip tooltip-top"
            data-tip={user?.displayName}
          >
            <div className="w-10 rounded-full" title="">
              <img
                referrerPolicy="no-referrer"
                alt="User Profile Photo"
                src={user?.photoURL}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {user && (
              <>
                <NavLink
                  to="/profile"
                  className="justify-between mt-2 font-semibold"
                >
                  My Profile
                </NavLink>
                <NavLink to="/mysubmitted" className="mt-2 font-semibold">
                  My Attempted Assignments
                </NavLink>
              </>
            )}

            <NavLink to="/signup" className=" mt-2 font-semibold">
              <button onClick={handleLogOut}>Logout</button>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>

    //         {user ? (
    //           <>
    //             <div
    //               className="tooltip tooltip-bottom"
    //               data-tip={user.displayName}
    //             >
    //               <div
    //                 tabIndex={0}
    //                 role="button"
    //                 className="btn mr-2 btn-ghost btn-circle avatar"
    //               >
    //                 <div className="w-10 rounded-full ">
    //                   <img alt="logo" src={user.photoURL} />
    //                 </div>
    //               </div>
    //             </div>
    //             <Link to="/signup">
    //               <button
    //                 onClick={handleLogOut}
    //                 className="btn text-2xl font-semibold"
    //               >
    //                 Sign Out
    //               </button>
    //             </Link>
    //           </>
    //         ) : (
    //           <>
    //             <div
    //               tabIndex={0}
    //               role="button"
    //               data-tip="hello"
    //               className="btn mr-2 btn-ghost btn-circle avatar  "
    //             >
    //               <div className="w-10 rounded-full ">
    //                 {/* <img alt="logo" src={logo} /> */}
    //               </div>
    //             </div>

    //             <Link to="/signin">
    //               <button className="btn text-2xl font-semibold">
    //                 Sign In
    //               </button>
    //             </Link>
    //           </>
    //         )}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Navber;
