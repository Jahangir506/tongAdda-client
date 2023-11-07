import { useState } from "react";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";

const Register = () => {
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState()
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { createUser, user, googleSignIn } = useAuth();
  const location = useLocation()
  const navigate = useNavigate();
  console.log(user);

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
          title: "User Create Successfully",
          icon: "success",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        console.error(err.message);
        toast.error("Email is already Use!");
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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

    try {
      await createUser(email, password).then((result) => {
        const registerUser = result.user;
        console.log(registerUser);
        const user = { name, email, password, photoURL };
        console.log(user);
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
        Swal.fire({
          title: "User Create Successfully.!",
          icon: "success",
        });
        navigate(location?.state ? location.state : "/");
      });
    } catch (err) {
      console.log(err);
      toast.error("Email is already Use!");
    }
  };
  return (
    <>
      <div className="hero mt-28 bg-base-200">
        <div className="hero-content w-full flex-col">
          <h1 className="text-5xl font-bold mb-4">Register now!</h1>
          <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl  dark:bg-zinc-700 bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="photoURL"
                  placeholder="photo"
                  className="input input-bordered"
                  required
                  onChange={(e) => setPhotoURL(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  onChange={(e) => setEmail(e.target.value)}
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
                    onChange={(e) => setPassword(e.target.value)}
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
                <button type="submit" className="btn bg-darkBrown hover:bg-darkBrownHover border-none text-white">
                  Register
                </button>
              </div>
              <div>
                <p className="mr-1 text-xl text-center mb-3">OR</p>
                <div className="flex justify-center items-center">
                  <div className="flex mr-4 items-center">
                    <Link className="mr-3 ml-4">
                      <FaGithub
                        
                        className="text-2xl"
                      />
                    </Link>
                    <Link>
                      <FcGoogle onClick={handleGoogleSignIn} className="text-2xl" />
                    </Link>
                  </div>
                </div>
                <div className="text-center">
                  <Link to="/login">
                    Already have an account ?{" "}
                    <span className="text-blue-700 hover:underline font-medium">
                      Login
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
export default Register;
