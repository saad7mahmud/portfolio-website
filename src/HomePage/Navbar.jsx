import { Link, NavLink } from "react-router-dom";
import { FaHome, FaBriefcase, FaUser, FaEnvelope } from "react-icons/fa";


const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to="./"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#01949a]  font-bold underline "
              : ""
          }
        >
          <FaHome /> Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about-me"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#01949a] font-bold  underline "
              : ""
          }
        >
          <FaUser /> About Me
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#01949a]  font-bold underline "
              : ""
          }
        >
            <FaEnvelope/>  Contact
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar shadow mb-10 py-3 bg-base-200 px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/">
            <a className="uppercase font-bold text-xl">Saad Mahmud</a>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">
            <FaBriefcase />
            Hire Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
