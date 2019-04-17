import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FormErrors } from './FormErrors';
class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      username: '',
      email: '',
      password: '',
      confirmPass: '',
      formErrors: { username: '', email: '', password: '', confirmPass: '' },
      emailValid: false,
      usernameValid: false,
      passwordValid: false,
      confirmPassValid: false,
      formValid: false
    };
    this.validateField = this.validateField.bind(this);
  }

  handleUserInput = e => {
    const field = e.target.name;
    const valueField = e.target.value;
    this.setState({ [field]: valueField }, () =>
      this.validateField(field, valueField)
    );
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let usernameValid = this.state.usernameValid;
    let passwordValid = this.state.passwordValid;
    let confirmPassValid = this.state.confirmPassValid;
    switch (fieldName) {
      case 'username':
        usernameValid = value.length > 6 && value.length < 12;
        fieldValidationErrors.username = usernameValid
          ? ''
          : 'username must has character > 6 and < 12';
        break;
      case 'password':
        passwordValid = value.length > 6 && value.length < 12;
        fieldValidationErrors.password = passwordValid
          ? ''
          : 'password must has character > 6 and < 12';
        break;
      case 'confirmPass':
        let password = this.state.password;
        let confirmPass = value;
        confirmPassValid = confirmPass === password;
        fieldValidationErrors.confirmPass = confirmPassValid
          ? ''
          : 'not match password';
        break;
      default:
        break;
    }
    this.setState(
      { formErrors: fieldValidationErrors, usernameValid, passwordValid, confirmPassValid },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid: this.state.passwordValid && this.state.confirmPassValid && this.state.usernameValid
    });
  }

  handleOnSubmit = e => {
    e.preventDefault();
    const name = this.state.name;
    const username = this.state.username;
    const email = this.state.email;
    const password = this.state.password;
    const confirmPass = this.state.confirmPass;
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
        if (!resp.data.msg) {
          this.props.history.push('/login');
        } else {
          this.state.formErrors.username = resp.data.msg;
          this.props.history.push('/signup');
        }
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
            <div className="panel panel-default">
              <FormErrors formErrors={this.state.formErrors} />
            </div>
            <form onSubmit={this.handleOnSubmit}>
              <div className="form-group">
                <label for="name">Name</label>
                <input
                  type="name"
                  id="inputName"
                  name="name"
                  className="form-control"
                  placeholder="Enter Name"
                  value={this.state.name}
                  onChange={this.handleUserInput}
                  required
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
                  value={this.state.username}
                  onChange={this.handleUserInput}
                  required
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
                  onChange={this.handleUserInput}
                  required
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
                  value={this.state.password}
                  onChange={this.handleUserInput}
                  required
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
                  value={this.state.confirmPass}
                  onChange={this.handleUserInput}
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-block"
                disabled={!this.state.formValid}
              >
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
