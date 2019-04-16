import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class SignUp extends React.Component {
  handleOnSubmit = e => {
    e.preventDefault();
    const name = $('#inputName').val();
    const username = $('#inputUser').val();
    const email = $('#inputEmail').val();
    const password = $('#inputPass').val();
    const confirmPass = $('#confirmPass').val();
    const user = {
      name,
      username,
      email,
      password,
      confirmPass
    };
    axios
      .post('/signup', user, {})
      .then(resp => {
        this.props.history.push('/signup');
      })
      .catch(err => {
        this.props.history.push('/signup');
      });
  };

  render() {
    return (
      <div className="row mt-5">
        <div className="col-md-6 m-auto">
          <div className="card card-body">
            <h2 className="text-center mb-3">
              <i className="fa fa-user-plus" /> Register
            </h2>
            {/* <% include ./partials/messages %> */}
            <form onSubmit={this.handleOnSubmit}>
              <div className="form-group">
                <label for="name">Name</label>
                <input
                  type="name"
                  id="inputName"
                  name="name"
                  className="form-control"
                  placeholder="Enter Name"
                  required
                  // value="<%= typeof name != 'undefined' ? name : '' %>"
                />
              </div>
              <div className="form-group">
                <label for="name">Username</label>
                <input
                  type="name"
                  id="inputUser"
                  name="username"
                  className="form-control"
                  placeholder="Enter Username"
                  required
                  // value="<%= typeof name != 'undefined' ? name : '' %>"
                />
              </div>
              <div className="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  id="inputEmail"
                  name="email"
                  className="form-control"
                  placeholder="Enter Email"
                  required
                  // value="<%= typeof email != 'undefined' ? email : '' %>"
                />
              </div>
              <div className="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  id="inputPass"
                  name="password"
                  className="form-control"
                  placeholder="Create Password"
                  required
                  // value="<%= typeof password != 'undefined' ? password : '' %>"
                />
              </div>
              <div className="form-group">
                <label for="confirmPass">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPass"
                  name="confirmPass"
                  className="form-control"
                  placeholder="Confirm Password"
                  required
                  // value="<%= typeof confirmPass != 'undefined' ? confirmPass : '' %>"
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Register
              </button>
            </form>
            <p className="lead mt-4">
              Have An Account? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
