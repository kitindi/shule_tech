import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router";
import Logo from "../components/Logo";
import { auth } from "../firebase/config";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerError, setRegisterError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setRegisterError("Please fill in all fields.");
      return;
    }
    if (password.length < 6) {
      setRegisterError("Password must be at least 6 characters long.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setRegisterError("Please enter a valid email address.");
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
      setRegisterError(""); // Clear error on successful registration
    } catch (error) {
      if (error.message.includes("auth/email-already-in-use")) {
        setRegisterError("Email is already in use. Please use a different email.");
      }
      if (error.message.includes("auth/invalid-credential")) {
        setRegisterError("Invalid credentials.Enter correct email or password.");
      }
      if (error.message.includes("auth/network-request-failed")) {
        setRegisterError("Network error, request failed");
      }
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="w-96 p-6 bg-white rounded shadow-md">
        <h1 className="text-2xl text-slate-700 font-bold mb-3.5 text-center flex items-center justify-center gap-2.5">
          <Logo />
        </h1>
        <div className="mb-4">
          <p className="text-md font-medium text-slate-600  text-center">Create your free account to grow your Tech skills</p>
        </div>
        <form onSubmit={handleSubmit}>
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
          <div>{registerError && <p className="text-red-500 text-xs mt-2">{registerError}</p>}</div>
          <button
            type="submit"
            className="bg-green-500 text-white w-full py-2 mt-3 rounded-full hover:bg-green-500 cursor-pointer transition duration-300 ease-in-out"
          >
            Create account
          </button>
        </form>
        <p className="text-center mt-4 text-sm text-gray-500">
          Already have an account?{" "}
          <Link to="/" className="font-semibold">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
