import React from "react";
import "./sing-in.style.scss";

import FormInput from "../../components/form-input/form-input.component";
import CuatomButton from "../../components/custom-buttom/custom-buttom.component";
import { auth, signInWithgoogle } from "../../firebase/firebase.util";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an accound</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="text"
            value={this.state.email}
            label="Email"
            handleChange={this.handleChange}
          />

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            label="Password"
            handleChange={this.handleChange}
          />

          <div className="buttons">
            <CuatomButton type="submit">SIGN IN</CuatomButton>
            <CuatomButton
              type="button"
              onClick={signInWithgoogle}
              isGoogleSignIn
            >
              SIGN IN WITH GOOGLE
            </CuatomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
