import { useState } from "react";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const location = useLocation();
  const { user, signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState([]);
  const navigate = useNavigate();

  console.log(user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Logging in");

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

    await signIn(email, password)
      .then((result) => {
        const loginUser = result.user;
        console.log(loginUser);
        fetch("https://brand-shop-server-repo.vercel.app/user", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(loginUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
        toast.success("Login Successfully", { id: toastId });
        navigate(location?.state ? location.state : "/");
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
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl  bg-base-100">
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
                  onBlur={(e) => setEmail(e.target.value)}
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
                    onBlur={(e) => setPassword(e.target.value)}
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
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
              <div className="p-4 mx-auto">
                <Link to="/register">
                  Please create have an account ?{" "}
                  <span className="text-blue-700 hover:underline">
                    Register
                  </span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;