import { useState } from "react";
import classes from "./Signup.module.css";

const Signup = () => {
  const [signUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // getting signUp form data
  const signUpDataHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSignUpData({ ...signUpData, [name]: value });
  };

  // signup form submit handler

  const { firstName, lastName, email, password, confirmPassword } = signUpData;
  const submitSignUpFormHandler = async () => {
    try {
      if (firstName && lastName && email && password === confirmPassword) {
        setSignUpData({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
        console.log(signUpData);
      } else {
        alert("Must Fill The Data...");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className={classes.form__wrapper}>
        <div className={classes.form__container}>
          <h2 className={classes.form__heading}>Sign Up Now</h2>
          <div className={classes.input__group}>
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              placeholder="Enter First Name"
              value={signUpData.firstName}
              onChange={signUpDataHandler}
            />
          </div>
          <div className={classes.input__group}>
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              placeholder="Enter Last Name"
              value={signUpData.lastName}
              onChange={signUpDataHandler}
            />
          </div>
          <div className={classes.input__group}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email Here"
              value={signUpData.email}
              onChange={signUpDataHandler}
            />
          </div>
          <div className={classes.input__group}>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Enter Your Password"
              value={signUpData.password}
              onChange={signUpDataHandler}
            />
          </div>
          <div className={classes.input__group}>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={signUpData.confirmPassword}
              onChange={signUpDataHandler}
            />
          </div>
          <button
            onClick={submitSignUpFormHandler}
            className={classes.signup__btn}
          >
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};

export default Signup;
