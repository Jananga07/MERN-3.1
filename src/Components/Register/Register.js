import React, { useState } from "react";
import axios from "axios";
import Nav from "../Nav/Nav";

function Register() {

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
    await axios.post("http://localhost:5000/register", inputs);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendRequest();
      alert("User Registered Successfully!");
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
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={inputs.name}
          onChange={handleChange}
          required
        />
        <br /><br />

        <label>Gmail</label>
        <input
          type="email"
          name="gmail"
          value={inputs.gmail}
          onChange={handleChange}
          required
        />
        <br /><br />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={inputs.password}
          onChange={handleChange}
          required
        />
        <br /><br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
