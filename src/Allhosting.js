import React, {useEffect,useState} from 'react'
import './css.css'
export default function Allhosting() {
  const [country, setCountry] = useState([]);

      
  useEffect( ()=>{  
      const getCountry = async ()=>{
        try{
          const res = await fetch("https://task-mernss.onrender.com/api/v1/hosting",{
            method:'GET',
            mode: 'cors',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            }
          });
          const getcon = await res.json();    
          
          setCountry(getcon); 
          }catch(error){  
           
            console.log(error)
        }
      }
      getCountry();
  },[]);
 
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
      <th scope="col">Ip</th>
      <th scope="col">Domain</th>
    </tr>
  </thead>
  <tbody  >
     {             country.map(country1 => 
   
                  <tr> 
      <th scope="row">1</th>
      <td>{country1.name}</td>  
      <td>{country1.email}</td> 
      <td>{country1.mobile}</td>
      <td>{country1.address}</td> 
      <td>{country1.ip}</td>    
      <td>{country1.domain}</td>
               </tr>   
                  )
               } 
  </tbody>
</table>
  </form>
            </div> 
       
        </div>

      
    </div>
  )
}
