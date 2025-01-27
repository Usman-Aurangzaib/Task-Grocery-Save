import React from "react";
import { Button } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";
import { GoTag } from "react-icons/go";
import { CiViewList } from "react-icons/ci";
import { MdKeyboardVoice } from "react-icons/md";
const Feature= () => {
  return (
    <div className="bg-light py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="h3 font-weight-bold text-dark mb-4">How GrocerySave Works</h2>
          <p className="lead text-muted">Get started in minutes and save hours every week</p>
        </div>
        <div className="d-flex flex-column flex-lg-row gap-4">
          <div className="col-lg-4">
            <div className="mb-4">
              <Button variant="light" className="d-flex align-items-center w-100 p-4 rounded shadow-sm">
                <div className="rounded-circle bg-light text-muted p-3">
                <CiViewList size={22} />
                </div>
                <div className="ml-3">
                  <h5 className="font-weight-semibold text-dark">Step 1</h5>
                  <p className="text-muted">Create Lists</p>
                </div>
              </Button>
            </div>
            <div className="mb-4">
              <Button variant="light" className="d-flex align-items-center w-100 p-4 rounded shadow-sm">
                <div className="rounded-circle bg-light text-success p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus-circle">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 12h8" />
                    <path d="M12 8v8" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h5 className="font-weight-semibold text-dark">Step 2</h5>
                  <p className="text-muted">Add Items</p>
                </div>
              </Button>
            </div>
            <div className="mb-4">
              <Button variant="light" className="d-flex align-items-center w-100 p-4 rounded shadow-sm">
                <div className="rounded-circle bg-light text-muted p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                    <polyline points="16 7 22 7 22 13" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h5 className="font-weight-semibold text-dark">Step 3</h5>
                  <p className="text-muted">Track Prices</p>
                </div>
              </Button>
            </div>
            <div>
              <Button variant="light" className="d-flex align-items-center w-100 p-4 rounded shadow-sm">
                <div className="rounded-circle bg-light text-muted p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wallet">
                    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                    <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                    <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h5 className="font-weight-semibold text-dark">Step 4</h5>
                  <p className="text-muted">Save Money</p>
                </div>
              </Button>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="bg-white p-4 rounded shadow-sm">
              <h3 className="h4 font-weight-bold text-dark mb-4">Add Items</h3>
              <p className="text-muted mb-4">Quickly add items with our smart autocomplete feature</p>
              <div className="row">
                <div className="col-4">
                  <div className="bg-light p-4 rounded text-center mb-3 hover-bg-success transition-colors">
                    <CiSearch className="bg-white rounded-circle  p-2 mx-auto mb-3" size={42} color="green" />
                    <p className="font-weight-medium text-dark">Smart search</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="bg-light p-4 rounded text-center mb-3 hover-bg-success transition-colors">
        
                      <GoTag  className="bg-white rounded-circle p-2 mx-auto mb-3" size={42} color="GREEN"/>
                   
                    <p className="font-weight-medium text-dark">Auto-categorize</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="bg-light p-4 rounded text-center mb-3 hover-bg-success transition-colors">
                    <MdKeyboardVoice className="bg-white rounded-circle p-2 mx-auto mb-3"  size={42} color="green"/>
                    <p className="font-weight-medium text-dark">Voice input</p>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between mt-4">
                <Button variant="outline-secondary" size="sm">Previous Step</Button>
                <Button variant="success" size="sm">Next Step</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
