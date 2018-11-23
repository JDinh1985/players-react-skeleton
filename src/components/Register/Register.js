import React, { Component } from 'react';
import './Register.css';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  // flex-column-center found in global index.css file
  render() {
    return (
      <div className="flex-column-center register-container">
        <h2>
          Glad to have you back. <br />
          Lets get started.
        </h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" className="form-control" id="firstName" name="first_name" placeholder="John" onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">First Name</label>
            <input type="text" className="form-control" id="lastName" name="last_name" placeholder="Doe" onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.handleChange} />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" name="password" placeholder="Password" onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label for="confirmPassword">Email address</label>
            <input type="email" className="form-control" id="confirmPassword" name="confirm_password" placeholder="Confirm Password" />
          </div>
          <button type="submit" className="btn btn-info">Submit</button>
        </form>
      </div>
    );
  }
}

export default Register;
