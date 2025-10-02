import React from "react";
import { MdLocalShipping } from "react-icons/md";
import { CiSearch, CiLogin, CiLogout, CiUser } from "react-icons/ci";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

import Logo from "../logo.svg";
const Nav = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  return (
    <>
      <div className="header w-full">
        <div className="top_header flex py-2 px-6  max-w-full bg-dark text-inverse">
          <div className="icon text-primary text-3xl">
            <MdLocalShipping />
          </div>
          <div className="info ml-4">
            <p>Free Shipping When Shopping upto $1000</p>
          </div>
        </div>
        <div className="mid_header bg-neutral flex px-10 py-4 max-w-full justify-between ">
          <div className="logo">
            <img src={Logo} alt="Logo" className="w-[75px]"></img>
          </div>
          <div className="search_box flex flex-row h-12">
            <input
              type="text"
              value=""
              placeholder="search"
              className="focus:outline-none px-4 py-2 h-12 border-[1px]  border-neutral focus:border-secondary rounded-md"
            ></input>
            <button className="ml-2 cursor-pointer  bg-primary hover:bg-secondary transition-colors duration-150 px-4 py-3 h-12 rounded-md border-[1px] border-neutral text-inverse">
              <CiSearch />
            </button>
          </div>
          {isAuthenticated ? (
            <div className="user flex flex-row">
              <div className="icon mr-4 text-4xl text-secondary hover:text-primary">
                <CiLogout />
              </div>
              <div className="btn">
                <button
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                  className="bg-secondary text-white px-4 py-2 rounded-md"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="user flex flex-row">
              <div className="icon mr-4 text-4xl text-secondary hover:text-primary">
                <CiLogin />
              </div>
              <div className="btn">
                <button
                  onClick={() => loginWithRedirect()}
                  className="bg-secondary text-white px-4 py-2 rounded-md"
                >
                  Login
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="last_header flex items-center px-8 py-4 w-full justify-between bg-dark shadow-md">
          <div className="user_profile flex items-center gap-3">
            {isAuthenticated ? (
              <>
                <div className="icon flex items-center justify-center w-12 h-12 border border-neutral rounded-full text-primary bg-neutral/20">
                  <CiUser className="text-2xl" />
                </div>
                <div className="info">
                  <h2 className="font-semibold text-inverse leading-tight">
                    {user.name}
                  </h2>
                  <p className="text-muted text-sm">{user.email}</p>
                </div>
              </>
            ) : (
              <>
                <div className="icon flex items-center justify-center w-12 h-12 border border-neutral rounded-full text-primary bg-neutral/20">
                  <CiUser className="text-2xl" />
                </div>
                <div className="info">
                  <p className="font-semibold text-inverse">Please Login</p>
                </div>
              </>
            )}
          </div>

          <nav className="nav">
            <ul className="flex gap-8 text-lg font-medium items-center">
              <li>
                <Link
                  to="/"
                  className="text-inverse hover:text-primary transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="text-inverse hover:text-primary transition-colors duration-300"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/collection"
                  className="text-inverse hover:text-primary transition-colors duration-300"
                >
                  Collection
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-inverse hover:text-primary transition-colors duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="text-inverse hover:text-primary transition-colors duration-300"
                >
                  Cart
                </Link>
              </li>
            </ul>
          </nav>

          <div className="offer">
            <p className="text-success font-semibold bg-neutral/30 px-4 py-2 rounded-lg shadow-sm">
              🎉 Flat 10% off all iPhones
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
