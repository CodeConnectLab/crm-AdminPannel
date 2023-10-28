
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import FormPage from './FormPage';
import Sidebar from './features/Sidebar';
import Allhosting from './Allhosting';
import FormUpdate from './FormUpdate';
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  
  return (
    <div>
      
<Router>
     <div id="layoutSidenav">
    <div id="layoutSidenav_content">
 <Header />
     <Routes>
     <Route  exact path="/" element={<Home />} />   
     <Route  exact path="/Home" element={<Home />} />
    <Route  exact path="/FormPage" element={<FormPage />} />
    <Route  exact path="/all_hosting" element={<Allhosting />} />
    <Route  exact path="/edit/:id" element={<FormUpdate />} />
      </Routes>
    
  
   <Sidebar /> 
   <Footer />
   </div>
   </div> 
     
   </Router> 
     </div>  
  );
}
 
export default App;
