import React from "react";

const Footer= () => {
  return (
    <div className="container bg-emerald-custom text-center py-5">
      <h2 className="display-4 font-weight-bold text-white mb-4">Start saving on groceries today</h2>
      <p className="lead text-white mb-4 mx-auto max-w-2xl">
        Join thousands of smart shoppers who are already saving time and money with GrocerySave. No credit card required.
      </p>
      <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
        <button className="btn btn-outline-light btn-lg">Sign Up Now - It's Free</button>
        <button className="btn btn-outline-light btn-lg">Schedule a Demo</button>
      </div>
    </div>
  );
};

export default Footer;
