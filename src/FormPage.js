import React from 'react'
import './css.css'
export default function FormPage() {
  return (
    <div  className="container" >
        <div className='row'> 
        <div className='col-lg-6 m-auto abcd'>
        <form className='py-5 mt-20'>
    <div className="mb-3">
      
      <input
        type="text"
        className="form-control" 
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder='Client Name'
      />
     
    </div>
    <br/>
    <div className="mb-3">
      
      <input
        type="password"
        className="form-control"
        id="exampleInputPassword1"
        placeholder='Client Email'
      />
    </div>
    <br/>

    <div className="mb-3">
      
      <input
        type="password"
        className="form-control"
        id="exampleInputPassword1"
        placeholder='Client Mobile'
      />
    </div>
    <br/>

    <div className="mb-3">
      
      <input
        type="password"
        className="form-control"
        id="exampleInputPassword1"
        placeholder='Client Address'
      />
    </div>
    <br/>

    <div className="mb-3">
      
      <input
        type="password"
        className="form-control"
        id="exampleInputPassword1"
        placeholder='Server IP'
      />
    </div>
    <br/>

    <div className="mb-3">
      
      <input
        type="password"
        className="form-control"
        id="exampleInputPassword1"
        placeholder='Domain Name'
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
