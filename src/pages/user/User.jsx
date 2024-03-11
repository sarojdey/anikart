import React from "react";
import "./style.scss";
import NothingToShow from "../../components/nothingToShow/NothingToShow";

function User() {
  return (
    <div className="login">
      <div className="space"></div>
      <div className="signin">
        <div className="loginheadingcontainer">
          <span className="loginheading">Sign In</span>
        </div>
        <div className="loginContent">
          <div className="email">
            <label htmlFor="emailLogin">Email address</label>
            <input type="email" id="emailLogin" placeholder="Enter email" />
          </div>
          <div className="password">
            <label htmlFor="passwordLogin">Password</label>
            <input type="password" id="passwordLogin" placeholder="Enter password" />
          </div>
        </div>
        <div className="loginbtns">
          <div className="loginbtnsin">Sign in</div>
          <span>Or</span>
          <div className="loginbtnsup">Sign up</div>
        </div>
        <div className="forget"><span>Forgot password?</span></div>
      </div>
      <div className="signup"></div>
      
    </div>

    // <div>
    //   <NothingToShow />
    // </div>
  );
}

export default User;
