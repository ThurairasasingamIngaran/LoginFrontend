
import './Home.css'
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom'; // Import useNavigate and Link

export default function Home() {
  let navigate = useNavigate();

  const [employee, setEmployee] = useState({
    email: "",
    password: ""
  });

  const { email, password } = employee;

  const onInputChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8085/login", {
        email: email,
        password: password,
      });

      if (response.status === 200) {
        // Successful login
        navigate('/home');
      } else {
        // Unsuccessful login
        alert("Incorrect Email and Password not match");
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        alert(err.response.data.message);
      } else {
        alert("Login failed!");
      }
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Login</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your Email"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Password" className="form-label">
                Password
              </label>
              <input
                type="password" // Change input type to "password"
                className="form-control"
                placeholder="Enter your Password"
                name="password"
                value={password}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='buttonContainer'>
              <div className='formButton'>
                <button type="submit" className="btn btn-outline-primary"> {/* Change Link to button */}
                  Login
                </button>
              </div>

              <div className='formButton'>
                <Link to="/register" className="btn btn-outline-primary"> {/* Change Link to button */}
                  Register
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
