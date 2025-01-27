import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaUserLock } from "react-icons/fa6";
import { GrFormView } from "react-icons/gr";
import axios from "axios";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/signin",
        { email, password }
      );
      localStorage.setItem("token", response.data.token);
      console.log(`Token save hogya `);
      navigate("/dashboard");
    } catch (error) {
      alert("Invalid email or password!");
      console.log("yr token nhi save ho");
    }
  };

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center min-vh-100"
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
              <h2 className="mt-3 h3 fw-bold text-dark">Welcome back</h2>
            </div>
            <div className="card shadow">
              <div className="card-body">
                <form onSubmit={handleSignIn}>
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
                        onChange={(e) => setEmail(e.target.value)}
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
                        placeholder="Enter your password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <button
                        type="button"
                        className="btn btn-outline-secondary border-0"
                      >
                        <GrFormView  size={18}/>
                      </button>
                    </div>
                  </div>

                  <div>
                    <button type="submit" className="btn btn-success w-100">
                      Sign in
                    </button>
                  </div>
                </form>
                <p className="mt-3 text-center text-muted">
                  Don&apos;t have an account?{" "}
                  <a href="/signup" className="text-success fw-medium">
                    Sign up
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

export default SignIn;
