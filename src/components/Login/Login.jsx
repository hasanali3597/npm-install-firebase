import React from "react";
import { auth } from "../../firebase/firebase.init";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        e.target.reset();
        console.log("User logged in successfully", user);
      })
      .then((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error logging in", errorCode, errorMessage);
      });
    console.log("Login form submitted", { email, password });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <form onSubmit={handleSubmit}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
            </form>
          </div>
          <p>
            New to this site?
            <a href="/signup" className="link link-primary">
              Signup
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
