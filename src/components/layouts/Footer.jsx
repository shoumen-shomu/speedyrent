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
          <div className="flex justify-between mb-33.5">
            <div className="">
              <Images imgSrc={footerlogo} />
              <p className="font-pop font-normal text-base text-[#838383] leading-[180%] py-12.5 w-88.75">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna
              </p>
            </div>
            <div className="">
              <h4 className="font-pop font-semibold text-[32px] text-[#EEEEEE] leading-[150%] pb-11.25">
                Company
              </h4>
              <ul className="space-y-6">
                <li className="font-pop font-semibold text-[24px] text-[#838383] leading-[150%]">
                  About Us
                </li>
                <li className="font-pop font-semibold text-[24px] text-[#838383] leading-[150%]">
                  Features
                </li>
                <li className="font-pop font-semibold text-[24px] text-[#838383] leading-[150%]">
                  Fleets
                </li>
                <li className="font-pop font-semibold text-[24px] text-[#838383] leading-[150%]">
                  Service
                </li>
              </ul>
            </div>
            <div className="">
              <h4 className="font-pop font-semibold text-[32px] text-[#EEEEEE] leading-[150%] pb-11.25">
                Service
              </h4>
              <ul className="space-y-6">
                <li className="font-pop font-semibold text-[24px] text-[#838383] leading-[150%]">
                  Car Rental
                </li>
                <li className="font-pop font-semibold text-[24px] text-[#838383] leading-[150%]">
                  Airport Transfer
                </li>
                <li className="font-pop font-semibold text-[24px] text-[#838383] leading-[150%]">
                  Car Maintenance
                </li>
                <li className="font-pop font-semibold text-[24px] text-[#838383] leading-[150%]">
                  Roadside Assistance
                </li>
              </ul>
            </div>
            <div className="">
              <h4 className="font-pop font-semibold text-[32px] text-[#EEEEEE] leading-[150%] pb-11.25">
                Resource
              </h4>
              <ul className="space-y-6">
                <li className="font-pop font-semibold text-[24px] text-[#838383] leading-[150%]">
                  Blog
                </li>
                <li className="font-pop font-semibold text-[24px] text-[#838383] leading-[150%]">
                  Reference
                </li>
                <li className="font-pop font-semibold text-[24px] text-[#838383] leading-[150%]">
                  FAQ
                </li>
                <li className="font-pop font-semibold text-[24px] text-[#838383] leading-[150%]">
                  Support
                </li>
              </ul>
            </div>
          </div>
         <div className="bg-[#838383] w-myContainer p-[.5px] mb-[30px]"></div>
         <div className="flex justify-between ">
         <div className="flex gap-10">
          <p className="font-pop font-semibold text-[24px] text-[#FDFDFD] leading-[150%]">Privacy Policy</p>
          <p className="font-pop font-semibold text-[24px] text-[#FDFDFD] leading-[150%]">Terms of Service</p>
         </div>
         <div className="">
          <p className="font-pop font-semibold text-[24px] text-[#FDFDFD] leading-[150%]">© 2026 shoumenshomu - All Rights Reserved</p>
         </div>
         </div>
        </Container>
       
      </footer>
    </>
  );
};

export default Footer;
