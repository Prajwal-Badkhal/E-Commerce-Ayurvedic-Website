import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

import { Cart } from "./";
import { useStateContext } from "../context/StateContext";
import { MdAccountCircle } from "react-icons/md";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const { login } = MdAccountCircle();

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">
          <img src="assets/pngegg.png" width={100} height={100} />
        </Link>
      </p>
      {/* buttons */}
      {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
          Dropdown
        </a>
        </li>
        </ul>
        </div> */}
      {/* button */}

      {/* <div class="topnav" id="myTopnav">
  <a href="#home" class="active">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
</div> */}

      {/* <li>
        <button onClick={() =>loginWithRedirect()}>Log In</button>
      </li> */}

      {/* <div className="cursor-pointer cart absolute right-0 top-4 mx-5 flex">
        <Link href={'/login'}><MdAccountCircle className='text-x1 md:text-2x1 mx-2' /></Link>
        <AiOutlineShopping onClick={() => setShowCart(true)} className='text-x1 md:text-2x1'/>
        </div> */}

      
      <button
        type="button"
        className="cart-icon"
        onClick={() => setShowCart(true)}
      >
        <button>
          <Link href={"/login"}>
            <MdAccountCircle className="text-x1 md:text-2x1 mx-2" />
          </Link>
        </button>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
