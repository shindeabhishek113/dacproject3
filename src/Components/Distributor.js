import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import mystore from "./Store";
import axios from 'axios';


const Distributor = () => {

  const [allSuppliedProductList, setallSuppliedProductList] = useState([]);
    var navigate = useNavigate();

    const logout = () => {
      mystore.dispatch({ type: 'LOGGEDOUT' });

      sessionStorage.removeItem("distributor");

      navigate('/');
    }

    useEffect(() => {
      let allSuppliedProductList = JSON.parse(sessionStorage.getItem("distributor"));

      axios.get("http://localhost:8080/supplierproducts")
      .then(response =>{
          console.log(response.data);
          setallSuppliedProductList(response.data);

       
      })
      .catch(err =>{
        console.log(err);
      })
  
  
    },[]);



  return (
    <div>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Price</th>
      <th scope="col">Discount</th>
      <th scope="col">Final Price</th>
      <th scope="col">Action</th>
    </tr>
  </thead>

  {
    allSuppliedProductList.map((v) => {

      return(
        <tbody>
        <tr>
        <th scope="row">{v.id}</th>
        <td>{v.price}</td>
        <td>{v.discount}</td>
        <td>{v.finalPrice}</td>
        <td>{v.quantity}</td>
        <td><button type="button" class="btn btn-primary">Primary</button></td>
        <td><button type="button" class="btn btn-success">Edit</button></td>
        <td><button type="button" class="btn btn-danger">Delete</button></td>
        </tr> 

    
        </tbody>
        )
    })
      
  }

   
  
</table>
    </div>
  )
}

export default Distributor

