import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import mystore from "./Store";
import axios from 'axios';


function SearchProductList() {

    // const [partNumber, setPartNumber] = useState("");
    
    //   const [product,setProduct] = useState([]);
    
    // //   const changeHandler = (e) => {
    // //     setData((data) => ({
    // //       ...data,
    // //       [e.target.name]: e.target.value
    // //     }));
    // //     console.log(e.target.value)
    // //   }

    //   const changeHandler = (e) => {
    //     setData((data) => ({
    //       ...data,
    //       [e.target.name]: e.target.value
    //     }));
    //     console.log(e.target.value)
    //   }
      
    //   var navigate = useNavigate();
    
    //   const submitData = () => {
    
    //     axios.get("http://localhost:8080/products/Product/"+data.partNumber)
    //           .then(response => {
                
    //             console.log(response.data);
    //             setProduct(response.data)
                
    //           })
    //           .catch(err => {console.log(err)});
        
    // }
    

    return(
       <div>in search</div> 
    )

//   return (
//     <div>
//         <div>
//         <form className="form-inline my-2 my-lg-0">

//         <input className="form-control mr-sm-2" type="number" placeholder="Search" aria-label="Search" onChange={changeHandler}></input>
//         <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onSubmit={submitData}>Search</button>

//         </form>
//         </div>


//         <div>
//         <table class="table">
//   <thead>
//     <tr>
//       <th scope="col">Id</th>
//       <th scope="col">Product Name</th>
//       <th scope="col">Description</th>
//       <th scope="col">Weight</th>
//       <th scope="col">Rating</th>
//       <th scope="col">Part Number</th>
//     </tr>
//   </thead>

//   {
//     product.map((v) => {

//       return(
//         <tbody>
//         <tr>
//         <th scope="row">{v.id}</th>
//         <td>{v.productName}</td>
//         <td>{v.description}</td>
//         <td>{v.weight}</td>
//         <td>{v.rating}</td>
//         <td>{v.partNumber}</td>
//         <td><button type="button" class="btn btn-primary">Buy Product</button></td>
//         {/* <td><button type="button" class="btn btn-success">Edit</button></td>
//         <td><button type="button" class="btn btn-danger">Delete</button></td> */}
//         </tr> 

    
//         </tbody>
//         )
//     })
      
//   }

   
  
// </table>

//         </div>
        
//     </div>
//   )
}

export default SearchProductList
