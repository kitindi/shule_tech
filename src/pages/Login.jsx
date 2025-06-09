import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { auth } from "../firebase/config";
import GoogleLoginButton from "../components/GoogleLoginButton";
import { signInWithEmailAndPassword } from "firebase/auth";
import Logo from "../components/Logo";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLogginError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setLogginError("Please fill in all fields.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setLogginError("Please enter a valid email address.");
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/profile");
      setLogginError(""); // Clear error on successful sign-in
      // Clear error on successful sign-in
    } catch (error) {
      console.log(error.message);
      if (error.message.includes("auth/invalid-credential")) {
        setLogginError("Invalid credentials.Enter correct email or password.");
      }
      if (error.message.includes("auth/network-request-failed")) {
        setLogginError("Network error, request failed");
      }
    }
  };
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="w-96 p-6 bg-white rounded shadow-md">
        <h1 className="text-2xl text-slate-700 font-bold mb-3.5 text-center flex items-center justify-center gap-2.5">
          <Logo />
        </h1>
        <div>
          <GoogleLoginButton />
        </div>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-2 flex flex-col">
            <label htmlFor="email" className="text-sm my-1.5">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border border-gray-200 rounded-md p-2 outline-none"
            />
          </div>
          <div className="mb-2 flex flex-col">
            <label htmlFor="password" className="text-sm my-0.5">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="border border-gray-200 rounded-md p-2 outline-none"
            />
          </div>
          <div>{loginError && <p className="text-red-500 text-xs mt-2">{loginError}</p>}</div>
          <button
            type="submit"
            className="bg-[#4fc9bf] text-white w-full py-2 mt-3 rounded-full hover:bg-[#76d5cd] cursor-pointer transition duration-300 ease-in-out"
          >
            Sign In
          </button>
        </form>
        <p className="text-center mt-4 text-sm text-gray-500">
          Don't have an account?{" "}
          <Link to="/register" className="font-semibold">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
