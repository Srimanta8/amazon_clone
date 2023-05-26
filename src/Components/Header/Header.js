import React, { useEffect, useRef, useState } from "react";
import logo from "/home/dhruba/amazon/amazon-clone/src/images/amazon_logo.png";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { allItems } from "../../Constants/Category";
import SideBar from "./SideBar";
//import CloseIcon from '@mui/icons-material/Close';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


function Header() {
  const [showaAll, setShowAll] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  const ref = useRef();
  
  
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (e.target.contains(ref.current)) {
        setSideBar(false);
      }
    });
  }, [ref, sideBar]);

  return (
    <main className="max-w-screen-2xl mx-auto">
      <header>
        {/*top nav*/}
        <div className="flex items-center bg-darkblue p-1 pl-6 flex-grow py-2">

          <Link to="/">
          <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
            <img
              src={logo}
              alt="logo"
              width={100}
              height={20}
              objectFit="contain"
              className="cursor-pointer"
            />
          </div>
          </Link>
          {/*location*/}
          <div className="px-4 h-[80%] hidden sm:flex items-center border border-transparent cursor-pointer duration-100">
            <LocationOnOutlinedIcon style={{ color: "white" }} />
            <p className=" link text-xs  text-lime-50 font-light flex flex-col">
              Hello{""}
              <span className="text-sm font-bold -mt-1 text-white">
                Select Your Address
              </span>
            </p>
          </div>

          {/*search*/}
          <div className="hidden sm:flex items-center h-10 rounded-md flex-grow ml-4 relative">
            <span
              onClick={() => setShowAll(!showaAll)}
              className="bg-lightgray hover:bg-gray pl-2 w-12 h-full flex items-center justify-center duration-300 cursor-pointer rounded-l-md"
            >
              All
              <span></span>
              <ArrowDropDownIcon />
            </span>
            {showaAll && (
              <div>
                <ul
                  className=" absolute w-51 h-80 top-10 left-0  overflow-y-scroll overflow-x-hidden bg-white border-[1px]
               border-darkblue text-black  flex-col gap-1 z-50 "
                >
                  {allItems.map((item) => (
                    <li
                      className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent
                       cursor-pointer duration-200 flex items-center justify-between 
                    hover:bg-sky px-2 py-1"
                      key={item._id}
                    >
                      {item.title}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <input
              className="p-2 h-full text-base flex-grow flex-shrink focus:outline-none border-none text-darkblue px-4"
              type="text"
            />
            <span className="w-12 h-full flex items-center justify-center bg-yellow hover:bg-darkyellow duration-300 cursor-pointer rounded-r-md">
              <SearchIcon className="h-12 w-6 m-3" />
            </span>
          </div>

          {/* right section*/}
          <div className="text-white flex items-center text-x5 z-50 space-x-6 mx-6 whitespace-nowrap">
            <Link to="/signin">
              <div className="link">
                <p className="text-sm mdl:text-xs text-white mdl:text-lime-50  font-light">
                  Hello, Sign In
                </p>
                <p className="font-extrabold  hidden sm:flex   md:text-sm">
                  Account & Lists{""}
                  <span>
                    <ArrowDropDownIcon />
                  </span>
                </p>
              </div>
            </Link>
            <div className="link ">
              <p className="text-xs  hidden sm:flex  text-lime-50 font-light">
                Returns
              </p>
              <p className="font-extrabold  hidden sm:flex  md:text-sm">
                & Orders
              </p>
            </div>
            <Link to="checkout">
            <div className="link relative flex items-center">
              <ShoppingCartOutlinedIcon className="h-12 w-15 mx-2" />
              <p className="font-extrabold md:text-sm hidden md:inline mt-2 ">
                Cart
              <span className="absolute top-0 right-0 md:-top-1 md:right-12 h-5 w-4 bg-yellow text-center  rounded-full text-black">
                0
              </span>
              </p>
            </div>
            </Link>
          </div>
        </div>
        {/*buttom nav*/}
        <div className="bg-lightblue space-x-3 p-2 pl-6 flex items-center text-white text-sm">
          <p
            onClick={() => setSideBar(true)}
            className="link items-center flex"
          >
            <MenuIcon className="h-10 mr-1" />
            All
          </p>
          <p className="link">Amazon MiniTV</p>
          <p className="link">Sell</p>
          <p className="link hidden md:inline-flex">Best Seller</p>
          <p className="link hidden md:inline-flex">Today's Deals</p>
          <p className="link hidden md:inline-flex ">Mobiles</p>
          <p className="link hidden lg:inline-flex ">Customer Service</p>
          <p className="link hidden lg:inline-flex">Electronics</p>
          <p className="link hidden lg:inline-flex">New Releases</p>
          <p className="link hidden lg:inline-flex ">Prime</p>
        </div>
        {/*sidebar*/}
        {sideBar && (
          <div className="w-full h-screen text-black fixed top-0 left-0 bg-darkblue bg-opacity-50">
            <div className="w-full h-full relative">
              <motion.div
                ref={ref}
                initial={{ x: -500, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className=" w-[80%] md:w-[350px] h-full bg-white border border-black overflow-y-scroll z-1 overflow-x-hidden"
              >
                <div
                  onClick={() => setSideBar(false)}
                  className="w-full bg-darkblue  text-white py-2 px-6 flex  items-center gap-4"
                >
                  <AccountCircleIcon />
                  <h3>Hello, Sign In</h3>
                </div>
                <SideBar
                  title="Trending"
                  one="Best Sellers"
                  two="New Realeses"
                  three="SideBarLinks"
                />
                <SideBar
                  title="Digital Content And Devices"
                  one=" Amazon miniTV- FREE entertainment"
                  two=" Echo & Alexa"
                  three="Fire TV"
                  four=" Kindle E-Readers & eBooks"
                  five="   Audible Audiobooks"
                  six="Amazon Prime Video"
                  saven="Amazon Prime Music"
                />
                <SideBar
                  title="Shop By Category"
                  one="Mobiles, Computers"
                  two=" TV, Appliances, Electronics"
                  three=" Mens Fashion"
                  four=" Mens Fashion"
                  five="Womens Fashion"
                />
                <SideBar
                  title="Programs & Features"
                  one="Gift Cards & Mobile Recharges"
                  two="Flight Tickets"
                  three="Clearance store"
                />
                <SideBar
                  title="Help & Settings"
                  one=" Your Account"
                  two="  Your Account"
                  three=" Sign in"
                />
                {/*  <span onClick={()=>setSideBar(false)} className='cursor-pointer absolute top-0 left-[360px] w-10 h-10 text-black
                 flex items-center justify-center 
                border bg-gray hover:bg-transparent hover:text-white duration-300'> <CloseIcon/></span>*/}
              </motion.div>
            </div>
          </div>
        )}
      </header>
    </main>
  );
}

export default Header;
