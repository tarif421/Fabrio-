import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { toast } from "react-toastify";
import { MdArrowDropDown } from "react-icons/md";

const Register = () => {
  const { createUser, setUser } = use(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [showPassword, setShowPass] = useState(false);
 const [role, setRole] = useState("buyer");


  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const role = form.role.value;
    console.log(role)

    // console.log(name, photo, email, password);

    if (password.length < 6) {
      setError(
        "password must be at least 6 characters , one uppercase and one lowercase",
      );
      toast.error("Registration Failed");

      return;
    }

    if (!/[A-Z]/.test(password)) {
      setError(
        "password must be at least 6 characters , one uppercase and one lowercase",
      );
      toast.error("Registration Failed");

      return;
    }

    if (!/[a-z]/.test(password)) {
      setError(
        "password must be at least 6 characters , one uppercase and one lowercase",
      );
      toast.error("Registration Failed");

      return;
    } else {
      toast.success("Registration Successful");
    }

    createUser(email, password, name, photo)
      .then((result) => {
        const user = result.user;

        setUser(user);
        navigate("/");
      })
      .catch(() => {
        setError();
      });
  };
  return (
    <>
      <div className=" flex justify-center min-h-screen  items-center ">
        <div className=" bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
          <h2 className="font-semibold text-2xl text-center">
            Register your account
          </h2>
          <form onSubmit={handleSubmit} className="card-body">
            <fieldset className="fieldset">
              {/* name */}
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Name"
                required
              />
              {/* photo url */}
              <label className="label">Photo url</label>
              <input
                type="text"
                name="photo"
                className="input"
                placeholder="photo url"
                required
              />
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
                autoComplete="new-email"
                required
              />

              {/* role */}
              <label className="label">Role</label>

              <div className="dropdown dropdown-bottom w-full">
                <div
                  tabIndex={0}
                  className="input flex items-center justify-between cursor-pointer"
                >
                  <span className="capitalize text-gray-500">
                    {role || "Select role"}
                  </span>
                  <MdArrowDropDown className="text-2xl text-gray-500" />
                </div>

                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-full mt-1"
                >
                  <li onClick={() => setRole("buyer")}>
                    <a>Buyer</a>
                  </li>
                  <li onClick={() => setRole("manager")}>
                    <a>Manager</a>
                  </li>
                </ul>
              </div>
              <input type="hidden" name="role" value={role} />


              {/* password */}
              <div className="w-full">
                <label className="label block text-left">Password</label>

                <div className="relative w-full">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="input w-full pr-12"
                    placeholder="Password"
                    name="password"
                    autoComplete="new-password"
                    required
                  />

                  <span
                    className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-xl text-gray-500"
                    onClick={() => setShowPass(!showPassword)}
                  >
                    {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                  </span>
                </div>
              </div>

              {error && <p className="text-red-600">{error}</p>}
              <div className="text-center">
                <a className="link link-hover r">Forgot password?</a>
              </div>

              <button
                type="submit"
                className="btn bg-[#c1943f] text-white mt-4"
              >
                Register
              </button>
              <p className="font-semibold text-center pt-5">
                Already have an account?{" "}
                <Link
                  to="/auth/login"
                  className="text-blue-500 underline text-media "
                >
                  Login
                </Link>{" "}
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
