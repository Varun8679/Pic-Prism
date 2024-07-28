import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex  flex-col sm:flex-row justify-between items-start sm:items-center px-5 py-5 fixed top-0 right-0 left-0 shadow-md gap-1 sm:gap-0 z-30 bg-white ">
      <div className="flex justify-between items-center">
        <img src="picprismlogo.png" alt="our logo" className="w-[50px] " />
        <Link to="/" className="font-bold text-3xl">
          PicPrism
        </Link>
      </div>
      <ul className="flex gap-5 text-lg font-semibold text-gray-400 ml-5 sm:ml-0">
        <Link to="/" className="hover:text-black cursor-pointer sm:p-2">
          About
        </Link>
        <Link to="/" className="hover:text-black cursor-pointer sm:p-2">
          Contact
        </Link>
        <Link to="/login" className="hover:text-black cursor-pointer sm:p-2">
          Log In
        </Link>
        <Link to="/signup" className="hover:text-black cursor-pointer sm:p-2">
          Sign Up
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;