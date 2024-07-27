import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <div className="bg-[#161C2D] min-h-screen flex flex-col px-5 lg:items-center py-16">
        <div className="signup bg-white lg:w-[30%] min-h-screen rounded-md p-10">
          <div className="text-[#238F26] font-semibold text-2xl text-center pb-8">
            Create an Account
          </div>

          <div>
            <form action="" className=" flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor=""
                  className=" text-[#238F26] font-medium text-base"
                >
                  UserName
                </label>
                <input
                  type="text"
                  className=" py-3 border-2 rounded-lg  px-5 outline-none "
                  placeholder="Enter a Unique Username"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor=""
                  className=" text-[#238F26] font-medium text-base"
                >
                  FullName
                </label>
                <input
                  type="text"
                  className=" py-3 border-2 rounded-lg  px-5 outline-none "
                  placeholder="Enter FullName"
                />
              </div>

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
                  placeholder="name@example.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor=""
                  className=" text-[#238F26] font-medium text-base"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  className=" py-3 border-2 rounded-lg  px-5 outline-none "
                  placeholder="Enter Phone number"
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
                  placeholder="Enter Passsword"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor=""
                  className=" text-[#238F26] font-medium text-base"
                >
                  Confirm Password
                </label>
                <input
                  type="text"
                  className=" py-3 border-2 rounded-lg  px-5 outline-none "
                  placeholder="Confirm Password"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor=""
                  className=" text-[#238F26] font-medium text-base"
                >
                  Country
                </label>
                <input
                  type="text"
                  className=" py-3 border-2 rounded-lg  px-5 outline-none "
                  placeholder="Enter Your Country "
                />
              </div>

              <div className="bg-[#04803A] rounded-lg text-white font-semibold text-lg py-3 text-center">
                Register
              </div>

              <div className=" rounded-lg font-light text-base py-3 text-center">
                Already have an account ?{" "}
                <span className=" text-[#017BFF] font-semibold text-lg">
                  <Link to="/login">Login</Link>
                </span>
              </div>

              <div className="text-[#238F26] font-normal text-center text-base">
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

export default SignUp;
