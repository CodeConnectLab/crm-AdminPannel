import React, {useEffect,useState} from 'react'
import './css.css';
import Loader from './Loader';
import { getALLWTSPPACK, deleteWTSPPACKAGE } from './features/allhostingSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
export default function AllWTSPPackege() {
   const {WTSPPAckage,loading} = useSelector((state)=>state.app);
       const dispatch=useDispatch();
      useEffect(()=>{
         dispatch(getALLWTSPPACK());  
        
      },[]) ;
     
       if(loading){
        return(<Loader/>)
       }

      
 
  return ( 
    <div  className="container" >
        <div className='row'> 
        <div className='col-lg-12 m-auto abcd'>
        <form className='py-5 mt-50'>
        
        <table className="table table table-bordered">
      
  <thead>
    <tr>
      <th scope="col">Sr. No.</th>
      <th scope="col">NO OF SMS</th>
      <th scope="col">Price (PER SMS)</th>
   
      <th scope="col">Delete</th>
      {/* <th scope="col">Edit</th> */}
    </tr>   
  </thead>
  <tbody  >     
  {   WTSPPAckage.map((country1, index) => {
        var sr=index+1;
       

        return (<tr> 
          <th scope="row"> {sr}</th>       
          <td>{country1.noofsms}</td>  
          <td>{country1.price} </td>      
             
          <td><button type="button" className="btn btn btn-danger btn-xs" onClick={()=>dispatch(deleteWTSPPACKAGE(country1._id))}><i className="fa fa-trash"></i></button></td> 
          {/* <td><button  type="button"  class="btn btn-success btn-xs"><Link   to={`/edit/${country1._id}`} ><i className="fa fa-pencil"></i></Link></button></td>  */}
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
