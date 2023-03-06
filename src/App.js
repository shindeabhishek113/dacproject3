import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Route,Router,Routes,BrowserRouter, Switch} from 'react-router-dom'
import Aboutus from './Components/Aboutus';
import Menubar from './Components/Menubar';
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import MenuBar from './Components/Menubar';
import Contactus from './Components/Contactus';
import Homepage from './Components/Homepage';

function App() {
  return (

    // <div>
  
    //   <MenuBar></MenuBar>
      
      
    // </div>
    
    <div>
      <BrowserRouter>
      <Menubar></Menubar>

      <Routes>
      <Route path="/" element={<Homepage/>}></Route>
      <Route path="/Home" element={<Homepage/>}></Route>
      <Route path="/Signin"element={<Signin/>}></Route>
      <Route path="/Signup"element={<Signup/>}></Route>
      <Route path="/Aboutus"element={<Aboutus/>}></Route>
      <Route path="/Contactus"element={<Contactus/>}></Route>
      </Routes>
      </BrowserRouter>

    </div>

    
     

    //REady Code
      // <div className="App">
      // <BrowserRouter>

      // <Menubar></Menubar>

      // <div>
      // <Switch>
      
      // <Route path="/Aboutus" component={Aboutus}></Route>
      // <Route path="/Signin" component={Signin}></Route>

      // </Switch>
      // </div>

      // </BrowserRouter>
      // </div>
  );
}

export default App;

