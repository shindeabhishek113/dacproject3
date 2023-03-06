import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import Aboutus from './Aboutus'
import { useNavigate } from 'react-router-dom';
// import Switch from 'react-dom'
const Signin = (props) => {
  const navigate = useNavigate();

  return (

  //   <div>
  //     <BrowserRouter>
  //       <div>
  //     <nav className="navbar navbar-expand-lg navbar-light bg-light">
  //   <a className="navbar-brand" href="#">E-Spare Store</a>
    
  //   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  //   <span className="navbar-toggler-icon"></span>
  //   </button>

  //   <div className="collapse navbar-collapse" id="navbarSupportedContent">
  //   <ul className="navbar-nav mr-auto">
  //     <li className="nav-item">
  //       <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
  //     </li>
  //     <li class="nav-item">
  //       {/* <a class="nav-link" href="#">Aboutus</a> */}
  //       <Link className="nav-link" to="/Aboutus">Aboutus</Link>
  //     </li>
  //     <li class="nav-item">
  //       <a class="nav-link" href="#">Contactus</a>
  //     </li>
  //     <li class="nav-item">
  //       <a class="nav-link" href="#">Signin</a>
  //     </li>

  //     {/* <li className="nav-item dropdown">
  //       <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  //         Dropdown
  //       </a>
  //       <div className="dropdown-menu" aria-labelledby="navbarDropdown">
  //         <a className="dropdown-item" href="#">Action</a>
  //         <a className="dropdown-item" href="#">Another action</a>
  //         <div className="dropdown-divider"></div>
  //         <a className="dropdown-item" href="#">Something else here</a>
  //       </div>
  //     </li> */}
  //     </ul>
  //     <form className="form-inline my-2 my-lg-0">
  //     <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
  //     <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  //   </form>
  // </div>
  // </nav>
  // <br></br>
  // <br></br>


  <div>
    <form className = "card col-md-6 offset-md-3 offset-md-3">
      <div className="form-group">
        <label for="exampleDropdownFormEmail1">Email address</label>
        <input type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"/>
      </div>

      <div className="form-group">
        <label for="exampleDropdownFormPassword1">Password</label>
        <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Password"/>
      </div>


      <button type="submit" className="btn btn-primary">Sign in</button>

        <div className="dropdown-divider"></div>
        <a className="dropdown-item" href="#">New around here?</a>
      <button type="submit" className="btn btn-primary" onClick={() => navigate("/Signup")}>Sign up</button>

      </form>
   
    


     </div>

    // </BrowserRouter>
    // </div>
   
  )
}

export default Signin
