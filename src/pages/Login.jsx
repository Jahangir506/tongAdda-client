import { useState } from "react";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const location = useLocation();
  const { user, signIn, googleSignIn } = useAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        fetch("https://brand-shop-server-repo.vercel.app/user", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
        console.log(user);
        Swal.fire({
          title: "Login Successfully",
          icon: "success",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        console.error(err.message);
        toast.error("Email is already Use!");
      });
  };

  // console.log(user);

  const handleSubmit = (e) => {
    e.preventDefault();
    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;
    
    if (password.length < 6) {
      Swal.fire("Opps!", "you have to enter at least 6 digit!", "error");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      Swal.fire(
        "Opps!",
        "Password should contain at least one uppercase character.!",
        "error"
      );
      return;
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      Swal.fire(
        "Opps!",
        "Password should contain at least one special character.!",
        "error"
      );
      return;
    }

    const toastId = toast.loading("Logging in");

    signIn(email, password)
      .then((result) => {
        const loginUser = result.user;
        fetch('https://tong-adda-server.vercel.app//jwt', {
          method: 'POST',
          headers: {
            'content-type': "application/json",
          },
          body: JSON.stringify({email: email})
        })
        .then(res=> res.json())
        .then(data => console.log(data))
        toast.success("Login Successfully", { id: toastId });
        // navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.message, { id: toastId });
      });
  };

  return (
    <>
      <div className="hero mt-28 bg-base-200">
        <div className="hero-content w-full flex-col">
          <h1 className="text-5xl font-bold mb-4">Login now!</h1>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl dark:bg-zinc-700  bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative w-full">
                  <input
                    type={showPass ? "text" : "password"}
                    placeholder="password"
                    className="input input-bordered w-full"
                    required
                    name="password"
                  />
                  <span
                    onClick={() => setShowPass(!showPass)}
                    className="absolute bottom-1/3 right-4 text-lg"
                  >
                    {showPass ? <FaEyeSlash /> : <FaEye></FaEye>}
                  </span>
                </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn bg-darkBrown hover:bg-darkBrownHover border-none text-white"
                >
                  Login
                </button>
              </div>
              <div>
                <p className="mr-1 text-xl text-center mb-3">OR</p>
                <div className="flex justify-center items-center">
                  <div className="flex mr-4 items-center">
                    <Link className="mr-3 ml-4">
                      <FaGithub className="text-2xl" />
                    </Link>
                    <Link>
                      <FcGoogle
                        onClick={handleGoogleSignIn}
                        className="text-2xl"
                      />
                    </Link>
                  </div>
                </div>
                <div className="text-center my-1">
                  <Link to="/register">
                    Please create have an account ?{" "}
                    <span className="text-blue-700 hover:underline font-medium">
                      Register
                    </span>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
