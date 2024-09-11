import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/userAuthentication";
import { signOut } from "firebase/auth";
import { auth } from "../utils/utils";

function Header() {
  const { user } = useContext(UserContext);

  const handleSignOut = async () => {
    await signOut(auth);
  };

  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="ml-3 text-xl">PaisaWasool</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link to="/" className="mr-5 hover:text-gray-900">
              Homepage
            </Link>
            <Link to="products" className="mr-5 hover:text-gray-900">
              Products
            </Link>

            {user.isLogin ? (
              <>
              <div>
                <h1>{user.email}</h1>
              </div>
                <button className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 transition duration-300 ease-in-out" onClick={handleSignOut}>Sign out</button>
              </>
            ) : (
              <>
                <Link to="Login" className="mr-5 hover:text-gray-900">
                  Login
                </Link>
                <Link to="signup" className="mr-5 hover:text-gray-900">
                  Sign up
                </Link>
              </>
            )}
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;