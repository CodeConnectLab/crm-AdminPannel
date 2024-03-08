import React, { useState } from "react";
import "./css.css";
import { useDispatch } from "react-redux";
import { createhosting } from "./features/allhostingSlice";
import { useNavigate } from "react-router-dom";
export default function AddSMSPackeage() {
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
     dispatch(createhosting(data));
      alert("Submit Successfully");
      navigate("/all_hosting");
  };
  return (
    <main>
      <div className="container px-4">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="card shadow-lg border-0 rounded-lg mt-2">
              <div className="card-header">
                <h3 className="text-center font-weight-light my-2">
                  Create Account
                </h3>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit} className="">
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <div className="form-floating mb-3">
                        <input
                          type="number"
                          required
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Client Name"
                          onChange={(e) =>
                            setData({ ...data, noofsms: e.target.value })
                          }
                        />
                        <label for="inputFirstName">No. SMS</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating mb-3">
                        <input
                          type="number"
                          required
                          className="form-control"
                          placeholder="Client Email"
                          onChange={(e) =>
                            setData({ ...data, price: e.target.value })
                          }
                        />
                        <label for="inputFirstName">Price(PER SMS)</label>
                      </div>
                    </div>
                  
                 
                  </div>
                  <div className="card-footer text-center py-3">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
