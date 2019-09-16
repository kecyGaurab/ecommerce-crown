import React, { Component } from "react";
import "./sign-in.styles.scss";
import FormInput from "../../../components/form-input/form-input.component";
import CustomButton from "../../../components/custom-button/custom-button.component";

import { signInWithGoogle } from '../../../firebase/firebase.utils'
import { sign } from "crypto";

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
      <div className="sign-in">
        <h1>I already have an account</h1>
        <span>Sign in with email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
            required
          />

          <FormInput
            name="password"
            type="password"
            handleChange={this.handleChange}
            value={this.state.password}
            label="password"
            required
          />

          <div className='buttons'>
          <CustomButton type="submit">Sign In </CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign in With Google</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
