import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
//import "../../index.css";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import {useSelector} from "react-redux";

const Header = () => {
  const [btnReact, setBtnReact] = useState("Login");

  const onlineStatus = useOnlineStatus();



  const {loggedInUser}=useContext(UserContext)
  //when ever state variable updates react rerenders /
  useEffect(() => {
    // console.log("useEffect Called");
  }, [btnReact]);
 
  // we are subscribing to store using a hook
  const cartItems= useSelector((store)=>store.cart.items)
  // const btnReact="Login"
  return (
    <div className="flex justify-between bg-amber-300 lg:bg-orange-200 shadow-lg ">
      <div className="logo">
        <img alt="data" className="w-32 rounded-xl" src={LOGO_URL} />
      </div>
      <div className="navItems">
        <ul className="flex items-center p-4 m-4">
          <li className="px-4">Online Status :{onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            {" "}
            <Link to="/"> Home</Link>
          </li>
          <li className="px-4">
            {/* <Link to="/about">AboutUs</Link> */}
            <a href='/about'>AboutUs</a> 
          </li>
          <li className="px-4">
            {/* <a href="/contact" >Contact us</a> */}
            <Link to="/contact"> Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery"> Grocery</Link>
          </li>
          
          <li className="px-4 text-xl font-bold"><Link to="/cart">Cart- {cartItems.length} items</Link></li>
          <button
            className="login"
            onClick={() => {
              btnReact === "Login"
                ? setBtnReact("LogOut")
                : setBtnReact("Login");
            }}
          >
            {btnReact}
          </button>
          <li className="px-4">{loggedInUser}</li>
        </ul>
        {/* {console.log("inside header")} */}
      </div>
    </div>
  );
};

export default Header;



