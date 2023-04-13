import React, { useState, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);

  const handleClick = () => {
    setClick(!click);
  };

  const handleScroll = () => {
    setScrollPos(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClasses = ["nav-color"];
  if (scrollPos > 100) {
    navbarClasses.push("scrolled");
  }

  const rotateDeg = scrollPos / 3;
  const rotationStyle = {
    transform: `rotate(${rotateDeg}deg)`,
  };

  return (
    <div className={navbarClasses.join(" ")}>
      <nav className={`nav-bar header-bg`}>
        <form>
          <IoIosSearch className="searchIcon" size="20px" />
          <input
            className="searchBar"
            type="text"
            placeholder="Search Products"
          />
        </form>
        <div className="logo-container">
          <Link href="/" style={{ textDecoration: "none" }}>
            <Image
              src="/clover-logo.png"
              alt="Clover Logo"
              className="logo"
              width={200}
              height={200}
              style={rotationStyle}
            />
          </Link>
        </div>
        <div className="nav-bar-container">
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="navbar-btns">
              <Link href="/" style={{ textDecoration: "none" }}>
                <span className="navbar-btn-text">HOME</span>
              </Link>
            </li>
            <li className="navbar-btns">
              <Link href="/about" style={{ textDecoration: "none" }}>
                <span className="navbar-btn-text">ABOUT</span>
              </Link>
            </li>
            <li className="navbar-btns">
              <Link href="/contact" style={{ textDecoration: "none" }}>
                <span className="navbar-btn-text">CONTACT</span>
              </Link>
            </li>
            <li className="navbar-btns">
              <Link href="/cart" style={{ textDecoration: "none" }}>
                <span className="navbar-btn-text">CART</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="burger">
          {click ? (
            <FaTimes onClick={handleClick} size={22} aria-label="Open menu" />
          ) : (
            <FaBars onClick={handleClick} size={22} aria-label="Close menu" />
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
