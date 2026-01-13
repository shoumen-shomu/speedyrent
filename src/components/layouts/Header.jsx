import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import logo from "/src/assets/logo.png";
import { Link } from "react-router-dom";
import Button from "../Button";

const Header = () => {
  return (
    <div>
      <div className="fixed w-full top-0 left-0 py-12.5 z-10">
        <Container>
          <Flex className={"justify-between"}>
            <div className="logo w-[20%]">
              <Images imgSrc={logo} />
            </div>
            <div className="w-[65%]">
              <ul className="flex items-center gap-x-20">
                <Link to={"/about"}>
                  <li className="font-pop font-semibold text-[24px] text-[#181818] leading-[150%] hover:text-[#EA002D] duration-300">
                    About
                  </li>
                </Link>
                <Link to={"/service"}>
                  <li className="font-pop font-semibold text-[24px] text-[#181818] leading-[150%] hover:text-[#EA002D] duration-300">
                    Service
                  </li>
                </Link>
                <Link to={"/fleet"}>
                  <li className="font-pop font-semibold text-[24px] text-[#181818] leading-[150%] hover:text-[#EA002D] duration-300">
                    Fleet
                  </li>
                </Link>
                <Link to={"/blog"}>
                  <li className="font-pop font-semibold text-[24px] text-[#181818] leading-[150%] hover:text-[#EA002D] duration-300">
                    Blog
                  </li>
                </Link>
                <Link to={"/contact"}>
                  <li className="font-pop font-semibold text-[24px] text-[#181818] leading-[150%] hover:text-[#EA002D] duration-300">
                    Contact
                  </li>
                </Link>
              </ul>
            </div>
            <div className="w-[12%] justify-end">
              <Link>
                <Button
                  className={
                    "bg-white font-pop font-semibold text-base text-[#EA002D] hover:bg-[#EA002D] hover:text-white duration-300 inline-block"
                  }
                  btnText={"Call Us"}
                />
              </Link>
            </div>
          </Flex>
        </Container>
      </div>
    </div>
  );
};

export default Header;
