import React from 'react'

const Signup = (props) => {
  return (
    <div>


    
    <form className = "card col-md-6 offset-md-3 offset-md-3">
      
      <div className="form-group">
        <label for="firstname">First Name</label>
        <input type="text" className="form-control" id="firstname"/>
      </div>

      <div className="form-group">
        <label for="lastName">Last Name</label>
        <input type="text" className="form-control" id="lastName" />
      </div>

      <div className="form-group">
        <label for="exampleDropdownFormEmail1">Email address</label>
        <input type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"/>
      </div>

      <div className="form-group">
        <label for="exampleDropdownFormPassword1">Password</label>
        <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Password"/>
      </div>

      <div className="form-group">
        <label for="exampleDropdownFormPassword1">Contact No</label>
        <input type="text" className="form-control" id="contactno"/>
      </div>

      <label for="role">Choose a Role:</label>
      <select  id="role">
      <option value="ROLE_ADMIN">Admin</option>
      <option value="ROLE_DISTRIBUTOR">Distributor</option>
      <option value="ROLE_CUSTOMER">Customer</option>
      <option value="ROLE_DELIVERYPERSON">Delivery Person</option>
      </select>

      <div className="form-group">
        <label for="exampleDropdownFormPassword1">Address:</label>
      </div>

      <div className="form-group">
        <label for="line1">Line 1</label>
        <input type="text" className="form-control" id="line1"/>
      </div>

      <div className="form-group">
        <label for="line1">Line 2</label>
        <input type="text" className="form-control" id="line2"/>
      </div>

      <div className="form-group">
        <label for="landmark">Landmark</label>
        <input type="text" className="form-control" id="landmark" />
      </div>

      <div className="form-group">
        <label for="city">City</label>
        <input type="text" className="form-control" id="city" />
      </div>

      <div className="form-group">
        <label for="district">District</label>
        <input type="text" className="form-control" id="district" />
      </div>

      <div className="form-group">
        <label for="state">State</label>
        <input type="text" className="form-control" id="state" />
      </div>

      <div className="form-group">
        <label for="pincode">Pincode</label>
        <input type="text" className="form-control" id="pincode" />
      </div>

        <button type="submit" className="btn btn-primary">Sign in</button>

        <div className="dropdown-divider"></div>


    </form>

    </div>
  )
}

export default Signup
