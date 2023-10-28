import React , { useState } from 'react'
import './css.css'
import { useDispatch } from 'react-redux';
import {createhosting} from './features/allhostingSlice';
import {useNavigate} from "react-router-dom";
export default function FormPage() {

  const [data, setData] = useState({});
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const handleSubmit = async (e) => {
       e.preventDefault(); 
       dispatch(createhosting(data)); 
       alert("Submit Successfully");  
       navigate("/all_hosting");
    };  

 
  return ( 
     
    <main>
      <div className="container px-4">
        <div className='row justify-content-center'> 
        <div className='col-lg-7'>
           <div className="card shadow-lg border-0 rounded-lg mt-2">
               <div className="card-header"><h3 className="text-center font-weight-light my-2">Create Account</h3></div>
                <div className="card-body">
              <form onSubmit={handleSubmit} className=''>
                <div className="row mb-3">
                   <div className="col-md-6">
                    <div className="form-floating mb-3">
                    <input  type="text"
                        required
                        className="form-control" 
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder='Client Name'
                        onChange={e => setData({...data, name: e.target.value})}
                      />
                      <label for="inputFirstName">Client Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder='Client Email'
                        onChange={e => setData({...data, email: e.target.value})}
                      />
                      <label for="inputFirstName">Client Email</label>
                    </div>
                      </div>
                      <div className="col-md-6">
                    <div className="form-floating mb-3">
                      <input
                        type="number"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder='Client Mobile'
                        onChange={e => setData({...data, mobile: e.target.value})}
                      />
                      <label for="inputFirstName">Client Mobile</label>
                    </div>
                      </div>
                      <div className="col-md-6">
                    <div className="form-floating mb-3"> 
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder='Client Address'
                        onChange={e => setData({...data, address: e.target.value})}
                      />
                      <label for="inputFirstName">Client Address</label>
                    </div>
                        </div>
                      <div className="col-md-12">
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder='Domain Name'
                        onChange={e => setData({...data, domain: e.target.value})}
                      />
                      <label for="inputFirstName">Domain Name</label>
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
   
  )
}
