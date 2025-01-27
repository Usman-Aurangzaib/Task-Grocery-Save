import React from 'react';
import { LiaClipboardListSolid } from "react-icons/lia";
import { MdHistory } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
const Home = () => {
  return (
    <div className="container bg-container py-5 text-center">
      <h1 className="display-4 fw-bold font-weight-bold mb-4">
        Smart Grocery Shopping, <span className="text-success">Made Simple</span>
      </h1>
      <p className="lead mb-5 fs-4 mx-auto" style={{ maxWidth: '40rem' }}>
        Organize your grocery lists, track prices, and save money with our intelligent shopping assistant. Join over 50,000 smart shoppers saving time and money every day.
      </p>
      <div className="d-flex justify-content-center mb-5">
        <button className="btn btn-success btn-lg mx-2">Get Started Free</button>
        <button className="btn btn-outline-success btn-lg mx-2">Watch Demo</button>
      </div>
      <div className="d-flex justify-content-center">
        <div className="d-flex align-items-center mx-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-warning mr-2">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
          <span>4.9/5 rating</span>
        </div>
        <div className="d-flex align-items-center mx-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-success mr-2">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
          <span>50K+ users</span>
        </div>
        <div className="d-flex align-items-center mx-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-success mr-2">
            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
          </svg>
          <span>Secure & Private</span>
        </div>
      </div>

      <div className="text-center mb-5 mt-5">
        <h3 className="display-4  mb-4">Everything you need to shop smarter</h3>
        <p className="lead ">Simple yet powerful features to make grocery shopping a breeze</p>
      </div>
      <div className="row mt-4">
        <div className="col-md-4  mb-4">
          <div className="card shadow-sm border-light rounded-lg">
            <div className="card-body text-center">
              <div className=" text-white rounded-circle p-3 mb-4">
              <LiaClipboardListSolid size={34} color='green' />
              </div>
              <h3 className="h5">Smart Lists</h3>
              <p>Create and manage multiple shopping lists with smart categorization and priority settings.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm border-light rounded-lg">
            <div className="card-body text-center">
              <div className="text-white rounded-circle p-3 mb-4" width="12" height="12">
              <MdHistory size={34} color='green' />
              </div>
              <h3 className="h5">Price History</h3>
              <p>Track price changes over time and get notified when your favorite items go on sale.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm border-light rounded-lg">
            <div className="card-body text-center">
              <div className="text-white rounded-circle p-3 mb-4">
              <FaMobileAlt size={32}  color='green'/>
              </div>
              <h3 className="h5">Mobile Ready</h3>
              <p>Access your lists anywhere with our mobile-friendly design and offline support.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
