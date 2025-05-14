import { useNavigate } from "react-router";
import google from "../assets/google.png";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase/config";

const GoogleLoginButton = () => {
  const navigate = useNavigate();
  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/dashboard");
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div>
      <button
        className="rounded-full p-2 w-full bg-white border border-gray-200 flex items-center justify-center gap-2 hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer"
        onClick={handleGoogleSignIn}
      >
        <img src={google} alt="" className="w-5 h-5 object-cover" />
        Sign in with Google
      </button>
    </div>
  );
};

export default GoogleLoginButton;
