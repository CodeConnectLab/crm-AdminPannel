import React, {useEffect,useState} from 'react'
import './css.css'
export default function Allhosting() {
  const [country, setCountry] = useState([]);
    

  const handleDelete = async(e) => {
    
        
    fetch(`https://task-mernss.onrender.com/api/v1/delete/${e}`, {
      method: 'DELETE'
    }) 
    .then(res =>  res.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
    alert("delete Successfully")
      
  }

      
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
      
      <th scope="col">Domain</th>
      <th scope="col">Delete</th>
    </tr>   
  </thead>
  <tbody  >   

  {country.map((country1, index) => {
        var sr=index+1;
        return (<tr> 
          <th scope="row"> {sr}</th>       
          <td>{country1.name}</td>  
          <td>{country1.email}</td>      
          <td>{country1.mobile}</td>
          <td>{country1.address}</td> 
          
          <td>{country1.domain}</td>  
          <td><button type="button" onClick={() => handleDelete(country1._id)}>Delete</button></td>  
                   </tr>)
      })}
         
  </tbody>
</table>
  </form>
            </div> 
       
        </div>

      
    </div>
  )
}
