
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import FormPage from './FormPage';
import Allhosting from './Allhosting';
import FormUpdate from './FormUpdate';
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  
  return (
    <div className="App">
      
<Router>
  
<Header></Header>
     <Routes>
    <Route  exact path="/" element={<FormPage />} />
    <Route  exact path="/all_hosting" element={<Allhosting />} />
    <Route  exact path="/edit/:id" element={<FormUpdate />} />
      </Routes>
     <Footer></Footer> 
   </Router>  
    </div>   
  );
}
 
export default App;
