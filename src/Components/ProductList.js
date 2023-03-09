import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import mystore from "./Store";
import axios from 'axios';

function ProductList() {

    const [allProductList, setallProductList] = useState([]);
    var navigate = useNavigate();

    const logout = () => {
      mystore.dispatch({ type: 'LOGGEDOUT' });

      sessionStorage.removeItem("customer");

      navigate('/');
    }

    useEffect(() => {
      let allProductList = JSON.parse(sessionStorage.getItem("customer"));

      axios.get("http://localhost:8080/products/view")
      .then(response =>{
          console.log(response.data);
          setallProductList(response.data);

       
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
      <th scope="col">Product Name</th>
      <th scope="col">Description</th>
      <th scope="col">Weight</th>
      <th scope="col">Rating</th>
      <th scope="col">Part Number</th>
    </tr>
  </thead>

  {
    allProductList.map((v) => {

      return(
        <tbody>
        <tr>
        <th scope="row">{v.id}</th>
        <td>{v.productName}</td>
        <td>{v.description}</td>
        <td>{v.weight}</td>
        <td>{v.rating}</td>
        <td>{v.partNumber}</td>
        <td><button type="button" class="btn btn-primary">Buy Product</button></td>
        {/* <td><button type="button" class="btn btn-success">Edit</button></td>
        <td><button type="button" class="btn btn-danger">Delete</button></td> */}
        </tr> 

    
        </tbody>
        )
    })
      
  }

   
  
</table>
    </div>
  )
}

export default ProductList
