import { useState } from "react";
import classes from "./Login.module.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  // Getting login data
  const getLoginDataHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLoginData({ ...loginData, [name]: value });
  };

  // Login Handler
  const { email, password } = loginData;
  const loginHandler = () => {
    try {
      if (email && password) {
        console.log(loginData);
        setLoginData({
          email: "",
          password: "",
        });

        navigate("/");
      } else {
        alert("Please fill the Data !");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className={classes.form__wrapper}>
        <div className={classes.form__container}>
          <h2 className={classes.form__heading}>Welcome Back!</h2>
          <form>
            <div className={classes.input__group}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email Here"
                onChange={getLoginDataHandler}
                value={loginData.email}
              />
            </div>
            <div className={classes.input__group}>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Enter Your Password"
                onChange={getLoginDataHandler}
                value={loginData.password}
              />
            </div>
            <button className={classes.login__btn} onClick={loginHandler}>
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
