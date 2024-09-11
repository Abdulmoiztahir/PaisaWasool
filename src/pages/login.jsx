import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../utils/utils";

function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  function onSubmit(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        navigate("/");
        console.log("login ho gya");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }
  function handleSigninWithGoogle() {
    const provider = new GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  }
  return (
    <>
      <div
        className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 animate-fade-in"
      >
        <h1
          className="text-4xl font-bold text-center mb-6 text-blue-600 animate-bounce"
        >
          Log In
        </h1>
        <div
          className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md animate-slide-up"
        >
          <form onSubmit={onSubmit} className="flex flex-col space-y-4">
            <input
              value={email}
              type="email"
              placeholder="Email"
              required
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              value={password}
              type="password"
              placeholder="Password"
              required
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
            >
              Log In
            </button>
          </form>
          <div className="flex items-center justify-center my-4">
            <span className="text-gray-600">or</span>
          </div>
          <button
            onClick={handleSigninWithGoogle}
            className="bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 transition duration-300 ease-in-out w-full "
          >
            Sign In With Google
          </button>
        </div>
      </div>
    </>
  );
}

export default LoginForm;