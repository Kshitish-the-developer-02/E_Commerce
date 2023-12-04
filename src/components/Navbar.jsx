import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTotalQTY, setOpenCart } from "../app/CartSlice.js";
import { useNavigate } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";
import { FcAbout } from "react-icons/fc";
import { BiCategory } from "react-icons/bi";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { VscDashboard } from "react-icons/vsc";

import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navState, setNavState] = useState(false);
  const dispatch = useDispatch();
  const totalQTY = useSelector(selectTotalQTY);

  const onCartToggle = () => {
    dispatch(
      setOpenCart({
        cartState: true,
      })
    );
  };

  const onNavScroll = () => {
    if (window.scrollY > 30) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);

    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);

  const navigate = useNavigate();
  const clickEvent = () => {
    navigate("/login");
  };
  const [nav, setNav] = useState(false);
  return (
    <>
      <header
        className={
          !navState
            ? "absolute top-7 left-0 right-0 opacity-100 z-50"
            : "fixed top-0 left-0 right-0 h-[12vh] flex items-center justify-center opacity-100 z-[200] blur-effect-theme"
        }
      >
        <nav className="flex items-center justify-between nike-container ">
          <div className="flex gap-5">
            <div
              className=" text-white font-bold flex items-center "
              onClick={() => setNav(!nav)}
            >
              <CiMenuFries size={30} />
            </div>

            <div className="flex items-center">
              <img
                src={logo}
                alt="logo/img"
                className={`w-16 h-auto ${navState && "filter brightness-0"}`}
              />
            </div>
          </div>
          {/* <div className=" flex  lg: w-[700px] lg: full max-w-md sm:gap-3 lg:gap-7 sm:ml-3 lg:ml-7 justify-between">
           <div >
               <Link to='/home'>Home</Link>
           </div>
            <div>
                <Link Link to='/about'>About</Link>
            </div>
            <div>
                <Link to='/more'>more</Link>
            </div>
           </div> */}
          {/* <select className="  gap-2  ml-2text-[20px]  text-white border-none bg-blue-700 rounded-lg hover:bg-orange-400">
           
            <option>
                Cloth
            </option>
            <option>
                electronics
            </option>
            <option >
                 Mobile
            </option>
            <option >
                 Homes
            </option>  
            <option >
                 Toys & baby
            </option>

          </select> */}
          <ul className="flex items-center justify-center gap-2  md:ml-2">
            <li className="grid items-center">
              <MagnifyingGlassIcon
                className={`icon-style ${
                  navState && "text-slate-900 transition-all duration-300"
                }`}
              />
            </li>
            <li className="grid items-center">
              <HeartIcon
                className={`icon-style ${
                  navState && "text-slate-900 transition-all duration-300"
                }`}
              />
            </li>

            <li className="grid items-center">
              <button
                type="button"
                onClick={onCartToggle}
                className="border-none outline-none active:scale-110 transition-all duration-300 relative"
              >
                <ShoppingBagIcon
                  className={`icon-style ${
                    navState && "text-slate-900 transition-all duration-300"
                  }`}
                />
                <div
                  className={`absolute top-4 right-0 shadow w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 ${
                    navState
                      ? "bg-slate-900 text-slate-100 shadow-slate-900"
                      : "bg-slate-100 text-slate-900 shadow-slate-100"
                  }`}
                >
                  {totalQTY}
                </div>
              </button>
            </li>
            <li className=" button-theme bg-slate-200  shadow-slate-200 rounded-xl my-2 ml-8">
              <button
                onClick={clickEvent}
                className="  font-medium text-[20px] mr-5 w[100px]  hover:bg-pink-300 w-full rounded-lg hover:transition-all ease-in-out "
              >
                login
              </button>
            </li>
          </ul>
        </nav>
      </header>
      {/*mobile layout */}
      {nav ? (
        <div className=" bg-black opacity-30 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      <div
        className={
          nav
            ? " fixed top-0 left-0 w-[400px]  h-full  pt-5 bg-white z-50 duration-300]"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z- duration-300"
        }
      >
        <IoCloseSharp
          onClick={() => setNav(!nav)}
          size={30}
          className=" absolute right-4 top-4 cursor-pointer"
        />

        <ul className=" flex flex-col p-4 text-gray-800 mt-10">
          <Link to='/dashboard'>
          <li className=" text-xl py-4 flex gap-1 items-center hover:underline">
            <VscDashboard size={30} className=" ml-2" />
            Dashboard
          </li></Link>
          <Link to='/profile'>
          <li className=" text-xl py-4 flex gap-1 items-center hover:underline">
            <FaUser size={30} className=" ml-2" />
            Profile
          </li>
          </Link>
          <Link to="/categories">
            <li className=" text-xl py-4 flex gap-1 hover:underline">
              <BiCategory size={30} className=" ml-2" />
              Categories
            </li>
          </Link>

       <Link to='/shop'>
       <li className=" text-xl py-4 flex gap-1 hover:underline">
            <FaShoppingCart size={30} className=" ml-2" />
            Shop
          </li>
       </Link>
          <Link to='/about'>
          <li className=" text-xl py-4 flex gap-1 hover:underline">
            <FcAbout size={30} className=" ml-2 text-black" />
            About
          </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
