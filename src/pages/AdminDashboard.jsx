import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  // const token = localStorage.getItem("token-new");
  // const token = JSON.parse(localStorage.getItem("token-new"));
  // console.log(token); // full object

  // const navigate = useNavigate();

  // useEffect(() => {
  //   const token = localStorage.getItem("token-new");

  //   // console.log("====================================");
  //   // console.log("User token:", JS);
  //   // console.log("====================================");

  //   if (!token) {
  //     navigate("/", { replace: true });
  //   }
  // }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to the AdminDashboard 🎉</h1>
      <p>This is a protected route. Only logged-in users can see this.</p>
    </div>
  );
};

export default AdminDashboard;
