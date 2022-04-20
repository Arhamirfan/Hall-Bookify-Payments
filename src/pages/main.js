import { useState, React } from "react";
import { Container, Navbar, Row, Col } from "react-bootstrap";
import "../App.css";
import ReceiptList from "../components/receiptlist";
import SearchBar from "../components/search";


function Main(){
  const [receiptId, setReceiptId] = useState("");

  const getReceiptIdHandler = (id) => {
    console.log("The ID of document to be edited: ", id);
    setReceiptId(id);
  };
    return (
        <>
      <Navbar bg="primary" variant="dark" className="header" >
        <Container>
          <Navbar.Brand href="#home">HALL BOOKIFY - PAYMENTS</Navbar.Brand>
        </Container>
      </Navbar>

      <div classname='App'>
       <Row>
         <Col>
         <Container style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
         {/* <SearchBar/> */}
         </Container>
         </Col>         
       </Row>

     </div>
      <Container style={{marginTop:"20px"}}>
        <Row>
          <Col>
            <ReceiptList getReceiptId={getReceiptIdHandler} />
          </Col>
        </Row>
      </Container>
    </>
    );
}


export default Main;