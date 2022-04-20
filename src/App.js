import { useState } from "react";
import { Container, Navbar, Row, Col } from "react-bootstrap";
import BooksList from "./components/receiptlist";
import "./App.css";
import SearchBar from "./components/search";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Main from './pages/main';
import PaymentForm from './pages/paymentform';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main/>}/>
          <Route exact path="/PaymentForm" element={<PaymentForm/>}/>
      </Routes>

    </Router>
  );
}

export default App;


//npm install react-router-dom --save

// In react-router-dom v6 useHistory() is replaced by useNavigate().
// import { useNavigate } from 'react-router-dom';
// const navigate = useNavigate();
// navigate('/home');

//If you are using react-router-dom v6 it looks like Switch has been replaced with Routes
{/*<Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
 </Routes> */}


 //passing data between screens:
 //sending screen
// import { useHistory } from "react-router-dom";
// function Sender(){ 
  
//   const history = useHistory();

//   const goToReceiver = () => {
//     history.push("/receiver", { name:'Mr',age:23 });
//   }

//   return <button onClick={goToReceiver}>Go To Receiver</button>
//   }

// OR use:
//import {useNavigate } from 'react-router-dom';
//const navigate = useNavigate();
//navigate('/PaymentForm', {state: {paymentData}});


//receiving screen
//  import { useLocation } from "react-router-dom";

//  function Receiver(){ 
 
//  const location = useLocation();

//    return <div>
//             <p>{location.state.name}</p>
//             <p>{location.state.age}</p>
//           </div>
//  }

