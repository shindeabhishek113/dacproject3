import axios from 'axios';
import React from 'react'
import { useState, useEffect  } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProductList from './ProductList';
import mystore from './Store';
const Customer = (props) => {


  const navigate = useNavigate();
  const [data, setState] = useState({
    firstName: "",
    lastName: "",
    role:""
  });


  
  useEffect(() => {
    let customer = JSON.parse(sessionStorage.getItem("customer"));
    // setState({
    // role:customer.role,message:customer.message,id:customer.id
    // })
    axios.get("http://localhost:8080/user/"+customer.id)
    .then(response =>{
        console.log(response.data.firstName);
       setState({firstName:response.data.firstName,lastName:response.data.lastName,role:response.data.role})
    })
    .catch(err =>{
      console.log(err);
    })

   


  },[]);

  const logout = () => {
    mystore.dispatch({ type: 'LOGGEDOUT' });

    sessionStorage.removeItem("customer");

    navigate('/');
}
  return (
    <div>
      
  
    <div className="container" style={{ marginBottom: "50px" }}>
                <div className="row my-3">
                    <div className="col-sm-3" ><h2 className="">Welcome,{data.firstName}{data.lastName}</h2></div>

                    <div className="col-sm-6">
                        <button onClick={logout} style={{ "float": "right" }} className="btn btn-danger">Logout </button>
                    </div>
                </div>

                
    </div>
    <div>
        <ProductList></ProductList>
    </div>

   

    </div>
  )
}

export default Customer