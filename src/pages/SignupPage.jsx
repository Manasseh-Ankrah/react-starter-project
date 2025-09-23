import React, { useState } from "react";
import "../styles/SignupPage.css";
import axios from "axios";
import { toast } from "react-toastify";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "ADMIN", // default role
  });
  // Second approach
  // const [firstName, setFirstName] = useState("Hello");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    try {
      const res = await axios
        .post("http://localhost:8080/api/v1/auth/register", formData)
        .then(function (response) {
          console.log("Successful =>> ", response.data.message);
          toast.success(response.data.message);
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
    console.log("Form submitted:", formData);
  };

  return (
    <div className='signup-container'>
      <form onSubmit={handleSubmit} className='signup-form'>
        <h2 className='signup-title'>Signup</h2>

        <input
          type='text'
          name='firstname'
          placeholder='First Name'
          value={formData.firstname}
          onChange={handleChange}
          className='input'
        />
        <input
          type='text'
          name='lastname'
          placeholder='Last Name'
          value={formData.lastname}
          onChange={handleChange}
          className='input'
        />
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

        <input
          type='password'
          name='confirmPassword'
          placeholder='Confirm Password'
          value={formData.confirmPassword}
          onChange={handleChange}
          className='input'
        />

        <button type='submit' className='btn'>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
