import React from 'react'
import { Table } from "react-bootstrap";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import mystore from "./Store";
import axios from 'axios';

const DeliveredList = () => {

    const [deliveryPersonOrderList, setdeliveryPersonOrderList] = useState([]);
    var navigate = useNavigate();

    const logout = () => {
      mystore.dispatch({ type: 'LOGGEDOUT' });

      sessionStorage.removeItem("deliveryperson");

      navigate('/');
    }

    useEffect(() => {
        let deliveryPersonOrderList = JSON.parse(sessionStorage.getItem("deliveryperson"));
  
        axios.get("http://localhost:8080/myorder/deliverylist/"+deliveryPersonOrderList.id)
        .then(response =>{
            console.log(response.data);
            setdeliveryPersonOrderList(response.data);
  
         
        })
        .catch(err =>{
          console.log(err);
        })
    
    
      },[]);

  return (
    <div>
      
      <div className="info" style={{
            backgroundImage:
                "url('./images/thali.jpg')",
            height: '130vh',
            marginTop: '-10px',
            fontSize: '15px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>

            <br></br>
            <br></br>
          <h3 style={{ color: "black" }}>-- All Delivered List --</h3>
          <br /><br />
          
          <Table striped bordered hover responsive="md" style={{ border: "1" }}>
              <thead style={{ color: "green" }}>
                  <tr>
                    
                      <td><b>My Order id</b></td>
                      <td><b>Order Price</b></td>
                      <td><b>Order Date</b></td>
                      <td><b>Delivery Date</b></td>
                      <td><b>Order Status</b></td>
                      
                  </tr>
              </thead>
              
              {
                   deliveryPersonOrderList.map((v) => {
                  return (
                  <tbody>
                  <tr>
                  <td style={{ color: "red" }}>{v.id}</td>
                  <td style={{ color: "red" }}>{v.orderPrice}</td>
                  <td style={{ color: "red" }}>{v.orderDate}  </td>
                  <td style={{ color: "red" }}>{v.deliveryDate}</td>
                  <td style={{ color: "red" }}>{v.orderStatus}</td>
                  </tr>
                  </tbody>
                  )
                  })
              }
          </Table>
          </div>
    </div>
  )
}

export default DeliveredList
