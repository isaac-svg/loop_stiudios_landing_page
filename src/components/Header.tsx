import React, { useEffect, useRef, useState } from "react";
import Logo from "/images/logo.svg";
import openMenu from "/images/icon-hamburger.svg";
import closeMenu from "/images/icon-close.svg";
interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  width: number;
}
const Header = ({ isOpen, setIsOpen, width }: Props) => {
  const headRef = useRef<HTMLElement>(null);

  const [desktopScreen, setDesktopScreen] = useState<boolean>(false);
  useEffect(() => {
    width > 550 ? setDesktopScreen(true) : setDesktopScreen(false);
  }, [width]);
  return (
    <header className="close" ref={headRef}>
      <div className="nav__wrapper">
        <nav>
          <img src={Logo} alt="logo" className="logo" />
          <ul className={`links ${isOpen ? "show" : null}`}>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Events</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
          {!desktopScreen && (
            <img
              src={isOpen ? closeMenu : openMenu}
              alt="toggleMenuIcon"
              className="toggler"
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
        </nav>
        <span className="text__banner">IMMERSIVE EXPERIENCES THAT DELIVER</span>
      </div>
    </header>
  );
};

export default Header;
