import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaUserLock } from "react-icons/fa6";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword:"",
  });

  const [error, setError] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    // Check if password and confirm password match
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    setError(""); // Clear any previous errors

    try {
      // Send the form data to the backend API
      await axios.post("http://localhost:5000/api/auth/signup", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
      alert("Account created successfully!");
      navigate("/signin");
    } catch (error) {
      setError("Registration failed!");
    }
  };

  return (
    <div
      className="d-flex align-items-center min-vh-100 bg-gradient-to-bottom"
      style={{ background: "linear-gradient(to bottom, #d1fae5, #ffffff)" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-6">
            <div className="text-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-success"
              >
                <path d="m15 11-1 9"></path>
                <path d="m19 11-4-7"></path>
                <path d="M2 11h20"></path>
                <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"></path>
                <path d="M4.5 15.5h15"></path>
                <path d="m5 11 4-7"></path>
                <path d="m9 11 1 9"></path>
              </svg>
              <h2 className="mt-3 h3 fw-bold text-dark">Create your account</h2>
            </div>
            <div className="card shadow">
              <div className="card-body">
                <form onSubmit={handleSignUp}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label fw-medium">
                      Full name
                    </label>
                    <div className="input-group">
                      <span className="input-group-text bg-light border-0">
                      <FaRegUser />
                      </span>
                      <input
                        type="text"
                        id="name"
                        className="form-control"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label fw-medium">
                      Email address
                    </label>
                    <div className="input-group">
                      <span className="input-group-text bg-light border-0">
                      <MdOutlineMailOutline size={20} />
                      </span>
                      <input
                        type="email"
                        id="email"
                        className="form-control"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label fw-medium">
                      Password
                    </label>
                    <div className="input-group">
                      <span className="input-group-text bg-light border-0">
                       <FaUserLock />
                      </span>
                      <input
                        type="password"
                        id="password"
                        className="form-control"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="confirm-password"
                      className="form-label fw-medium"
                    >
                      Confirm password
                    </label>
                    <div className="input-group">
                      <span className="input-group-text bg-light border-0">
                       <FaUserLock />
                      </span>
                      <input
                        type="password"
                        id="confirm-password"
                        className="form-control"
                        value={formData.confirmPassword}
                        onChange={(e) =>
                          setFormData({ ...formData, confirmPassword: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-success w-100"
                  >
                    Create account
                  </button>
                </form>
                <p className="mt-3 text-center text-muted">
                  Already have an account?{" "}
                  <a href="/SignIn" className="text-success fw-medium">
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
