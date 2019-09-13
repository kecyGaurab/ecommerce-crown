import React, { Component } from "react";
import "./sign-in.styles.scss";
import FormInput from '../../../components/form-input/form-input.component';

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
    const handleSubmit = event => {
      event.preventDefault();
      this.setState({
        email: "",
        password: ""
      });
    };
    const handleChange = event => {
      const { value, name } = event.target;
      this.setState({ [name]: value });
    };
  }
  render() {
    return (
      <div className='sign-in'>
        <h1>I already have an account</h1>
        <span>Sign in with email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
         
          <FormInput
            name="password"
            type="password"
            handleChange={this.handleChange}
            value={this.state.password}
            label='password'
            required
          />
         

          <input type="submit" value="Sign In" />
        </form>
      </div>
    );
  }
}
