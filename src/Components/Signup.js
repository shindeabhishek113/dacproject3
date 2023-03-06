import React from 'react'

const Signup = (props) => {
  return (
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
        <button type="submit" className="btn btn-primary">Sign up</button>

    </form>

    </div>
  )
}

export default Signup
