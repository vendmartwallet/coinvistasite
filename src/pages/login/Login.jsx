import React, {useState} from "react";
import { Link, Navigate } from "react-router-dom";
import { toSignInWithEmailAndPassword } from "../../components/firebase/Auth";
import { useAuth } from "../../components/context/authContext";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
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

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const { userLoggedIn } = useAuth();
  const { currentUser } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!isSigningIn) {
      try {
      setIsSigningIn(true);
      await toSignInWithEmailAndPassword(email, password);
      toast.success(`Login successful, Welcome back ${currentUser?.email}!`);
    } catch (error) {
      toast.error(`There was an error logging in! Error: ${error.message}`);
    } finally {
      setIsSigningIn(false);
      setLoading(false);
     }
    }
  };


  return (
    <>
    {userLoggedIn && <Navigate to={'/dashboard'} replace={true} />}
      <div className="bg-[#161C2D] min-h-screen flex flex-col px-5 justify-center lg:items-center py-16" data-aos="flip-right">
        <div className="login bg-white lg:w-[30%] min-h-fit rounded-md p-10">
          <div className=" font-medium text-3xl text-center pb-8">
            User Login
          </div>

          <div>
            <form onSubmit={handleLogin} className=" flex flex-col gap-3">
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button className="bg-[#04803A] rounded-lg text-white font-semibold text-lg py-3 text-center flex items-center justify-center">
              {loading ? <Spinner size={20} color="#fff" /> : 'Login'}
              </button>

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
