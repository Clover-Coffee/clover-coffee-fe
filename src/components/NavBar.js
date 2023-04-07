import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from 'next/image';


const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div
      className="nav-color"
      // style={{
      //   backgroundColor: "white",
      //   borderBottom: ".5px solid rgb(172, 172, 172)",
      // }}
    >
      <nav className="nav-bar navbar-static-top">
        <form>
          <IoIosSearch className="searchIcon" size="20px" />
          <input
            className="searchBar"
            type="text"
            placeholder="Search Products"
          />
        </form>
        <Link href="/" style={{ textDecoration: "none" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <Image src="/clover-logo.png" alt="Clover Logo" className="logo" width={200} height={200} />
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="navbar-btns">
            <Link href="/" style={{ textDecoration: "none" }}>
              HOME
            </Link>
          </li>
          <li className="navbar-btns">
            <Link href="/about" style={{ textDecoration: "none" }}>
              ABOUT
            </Link>
          </li>
          <li className="navbar-btns">
            <Link href="/contact" style={{ textDecoration: "none" }}>
              CONTACT
            </Link>
          </li>
          <li className="navbar-btns">
            <Link href="/cart" style={{ textDecoration: "none" }}>
              CART
            </Link>
          </li>
        </ul>
        <div className="burger">
          {click ? (
            <FaTimes onClick={handleClick} size={22} />
          ) : (
            <FaBars onClick={handleClick} size={22} />
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
