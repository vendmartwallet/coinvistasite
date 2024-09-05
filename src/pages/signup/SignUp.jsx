import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../../components/context/authContext';
import { toCreateUserWithEmailAndPassword } from '../../components/firebase/Auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  const Spinner = ({ size = 30, color = '#000' }) => {
    return (
      <div
        className="animate-spin"
        style={{
          height: size,
          width: size,
          border: `4px solid ${color}`,
          borderTop: `4px solid transparent`,
          borderRadius: '50%',
        }}
      ></div>
    );
  };

  const [userName, setUserName] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [country, setCountry] = useState('');
  const [loading, setLoading] = useState(false);

  const { userLoggedIn } = useAuth();
  const { currentUser } = useAuth();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!isRegistering) {
      try {
        setIsRegistering(true);
        await toCreateUserWithEmailAndPassword(
          email,
          password,
          confirmPassword
        );
        toast.success(`Sign up successful, Welcome ${currentUser?.email}!`);
      } catch (error) {
        toast.error(`There was an error signing up! Error: ${error.message}`);
      } finally {
        setLoading(false);
        setIsRegistering(false);
      }
    }
  };

  return (
    <>
      {userLoggedIn && <Navigate to={'/dashboard'} replace={true} />}
      <div
        className="bg-[#161C2D] min-h-screen flex flex-col px-5 lg:items-center py-16"
        data-aos="flip-left"
      >
        <div className="signup bg-white lg:w-[30%] min-h-screen rounded-md p-10">
          <div className="text-[#238F26] font-semibold text-2xl text-center pb-8">
            Create an Account
          </div>

          <form onSubmit={handleSignup} className="flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-[#238F26] font-medium text-base"
              >
                UserName
              </label>
              <input
                type="text"
                className="py-3 border-2 rounded-lg px-5 outline-none"
                placeholder="Enter a Unique Username"
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-[#238F26] font-medium text-base"
              >
                FullName
              </label>
              <input
                type="text"
                className="py-3 border-2 rounded-lg px-5 outline-none"
                placeholder="Enter FullName"
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-[#238F26] font-medium text-base"
              >
                Your Email
              </label>
              <input
                type="email"
                className="py-3 border-2 rounded-lg px-5 outline-none"
                placeholder="name@example.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-[#238F26] font-medium text-base"
              >
                Phone Number
              </label>
              <input
                type="tel"
                className="py-3 border-2 rounded-lg px-5 outline-none"
                placeholder="Enter Phone number"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-[#238F26] font-medium text-base"
              >
                Password
              </label>
              <input
                type="password"
                className="py-3 border-2 rounded-lg px-5 outline-none"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-[#238F26] font-medium text-base"
              >
                Confirm Password
              </label>
              <input
                type="password"
                className="py-3 border-2 rounded-lg px-5 outline-none"
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-[#238F26] font-medium text-base"
              >
                Country
              </label>
              <input
                type="text"
                className="py-3 border-2 rounded-lg px-5 outline-none"
                placeholder="Enter Your Country"
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>

            <button
              className="bg-[#04803A] rounded-lg text-white font-semibold text-lg py-3 text-center flex items-center justify-center"
              disabled={loading}
              type="submit"
            >
              {loading ? <Spinner size={20} color="#fff" /> : 'Register'}
            </button>

            <div className="rounded-lg font-light text-base py-3 text-center">
              Already have an account?{' '}
              <span className="text-[#017BFF] font-semibold text-lg">
                <Link to="/login">Login</Link>
              </span>
            </div>

            <div className="text-[#238F26] font-normal text-center text-base">
              © Copyright 2024 10xSignal All Rights Reserved.
            </div>
          </form>

          <div className="font-semibold text-center text-base text-[#238F26] pt-5">
            <Link to="/">Go to Home</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
