import React, { useState } from "react";
import "../styles/SignupPage.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SigninPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  // Second approach
  // const [firstName, setFirstName] = useState("Hello");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("Form submitted:", formData);

    try {
      const res = await axios
        .post("http://localhost:8080/api/v1/auth/login", formData)
        .then(function (response) {
          // console.log("Successful =>> ", response.data.message);
          localStorage.setItem("token-new", JSON.stringify(response.data));

          toast.success(response.data.message);
          // Navigate to dashboard if singnin is successful
          // navigate("/dashboard");
        })
        .catch(function (error) {
          toast.error(error.response.data.messages[0]);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className='signup-container'>
      <form onSubmit={handleSubmit} className='signup-form'>
        <h2 className='signup-title'>Sign In</h2>
        <input
          type='email'
          name='email'
          placeholder='Email'
          value={formData.email}
          onChange={handleChange}
          className='input'
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={formData.password}
          onChange={handleChange}
          className='input'
        />

        <button type='submit' className='btn'>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SigninPage;
