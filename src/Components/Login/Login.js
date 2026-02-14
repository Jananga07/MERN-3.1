import React, { useState } from "react";
import axios from "axios";
import Nav from "../Nav/Nav";
import { useNavigate } from "react-router";

function Login() {
    const history= useNavigate();
    const [user,setUser] =useState({
        name: "",
        gmail: "",
    
  });

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setUser((prevUser) => ({...prevUser,[name]: value}));
  };

  const sendRequest = async () => {
    return await axios.post("http://localhost:5000/login", {
        gmail:user.gmail,
        password:user.password,
    })
    .then((res) => res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await sendRequest();
      if (response.status === "ok"){
        alert("Login success");
        history("/userdetails")
      }else{
        alert("Login error")
      }
    } catch (err) {
      alert("error"+ err.message);
    }
  };
  return (
    <div>
  <Nav />
  <h1>User Login</h1>

  <form onSubmit={handleSubmit}>
    {/* Name */}
    <label htmlFor="name">Name</label>
    <br />
    <input
      type="text"
      id="name"
      name="name"
      value={user.name}
      onChange={handleInputChange}
      required
    />
    <br /><br />

    {/* Gmail */}
    <label htmlFor="gmail">Gmail</label>
    <br />
    <input
      type="email"
      id="gmail"
      name="gmail"
      value={user.gmail}
      onChange={handleInputChange}
      required
    />
    <br /><br />

    {/* Password */}
    <label htmlFor="password">Password</label>
    <br />
    <input
      type="password"
      id="password"
      name="password"
      value={user.password}
      onChange={handleInputChange}
      required
    />
    <br /><br />

    {/* Submit Button */}
    <button type="submit">Login</button>
  </form>
</div>

  )
}

export default Login
