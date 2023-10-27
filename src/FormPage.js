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
    <div  className="container" >
        <div className='row'> 
        <div className='col-lg-6 m-auto abcd'>
        <form onSubmit={handleSubmit} className='py-5 mt-20'>
    <div className="mb-3">
      
      <input
        type="text"
        required
        className="form-control" 
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder='Client Name'
        onChange={e => setData({...data, name: e.target.value})}
      />
     
    </div>
    <br/>
    <div className="mb-3">
      
      <input
        type="email"
        className="form-control"
       
        placeholder='Client Email'
        onChange={e => setData({...data, email: e.target.value})}
      />
    </div>
    <br/>

    <div className="mb-3">
      
      <input
        type="number"
        className="form-control"
        id="exampleInputPassword1"
        placeholder='Client Mobile'
        onChange={e => setData({...data, mobile: e.target.value})}
      />
    </div>
    <br/>

    <div className="mb-3">
      
      <input
        type="text"
        className="form-control"
        id="exampleInputPassword1"
        placeholder='Client Address'
        onChange={e => setData({...data, address: e.target.value})}
      />
    </div>
    <br/>


    <div className="mb-3">
      
      <input
        type="text"
        className="form-control"
        id="exampleInputPassword1"
        placeholder='Domain Name'
        onChange={e => setData({...data, domain: e.target.value})}
      />
    </div>
    <br/>
    <button type="submit" className="btn btn-primary">
      Submit
    </button>
  </form>
            </div> 
       
        </div>

      
    </div>
  )
}
