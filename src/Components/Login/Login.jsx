import React, { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { toast } from "react-toastify";
import { sendPasswordResetEmail } from "firebase/auth";

const Login = () => {
  const { logIn, signInWithGoogle, auth, setUser } = useContext(AuthContext);
  const emailRef = useRef();

  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [showPassword, setShowPass] = useState(false);

  // 🔥 Email/Password Login
  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      // 1️⃣ Firebase login
      const result = await logIn(email, password);
      const firebaseUser = result.user;

      // 2️⃣ Fetch role from backend
      const res = await fetch(`http://localhost:3000/users/${firebaseUser.email}`);
      const dbUser = await res.json();

      // 3️⃣ Save full user in context
      setUser({
        ...firebaseUser,
        role: dbUser.role,
        status: dbUser.status,
      });

      toast.success("Login Successful");
      form.reset();

      // 4️⃣ Navigate to previous page or home
      navigate(location.state?.from?.pathname || "/");
    } catch (err) {
      console.log(err);
      setError("Email or password incorrect");
    }
  };

  // 🔥 Google Login
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithGoogle();
      const firebaseUser = result.user;

      // 1️⃣ Save user in backend if not exists
      await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: firebaseUser.email,
          role: "buyer", // default role
        }),
      });

      // 2️⃣ Fetch full user with role
      const res = await fetch(`http://localhost:3000/users/${firebaseUser.email}`);
      const dbUser = await res.json();

      setUser({
        ...firebaseUser,
        role: dbUser.role,
        status: dbUser.status,
      });

      toast.success("Login Successful");
      navigate(location.state?.from?.pathname || "/");
    } catch (err) {
      console.log(err);
      setError("Google login failed");
    }
  };

  // 🔥 Password reset
  const handleForgetPassword = () => {
    const email = emailRef.current.value;

    if (!email) {
      toast.error("Please enter your email first");
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => toast.success("Check your email for reset password"))
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-4">
        <h2 className="font-bold text-2xl text-center text-[#7988d2] mt-4">
          Welcome To Fabrio
        </h2>

        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            {/* Email */}
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Email"
              name="email"
              ref={emailRef}
              autoComplete="new-email"
              required
            />

            {/* Password */}
            <div className="relative">
              <label className="label text-left block">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                className="input w-full"
                placeholder="Password"
                name="password"
                autoComplete="new-password"
                required
              />
              <span
                className="absolute right-5 top-[31px] cursor-pointer text-xl text-gray-500 z-50"
                onClick={() => setShowPass(!showPassword)}
              >
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </span>
            </div>

            {/* Forget Password */}
            <div className="text-center">
              <button
                onClick={handleForgetPassword}
                type="button"
                className="underline cursor-pointer hover:text-blue-600"
              >
                Forget Password
              </button>
            </div>

            {error && <p className="text-red-600">{error}</p>}

            <button type="submit" className="btn bg-[#7988d2] text-white mt-4">
              Login
            </button>
          </fieldset>
        </form>

        {/* Google Sign-in */}
        <button
          onClick={handleGoogleSignIn}
          className="btn bg-white mx-5 text-black border-[#e5e5e5]"
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
              <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
              <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
              <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
            </g>
          </svg>
          Login with Google
        </button>

        <p className="font-xs text-center pt-5">
          Don't have an account?{" "}
          <Link to="/auth/register" className="text-blue-500 underline text-media">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
