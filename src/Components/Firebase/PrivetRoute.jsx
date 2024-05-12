import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { AuthContext } from "./AuthProvider";

const PrivateRoute = ({ children }) => {
  const location= useLocation()
 // console.log(location.pathname);
  
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <div><div className="text-7xl flex justify-center p-10 w-[100vh]"><span className="loading loading-spinner items-center loading-lg"></span></div>
  </div>   
  }
  
  if (user?.email) {
    return children;
  }

  return <Navigate state={location.pathname} to="/signin"></Navigate>;
};

export default PrivateRoute;
PrivateRoute.propTypes = {
  children: PropTypes.node,
};
