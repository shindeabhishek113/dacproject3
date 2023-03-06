import { BrowserRouter, Link,Route,Switch,Router, Routes } from 'react-router-dom';
import Aboutus from './Aboutus';
import Signin from './Signin';
import Contactus from './Contactus';


import Signup from './Signup';


const MenuBar = () => {
  return (
    // <BrowserRouter>
      
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">E-Spare Store</a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
        <li className="nav-item"><Link className="nav-link" to="/Home">Home</Link></li>
        <li class="nav-item"><Link className="nav-link" to="/Aboutus">Aboutus</Link></li>
        <li class="nav-item"><Link className="nav-link" to="/Contactus">Contactus</Link></li>
        <li class="nav-item"><Link className="nav-link" to="/Signin">Signin</Link></li>
        {/* <li class="nav-item"><Link className="nav-link" to="/Signup">Signup</Link></li> */}

            {/* <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
        </li> */}
        </ul>


          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>

        </nav> 

        
        // <div>
        // <Routes>
        // <Route path="/Signin" component={Signin} />
        // <Route path="/Signup" component={Signup} />
        // <Route path="/Aboutus" component={Aboutus} />
        // <Route path="/Contactus" component={Contactus} />
      
        // </Routes>
        // </div>
     
     

  );
}
export default MenuBar;