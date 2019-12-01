import React from "react";
import "../assets/css/loginForm.css";
import "../assets/fonts/ionicons.min.css";

export default function login() {
  return (
    <div class="login-dark">
      <form method="POST">
        <h2 class="sr-only">Login Form</h2>
        <div class="illustration">
          <i class="icon ion-ios-locked-outline"></i>
        </div>
        <div class="form-group">
          <input
            class="form-control"
            type="email"
            name="email"
            placeholder="Email"
          />
        </div>
        <div class="form-group">
          <input
            class="form-control"
            type="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <div class="form-group">
          <button class="btn btn-primary btn-block" type="submit">
            Log In
          </button>
        </div>
        <a class="forgot" href="#">
          Forgot your email or password?
        </a>
        <a class="forgot" href="/">
          Back to HomePage  
        </a>
      </form>
    </div>
  );
}
