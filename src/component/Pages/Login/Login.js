import {React,  useContext } from "react";
import { useState } from "react";
import login from '../../../Main/asset/login.svg'

import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../Context/auth-context";


// import app from '../../Config/firebase.config';


// const auth = getAuth(app);

const Login = () => {
  const navigate = useNavigate();
  const {emailLogin} = useContext(AuthContext);
  const [error, setError] = useState({ email: "", password: "" });
  const [userInfo, SetUserInfo] = useState({ email: "", password: "" });
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // console.log(userInfo);
    const mail = userInfo.email;
    const pass = userInfo.password;

    emailLogin(mail, pass)
      // signInWithEmailAndPassword(auth, mail, pass)
      .then((result) => {
        const user = result.user;
        console.log(user);
        event.target.reset();
        toast.success("Login Success");
        navigate(from, { replace: true });
        // navigate(location?.state?.from?.pathname);
      })
      .catch((error) => {});
  };
  const handleEmailChange = (event) => {
    const email = event.target.value;

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError({
        ...error,
        email: "please enter a valid mail",
      });
      SetUserInfo({
        ...userInfo,
        email: "",
      });
    } else {
      setError({ ...error, email: "" });
      SetUserInfo({ ...userInfo, email: event.target.value });
    }
  };

  const handlePasswordChange = (event) => {
    const password = event.target.value;

    if (password.length < 6) {
      setError({ ...error, password: "password must be at 6 character" });
      SetUserInfo({ ...userInfo, password: "" });
    } else {
      setError({ ...error, password: "" });
      SetUserInfo({ ...userInfo, password: event.target.value });
    }
  };

    return (
      <div className="bg-base-200">
        <h1 className="font-bold text-6xl">Login Now!</h1>
        <div className="hero min-h-screen  flex-col lg:flex-row-reverse">
          
            <div className="text-center lg:text-left">
              <div className="">
                <img src={login} alt="" />
              </div>
              {/* <p className="py-6">
            By Login You can access our courses. Thank you. Enjoy your Journey
            with us
          </p> */}
            </div>
            <div>
              <form onSubmit={handleFormSubmit}>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                  <div className="card-body">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="email"
                        name="email"
                        onChange={handleEmailChange}
                        className="input input-bordered"
                      />
                      {error.email && (
                        <p className="text-red-500">{error.email}</p>
                      )}
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Password</span>
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="password"
                        name="password"
                        onChange={handlePasswordChange}
                        className="input input-bordered"
                      />
                      {error.password && (
                        <p className="text-red-500"> {error.password}</p>
                      )}
                      <label className="label">
                        <a href="#" className="label-text-alt link link-hover">
                          Forgot password?
                        </a>
                      </label>
                    </div>
                    <div className="form-control mt-6">
                      <button className="btn btn-primary">Login</button>
                    </div>
                    <p>
                      Do not have an account?{" "}
                      <Link className="text-orange-500" to="/signup">
                        Sign Up Here
                      </Link>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          
        </div>
      </div>
    );
};

export default Login;
