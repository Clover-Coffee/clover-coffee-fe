import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        borderBottom: ".5px solid rgb(172, 172, 172)",
      }}
    >
      <nav className="nav-bar navbar-static-top">
        <Link href="/" style={{ textDecoration: "none" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <h1>logo</h1>
        </Link>
        <form>
          <IoIosSearch className="searchIcon" size="20px" />
          <input
            className="searchBar"
            type="text"
            placeholder="Search Products"
          />
        </form>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="navbar-btns">
            <Link href="/" style={{ textDecoration: "none" }}>
              <button>HOME</button> 
            </Link>
          </li>
          <li className="navbar-btns">
            <Link href="/about" style={{ textDecoration: "none" }}>
            <button>ABOUT</button> 
            </Link>
          </li>
          <li className="navbar-btns">
            <Link href="/contact" style={{ textDecoration: "none" }}>
            <button>CONTACT</button> 
            </Link>
          </li>
          <li className="navbar-btns">
            <Link href="/cart" style={{ textDecoration: "none" }}>
            <button>CART</button> 
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
