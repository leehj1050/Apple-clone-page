import React, { useState } from "react";
import { IoLogoApple } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { HeaderWrap, MobileHeader } from "styles/headerCss";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [MbToggle, setMbToggle] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <HeaderWrap>
        <nav>
          <div>
            <IoLogoApple
              className="logo"
              onClick={() => {
                navigate("/");
              }}
            />
          </div>
          <ul>
            <li
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </li>
            <li
              onClick={() => {
                navigate("/ipad");
              }}
            >
              iPad
            </li>
            <li
              onClick={() => {
                navigate("/iphone");
              }}
            >
              iPhone
            </li>
            <li>Acc</li>
            <li>Q&A</li>
          </ul>
          <div className="bar_Icon">
            <FaBars
              className="icon"
              onClick={() => {
                setMbToggle((MbToggle) => !MbToggle);
              }}
            />
          </div>
        </nav>
      </HeaderWrap>
      {MbToggle ? (
        <MobileHeader>
          <ul>
            <li
              onClick={() => {
                navigate("/");
                setMbToggle(false);
              }}
            >
              Home
            </li>
            <li
              onClick={() => {
                navigate("/ipad");
                setMbToggle(false);
              }}
            >
              iPad
            </li>
            <li
              onClick={() => {
                navigate("/iphone");
                setMbToggle(false);
              }}
            >
              iPhone
            </li>
            <li>Acc</li>
            <li>Q&A</li>
          </ul>
        </MobileHeader>
      ) : null}
    </>
  );
}
