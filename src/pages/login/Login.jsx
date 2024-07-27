import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="bg-[#161C2D] min-h-screen flex flex-col px-5 justify-center lg:items-center py-16">
        <div className="login bg-white lg:w-[30%] min-h-fit rounded-md p-10">
          <div className=" font-medium text-3xl text-center pb-8">
            User Login
          </div>

          <div>
            <form action="" className=" flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor=""
                  className=" text-[#238F26] font-medium text-base"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  className=" py-3 border-2 rounded-lg  px-5 outline-none "
                  placeholder="Enter a Unique Username"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor=""
                  className=" text-[#238F26] font-medium text-base"
                >
                  Password
                </label>
                <input
                  type="password"
                  className=" py-3 border-2 rounded-lg  px-5 outline-none "
                  placeholder="Enter Password"
                />
              </div>

              <div className="bg-[#04803A] rounded-lg text-white font-semibold text-lg py-3 text-center">
                Login
              </div>

              <div className=" rounded-lg font-normal text-[#238F26] text-sm py-3 text-center">
                Don't have an account ?{" "}
                <span className=" font-medium text-black text-lg">
                  <Link to="/register">Sign Up</Link>
                </span>
              </div>

              <div className=" font-light text-center text-base">
                © Copyright 2024 10xSignal All Rights Reserved.
              </div>
            </form>

            <div className=" font-semibold text-center text-base text-[#238F26] pt-5">
              <Link to="/">Go to Home</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
