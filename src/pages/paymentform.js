import { React, useState } from "react";
import "../App.css";
import { ethers } from "ethers";
import { Container, Navbar, Row, Col, Button } from "react-bootstrap";
import {useLocation} from 'react-router-dom';
import ErrorMessage from "./ErrorMessage";
import TxList from "./TxList";
import ReceiptDataService from "../services/receiptservices";

function PaymentForm(){
    const location = useLocation();
    const [error, setError] = useState();
    const [txs, setTxs] = useState([]);

    const changeStatus = () => {
      ReceiptDataService.updateReceipt(location.state.id, {status: 'Paid'})
    }

    const startPayment = async ({ setError, setTxs, ether, addr }) => {
        try {
          if (!window.ethereum)
            throw new Error("No crypto wallet found. Please install it.");
      
          await window.ethereum.send("eth_requestAccounts");
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          ethers.utils.getAddress(addr);
          const tx = await signer.sendTransaction({
            to: addr,
            value: ethers.utils.parseEther(ether)
          });
          console.log({ ether, addr });
          console.log("tx", tx);
          setTxs([tx]);
          
          changeStatus();
        } catch (err) {
          setError(err.message);
        }
      };


        const handleSubmit = async (e) => {
            e.preventDefault();
            const data = new FormData(e.target);
            setError();
            await startPayment({
            setError,
            setTxs,
            ether: data.get("ether"),
            addr: data.get("addr")
            });
        };


      
    return (
        <>
        <Navbar bg="primary" variant="dark" className="header" >
        <Container>
          <Navbar.Brand href="#home">HALL BOOKIFY - PAYMENTS</Navbar.Brand>
        </Container>
      </Navbar>

      {/* <div classname='App'>
            <p>Package ID: {location.state.packageid}</p>
            <p>Package Name: {location.state.packagename}</p>
            <p>Package Price: {location.state.totalprice}</p>
            <p>Creator Fee:{location.state.creatorfee}</p>
            <p>Payment Wallet Address: {location.state.walletaddress} </p>
      </div> */}

      <div className="App">
          <Row>
              <Col>
                <Container style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>



                <form  onSubmit={handleSubmit}>
                    <main>
                    <h1 style={{marginTop:"20px"}}>SEND ETH PAYMENT</h1>
                    <div className="">
                        <div className="">
                            <hr></hr>
                            <h5> Package ID: {location.state.packageid} </h5>
                            <h5> Package Name: {location.state.packagename} </h5>
                            <h5> Package Creator Fee: {location.state.creatorfee} </h5>
                            <h5> Package Price: {location.state.packageprice} </h5>
                            <h5> status: {location.state.status} </h5>
                            <hr></hr>
                        <input
                            type="text"
                            name="addr"
                            value={location.state.walletaddress}
                            placeholder="Recipient Address"
                            readOnly ={true}
                            style={{width: "400px"}}
                        />
                        </div>
                        <div className="my-3">

                        <input
                            name="ether"
                            type="text"
                            value={location.state.totalprice}
                            placeholder="Amount in ETH"
                            readOnly ={true}
                            style={{width: "400px"}}
                        />

                        </div>

                        {/* <div className="my-3">

                        <input
                            name="creator_ether"
                            type="text"
                            value={location.state.creatorfee}
                            placeholder="Amount in ETH"
                            readOnly ={true}
                            style={{width: "400px"}}
                        />
                        
                        </div> */}
                    </div>
                    <Button 
                        type="submit"
                    >
                        Pay now
                    </Button>
                    <ErrorMessage message={error} />
                    <TxList txs={txs} />
                    </main>

                </form>

                </Container>
              </Col>
          </Row>
      </div>
      

        </>
    );
}

export default PaymentForm;