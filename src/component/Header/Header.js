import React, { useContext } from 'react';
import { FaSignOutAlt, FaUserCircle } from 'react-icons/fa';
import { GiPalmTree } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/auth-context';
import wild from '../../Main/asset/wild.png'

const Header = () => {
  const {user, logOut } =useContext(AuthContext)

    return (
      <div className="navbar bg-slate-400 mb-5 py-4">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link
                  className="text-white mr-3 border-white md:border-2 hover:bg-white hover:text-slate-600 transition ease-in-out duration-700 "
                  to="/"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  className="text-white mr-3 border-white md:border-2 hover:bg-white hover:text-slate-600 transition ease-in-out duration-700"
                  to="/blogs"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <img className="w-10" src={wild} alt="" />
          <a className="btn btn-ghost normal-case text-3xl font-bold">
            {" "}
            <span className="text-green-600">Go</span> Wild{" "}
            <span className="text-green-600">
              <GiPalmTree />
            </span>{" "}
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link
                className="text-white mr-3 border-white md:border-2 hover:bg-white hover:text-slate-600 transition ease-in-out duration-700"
                to="/"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                className="text-white mr-3 border-white md:border-2 hover:bg-white hover:text-slate-600 transition ease-in-out duration-700"
                to="/blogs"
              >
                Blogs
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user?.uid ? (
            <>
              <div
                data-tip={user?.displayName}
                className="w-16 tooltip tooltip-left mr-3 rounded-full"
              >
               
                <div className="dropdown dropdown-bottom dropdown-end mr-5">
                  <label tabIndex={0} className="btn border-white bg-slate-400 hover:bg-white text-slate-900">
                    <FaUserCircle></FaUserCircle>
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <Link>My Reviews</Link>
                    </li>
                    <li>
                      <Link>My Services</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <button onClick={logOut} className="btn btn-outline">
                <FaSignOutAlt></FaSignOutAlt>
                <span className="w-9 md:w-20 ">Sign out</span>{" "}
              </button>
            </>
          ) : (
            <>
              <div className="text-white mx-5">
                <span>{user?.email}</span>
              </div>
              <Link to="/login" className="btn btn-">
                Get started
              </Link>
            </>
          )}
        </div>
      </div>
    );
};

export default Header;