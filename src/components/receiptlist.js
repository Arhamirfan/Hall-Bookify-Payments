import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import ReceiptDataService from "../services/receiptservices";
import {useNavigate } from 'react-router-dom';


const BooksList = ({ getReceiptId }) => {
  const [receipt, setReceipts] = useState([]);
  useEffect(() => {
    getReceipt();
  }, []);

  const navigate = useNavigate();
  

  const getReceipt = async () => {
    const data = await ReceiptDataService.getallReceipt();
    console.log(data.docs);
    setReceipts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    //save data in variable and send to other screen(it is document id of data collection)
  };

  
//   const deleteHandler = async (id) => {
//     await BookDataService.deleteReceipt(id);
//     getReceipt();
//   };

  return (
    <>
      <div className="mb-2">
        <Button variant="dark edit" onClick={getReceipt}>
          Refresh List
        </Button>
      </div>

      {/* <pre>{JSON.stringify(receipt, undefined, 2)}</pre>} */}
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Package Name</th>
            <th>Location</th>
            <th>Buyer</th>
            <th>Seller</th>
            <th>Creator Fee</th>
            <th>Total Price</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {receipt.map((doc, index) => {
            return (
              <tr key={doc.id}>
                <td>{doc.invoicenumber}</td>
                <td>{doc.package}</td>
                <td>{doc.location}</td>
                <td>{doc.buyername}</td>
                <td>{doc.sellername}</td>
                <td>{doc.creatorfee}</td>
                <td>{doc.total}</td>
                <td>{doc.status}</td>
                <td>
                  <Button
                    variant="danger"
                    className="edit"
                    onClick={(e) => getReceiptId(doc.id)}
                  >
                    ID
                  </Button>
                  <Button
                    variant={doc.status != 'Paid' ? 'primary' : 'success'}
                    className="edit"
                    //onClick={(e) => getReceiptId(doc.id)}
                    onClick={() => { 
                      if(doc.status != 'Paid'){
                        console.log('Sending data: Package Receipt account: ');
                        console.log(doc.sellerwalletaddress);
                        console.log(doc.status);
                        var d_packageprice_eth = parseFloat(doc.packageprice)/3500;
                        var d_totalprice_eth = parseFloat(doc.total)/3500;
                        var d_creatorfeeprice_eth = parseFloat(doc.creatorfee)/3500;
                        
                        let paymentData = {packageid: doc.invoicenumber,packagename: doc.package, creatorfee: d_creatorfeeprice_eth, totalprice: d_totalprice_eth, walletaddress: doc.sellerwalletaddress};
                        console.log(paymentData);
                        
                        navigate('/PaymentForm',{state:{id: doc.id, packageid: doc.invoicenumber,packagename: doc.package, packageprice: d_packageprice_eth,creatorfee: d_creatorfeeprice_eth, totalprice: d_totalprice_eth, walletaddress: doc.sellerwalletaddress, status: doc.status}});                        
                      }

                    }}
                  >
                   {doc.status != 'Paid' ? 'pay' : 'paid'}
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default BooksList;