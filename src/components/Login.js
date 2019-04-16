import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap';
import '../css/login.css';
import { connect } from 'react-redux';
import { logIn } from '../redux/user';
class Login extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    const username = $('#inputUser').val();
    const password = $('#inputPass').val();
    const user = {
      username,
      password
    };
    this.props.logIn(user);
    this.props.history.push('/');
  };

  render() {
    return (
      <div className="row mt-5">
        <div className="col-md-6 m-auto">
          <div className="card card-body">
            <h2 className="text-center mb-3">
              <i className="fa fa-sign-in" /> Login
            </h2>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label for="username">Username</label>
                <input
                  type="username"
                  id="inputUser"
                  name="username"
                  className="form-control"
                  placeholder="Enter username"
                />
              </div>
              <div className="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  id="inputPass"
                  name="password"
                  className="form-control"
                  placeholder="Enter Password"
                />
              </div>
              <button
                type="submit"
                className="btn btn-outline-success btn-block"
              >
                Login
              </button>
            </form>
            <p className="lead mt-4">
              No Account? <Link to="/signup">Register</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return state.user;
};
export default connect(
  mapStateToProps,
  { logIn }
)(Login);
