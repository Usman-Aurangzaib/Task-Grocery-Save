import React from "react";

const Shopping= () => {
  return (
    <>
    <div className="bg-emerald-custom-40 py-5">
      <div className="container px-4 px-sm-6 px-lg-8">
        <div className="text-center mb-5">
          <h2 className="h3 font-weight-bold text-dark mb-3">Loved by Shoppers</h2>
          <p className="h5 text-muted">See what our users have to say about GrocerySave</p>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card shadow-sm border-light">
              <div className="card-body">
                <div className="d-flex mb-3">
                  <div className="flex-shrink-0">
                    <div className="d-flex justify-content-center align-items-center bg-success text-white rounded-circle" style={{ width: "48px", height: "48px" }}>
                      <span className="font-weight-bold">S</span>
                    </div>
                  </div>
                  <div className="ms-3">
                    <h4 className="h5 font-weight-semibold">Sarah Johnson</h4>
                    <p className="text-muted">Busy Mom</p>
                  </div>
                </div>
                <p className="text-muted font-italic">
                  "GrocerySave has completely transformed how I shop for my family."
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm border-light">
              <div className="card-body">
                <div className="d-flex mb-3">
                  <div className="flex-shrink-0">
                    <div className="d-flex justify-content-center align-items-center bg-success text-white rounded-circle" style={{ width: "48px", height: "48px" }}>
                      <span className="font-weight-bold">M</span>
                    </div>
                  </div>
                  <div className="ms-3">
                    <h4 className="h5 font-weight-semibold">Mike Chen</h4>
                    <p className="text-muted">Budget Conscious</p>
                  </div>
                </div>
                <p className="text-muted font-italic">
                  "The price tracking feature is amazing. I've saved over $200 in the past month alone."
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm border-light">
              <div className="card-body">
                <div className="d-flex mb-3">
                  <div className="flex-shrink-0">
                    <div className="d-flex justify-content-center align-items-center bg-success text-white rounded-circle" style={{ width: "48px", height: "48px" }}>
                      <span className="font-weight-bold">E</span>
                    </div>
                  </div>
                  <div className="ms-3">
                    <h4 className="h5 font-weight-semibold">Emily Davis</h4>
                    <p className="text-muted">Health Enthusiast</p>
                  </div>
                </div>
                <p className="text-muted font-italic">
                  "I love how I can organize my shopping lists by category. Makes healthy shopping so much easier!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        <div className="bg-emerald-custom-50 py-5">
        <div className="container px-4 px-sm-6 px-lg-8">
          <div className="text-center mb-5">
            <h2 className="h3 font-weight-bold text-dark mb-3">Calculate Your Savings</h2>
            <p className="h5 text-muted">See how much you could save with GrocerySave</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-lg mx-auto" style={{ maxWidth: "650px" }}>
            <div className="row row-cols-1 row-cols-md-2 g-4 mb-4">
              <div>
                <h4 className="font-weight-semibold mb-2">Monthly Grocery Spend</h4>
                <p className="h2 font-weight-bold text-success">$600</p>
                <p className="text-muted">Average household spend</p>
              </div>
              <div>
                <h4 className="font-weight-semibold mb-2">Potential Savings</h4>
                <p className="h2 font-weight-bold text-success">$180</p>
                <p className="text-muted">30% average savings</p>
              </div>
            </div>
            <button className="w-100 py-3 bg-success text-white font-weight-medium rounded-lg shadow-lg hover:bg-success-dark transition-all">
              Start Saving Today
            </button>
          </div>
        </div>
      </div>
      </>
  );
};

export default Shopping;
