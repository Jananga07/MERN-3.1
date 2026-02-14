import React, { useState } from "react";
import axios from "axios";
import Nav from "../Nav/Nav";
import { useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    name: "",
    gmail: "",
    password: ""
  });

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async () => {
    return await axios.post("http://localhost:5000/register", inputs);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendRequest();
      alert("User Registered Successfully!");
      navigate("/userdetails");  // 🔥 Important
    } catch (err) {
      console.error(err);
      alert("Registration Failed");
    }
  };

  return (
    <div>
  <Nav />
  <h1>User Register</h1>

  <form onSubmit={handleSubmit}>
    
    <div>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={inputs.name}
        onChange={handleChange}
        required
      />
    </div>

    <br />

    <div>
      <label htmlFor="gmail">Email</label>
      <input
        type="email"
        id="gmail"
        name="gmail"
        value={inputs.gmail}
        onChange={handleChange}
        required
      />
    </div>

    <br />

    <div>
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        value={inputs.password}
        onChange={handleChange}
        required
      />
    </div>

    <br />

    <button type="submit">Register</button>

  </form>
</div>

  );
}

export default Register;
