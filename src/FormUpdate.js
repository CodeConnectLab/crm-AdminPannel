import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { updateHosting } from './features/allhostingSlice';
export default function FormUpdate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [updatedata, setupdatedata] = useState();
  const { id } = useParams();

  const { hostings, loading } = useSelector((state) => state.app);
  useEffect(() => {
    if (id) {

      const singledata = hostings.filter((ele) => ele._id === id);
      setupdatedata(singledata[0]);
    }

  }, []);

  const newdata = (e) => {
    setupdatedata({ ...updatedata, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    var mobile = updatedata.mobile;
    //  if(mobile.length!=10){ 
    if (mobile.length < 10 || mobile.length > 10) {
      alert("Phone number must be 10 digits.");
    } else {
      dispatch(updateHosting(updatedata));
      navigate('/all_hosting');
    }
  }

  return (
    <main>
      <div className="container px-4">
        <div className='row justify-content-center'>
          <div className='col-lg-7'>
            <div className="card shadow-lg border-0 rounded-lg mt-2">
              <div className="card-header"><h3 className="text-center font-weight-light my-2">Edit Account</h3></div>
              <div className="card-body">
                <form
                  onSubmit={handleSubmit}
                  className='py-2'>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <div className="form-floating mb-3">

                        <input
                          type="text"
                          required
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder='Client Name'
                          name="name"
                          onChange={newdata}
                          value={updatedata && updatedata.name}
                        //  onChange={e => setData({...data, name: e.target.value})}
                        />

                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating mb-3">

                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          value={updatedata && updatedata.email}
                          placeholder='Client Email'
                          onChange={newdata}
                        // onChange={e => setData({...data, email: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating mb-3">
                        <input
                          type="number"
                          name="mobile"
                          value={updatedata && updatedata.mobile}
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder='Client Mobile'
                          onChange={newdata}
                        // onChange={e => setData({...data, mobile: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating mb-3">

                        <input
                          type="text"
                          name="address"
                          value={updatedata && updatedata.address}
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder='Client Address'
                          onChange={newdata}
                        //onChange={e => setData({...data, address: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          name="domain"
                          value={updatedata && updatedata.domain}
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder='Domain Name'
                          onChange={newdata}
                        // onChange={e => setData({...data, domain: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating mb-3">
                        <select
                          type="text"
                          name="states"

                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder='states'
                          onChange={newdata}
                          value={updatedata && updatedata.states}
                        >
                          <option>Chosse Option</option>
                          <option value="inactive">inactive</option>
                          <option value="active">active</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating mb-3">
                        {/* <select
                          type="text"
                          name="Package"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="Package"
                          onChange={(e) =>
                            setupdatedata({ ...updatedata, Package: e.target.value })
                          } 
                          required  
                          value={updatedata && updatedata?.Package}
                        >
                          <option value="">Chosse Package</option>  
                          <option value={10}>Basic</option>
                          <option value={30}>Premium</option>
                          <option value={50}>Silver</option>
                          <option value={500}>Gold</option>
                        </select> */}
                        <input type="text" name="Package"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="No OF Agent" onChange={(e) =>
                            setupdatedata({ ...updatedata, Package: e.target.value })
                          }
                          required />
                        <label for="inputFirstName">No OF Agent</label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating mb-3">
                         <input type="text" name="smsendpointurl"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="No OF Agent" onChange={(e) =>
                            setupdatedata({ ...updatedata, smsendpointurl: e.target.value })
                          }
                          required />
                        <label for="inputFirstName">Sms Endpointurl</label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating mb-3">
                         <input type="text" name="smsuser"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="No OF Agent" onChange={(e) =>
                            setupdatedata({ ...updatedata, smsuser: e.target.value })
                          }
                          required />
                        <label for="inputFirstName">Sms User</label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating mb-3">
                         <input type="text" name="smspass"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="No OF Agent" onChange={(e) =>
                            setupdatedata({ ...updatedata, smspass: e.target.value })
                          }
                          required />
                        <label for="inputFirstName">Sms Pass</label>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-floating mb-3">
                         <input type="text" name="smssender"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="No OF Agent" onChange={(e) =>
                            setupdatedata({ ...updatedata, smssender: e.target.value })
                          }
                          required />
                        <label for="inputFirstName">Sms Sender</label>
                      </div>
                    </div>


                    <div className="col-md-6 text-center mx-auto">
                      <div className="form-floating pt-3 mb-3">
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
