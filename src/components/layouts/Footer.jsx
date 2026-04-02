import React from "react";
import Container from "../Container";
import Images from "../Images";
import footerlogo from "/src//assets/footerlogo.png";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#181818] pt-37.5 pb-20">
        <Container>
          <div className="flex justify-between">
            <div className="">
              <Images imgSrc={footerlogo} />
              <p className="font-pop font-normal text-base text-[#838383] leading-[180%] py-12.5 w-[355px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna
              </p>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
