import React from "react";
// import {Link} from "react-router-dom"

function Home() {
  return (
    <div>
      <div className="container home-section ms-10">
        <div className="pt-5 text-center mx-10">
          <h2>AI Curated Gift Ideas</h2>
          <p className="lead mx-5">
            Our AI-powered tool will guide you in choosing the perfect gift when
            you're unsure about what to buy. Simply fill out the form below with
            information about the recipient and your budget, and we'll suggest a
            curated list of gifts!
          </p>
        </div>
        <div className="row g-5 mx-5 ">
          <div className="home-details">
            <form
              className="needs-validation"
              action="/gifts"
              method="post"
              novalidate
            >
              <div className="home-gifts justify-content-center">
                <h4 className="mb-3 home-heading">Gift Details</h4>
                <hr className="my-4" />
                <div className="row g-3 mx-5 ">
                  <div className="col-12 detail-col">
                    <label for="relationship" className="form-label">
                      Relationship:{""}
                    </label>
                    <input
                      type="text"
                      className="form-control "
                      id="relationship"
                      name="relationship"
                      placeholder="Enter your relation"
                      value=""
                      required
                    />
                    <div className="invalid-feedback">
                      Relationship information is required.
                    </div>
                  </div>
                  <div className="col-12 detail-col">
                    <label for="age" className="form-label">
                      Age:{" "}
                    </label>
                    <input
                      type="number"
                      className="form-control "
                      id="age"
                      name="age"
                      placeholder=""
                      value=""
                      required
                    />
                    <div className="invalid-feedback">
                      Age information is required.
                    </div>
                  </div>
                  <div className="col-12 detail-col">
                    <label for="occasion" className="form-label">
                      Occasion:{" "}
                    </label>
                    <input
                      type="text"
                      className="form-control "
                      id="occasion"
                      name="occasion"
                      placeholder=""
                      value=""
                      required
                    />
                    <div className="invalid-feedback">
                      Occasion information is required.
                    </div>
                  </div>
                  <div className="col-12 detail-col">
                    <label for="interests" className="form-label">
                      Interests:{" "}
                    </label>
                    <input
                      type="text"
                      className="form-control "
                      id="interests"
                      name="interests"
                      placeholder=""
                      value=""
                      required
                    />
                    <div className="invalid-feedback">
                      Interest information is required.
                    </div>
                  </div>
                  <div className="col-12 detail-col">
                    <label for="budget" className="form-label">
                      Budget:
                    </label>
                    <input
                      type="number"
                      className="form-control "
                      id="budget"
                      name="budget"
                      placeholder=""
                      value=""
                      required
                    />
                    <div className="invalid-feedback">
                      Budget information is required.
                    </div>
                  </div>
                </div>
              </div>
              <button className=" btn button" type="submit">
                Get Gift Suggestions
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
