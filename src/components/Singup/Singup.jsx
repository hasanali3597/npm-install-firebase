import { createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { NavLink } from "react-router";
import { auth } from "../../firebase/firebase.init";

const Signup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(name, email, password);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        e.target.reset();
        console.log("User created successfully", user);
      })
      .catch((error) => {
        console.error("Error creating user", error.code, error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <div className="card-body">
            <h1 className="text-4xl font-bold text-center">Signup now!</h1>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                name="name"
                className="input input-bordered w-full"
                placeholder="Enter your name"
              />

              <input
                type="email"
                name="email"
                className="input input-bordered w-full"
                placeholder="Email"
              />

              <input
                type="password"
                name="password"
                className="input input-bordered w-full"
                placeholder="Password"
              />

              <button className="btn btn-neutral w-full">Signup</button>
            </form>
          </div>
          <p>
            Already have an account?{" "}
            <NavLink to="/login" className="link link-primary">
              Login
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
