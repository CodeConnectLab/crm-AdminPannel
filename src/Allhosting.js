import React, {useEffect,useState} from 'react'
import './css.css';
import Loader from './Loader';
import { getAllHosting, deleteHosting } from './features/allhostingSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
export default function Allhosting() {
   const {hostings,loading} = useSelector((state)=>state.app);
       const dispatch=useDispatch();
      useEffect(()=>{
         dispatch(getAllHosting());  
        
      },[])  ;
     
       if(loading){
        return(<Loader/>)
       }

      
 
  return ( 
    <div  className="container" >
        <div className='row'> 
        <div className='col-lg-10 m-auto abcd'>
        <form className='py-5 mt-50'>
        <table className="table">
      
  <thead>
    <tr>
      <th scope="col">Sr. No.</th>
      <th scope="col">Client Name</th>
      <th scope="col">Client Email</th>
      <th scope="col">Client Mobile</th>
      <th scope="col">Client Address</th>  
      
      <th scope="col">Domain</th>
      <th scope="col">Status</th>
      <th scope="col">Delete</th>
      <th scope="col">Delete</th>
    </tr>   
  </thead>
  <tbody  >     
  {   hostings.map((country1, index) => {
        var sr=index+1;
        return (<tr> 
          <th scope="row"> {sr}</th>       
          <td>{country1.name}</td>  
          <td>{country1.email}</td>      
          <td>{country1.mobile}</td>
          <td>{country1.address}</td> 
           
          <td>{country1.domain}</td> 
          <td>{country1.states}</td>    
          <td><button type="button"  onClick={()=>dispatch(deleteHosting(country1._id))}>Delete</button></td> 
          <td><button><Link   to={`/edit/${country1._id}`} >Edit</Link></button></td> 
                   </tr> )
      })}
         
  </tbody>
</table>
  </form>
            </div> 
       
        </div>

      
    </div>
  )
}
