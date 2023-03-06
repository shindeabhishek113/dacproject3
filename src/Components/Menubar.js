import { BrowserRouter, Link,Route,Switch,Router } from 'react-router-dom';
import Aboutus from './Aboutus';
import Signin from './Signin';

import Carousel from "react-bootstrap/Carousel";
import image1 from "./Images/SIGNA 4625.jpg";
import image2 from "./Images/signa-4625s-1660020245.jpg";
import image3 from "./Images/tata.jpg";


const MenuBar = () => {
  return (
    <BrowserRouter>
      
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
        <li class="nav-item"><Link className="nav-link" to="/Signup">Signup</Link></li>

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

        {/* Nav End */}


        <div>
        <Carousel interval={1500}>
          <Carousel.Item>
            <img className="d-block w-100" src={image1} alt="First slide" style={{ height: "400px" }} />
            <Carousel.Caption>


            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image2} alt="Second slide" style={{ height: "400px" }} />
            <Carousel.Caption>
          <h1>abhishek</h1>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image3} alt="Third slide" style={{ height: "400px" }} />
            <Carousel.Caption>


            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>

     


      <div>
      <Switch>
      <Route path="/Signin" component={Signin} />
      <Route path="/Aboutus" component={Aboutus} />
      {/* <Route path="/Contactus" element={<Contactus />} />
      <Route path="/Register" element={<Register />} /> */}
      </Switch>
      </div>
    </BrowserRouter>

  );
}
export default MenuBar;