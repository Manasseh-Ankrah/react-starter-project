import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CustomerDashboard = () => {
  // const token = localStorage.getItem("token");

  // console.log("====================================");
  // console.log("User token:", token);
  // console.log("====================================");
  // // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!token) {
  //     navigate("/", { replace: true });
  //   }
  // }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to the CustomerDashboard 🎉</h1>
      <p>This is a protected route. Only logged-in users can see this.</p>
    </div>
  );
};

export default CustomerDashboard;
