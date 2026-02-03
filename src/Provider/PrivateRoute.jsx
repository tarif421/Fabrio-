import React, { use } from "react";

import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../provider/AuthProvider/";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation()
//   console.log(location)
//   console.log(user);

if(loading) {
    return <div className="flex justify-center items-center h-screen ">
       <span  className="loading loading-spinner loading-xl"></span>
    </div>
}

  if (user && user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to="/auth/login"></Navigate>;
};

export default PrivateRoute;
