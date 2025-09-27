import React, { useState } from "react";
import "../styles/SignupPage.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";

const ProfileUploadPage = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");

  // Second approach
  // const [firstName, setFirstName] = useState("Hello");

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("profile", file);

    try {
      const res = await axios
        .put("http://localhost:8080/api/v1/auth/1", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0QGdtYWlsLmNvbSIsImlhdCI6MTc1ODk3MzY3NSwiZXhwIjoxNzU5MDYwMDc1fQ.qIoLKYmsag64yLaAjEx3emGJs7qyJAc3BE3L6vwUO34",
        })
        .then(function (response) {
          console.log("Successful =>> ", response.data);
          toast.success(response.data.message);
        })
        .catch(function (error) {
          toast.error(error.response.data.messages[0]);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileChange = (e) => {
    e.preventDefault();

    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    previewFile(selectedFile);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPreview(reader.result);
      console.log("====================================");
      console.log("Read Data:", reader);
      console.log("====================================");
    };
  };

  return (
    <div className='signup-container'>
      <div className='signup-form'>
        <h2 className='signup-title'>Upload Profile Picture</h2>
        {/* <img
          src={preview}
          style={{
            width: "350px",
            height: "150px",
          }}
        /> */}

        {preview && (
          <Avatar
            alt='Remy Shwarp'
            src={preview}
            variant='rounded'
            style={{
              width: "350px",
              height: "150px",
            }}
          />
        )}

        <br />

        <input
          type='file'
          accept='image/*'
          onChange={handleFileChange}
          className='input'
          required
        />
        <button type='submit' className='btn' onClick={handleUpload}>
          Sign In
        </button>
      </div>
    </div>
  );
};

export default ProfileUploadPage;
