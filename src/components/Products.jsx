import React from "react";
import Images from "./Images";
import productImg from "/src/assets/productImg.png";
import Container from "./Container";
import { IoStar } from "react-icons/io5";

const Products = () => {
  return (
    <>
      {/* Products Part Start */}

      <div className="mt-25">
        <Container>
          <Images imgSrc={productImg} />
          <div className="mt-10">
            <div className="flex items-center">
              <p className="font-pop font-semibold text-[48px] text-[#181818] leading-[150%]">
                <span className="font-pop font-semibold text-[24px] text-[#EA002D] leading-[150%]">
                  $
                </span>
                50.23{" "}
                <span className="font-pop font-semibold text-[24px] text-[#454545] leading-[150%]">
                  /day
                </span>
              </p>
              <div className="flex">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 35 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.119 0L21.1603 12.4377H34.238L23.6579 20.1246L27.6992 32.5623L17.119 24.8754L6.53888 32.5623L10.5801 20.1246L1.90735e-06 12.4377H13.0778L17.119 0Z"
                    fill="#F7AD3F"
                  />
                </svg>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 35 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.119 0L21.1603 12.4377H34.238L23.6579 20.1246L27.6992 32.5623L17.119 24.8754L6.53888 32.5623L10.5801 20.1246L1.90735e-06 12.4377H13.0778L17.119 0Z"
                    fill="#F7AD3F"
                  />
                </svg>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 35 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.119 0L21.1603 12.4377H34.238L23.6579 20.1246L27.6992 32.5623L17.119 24.8754L6.53888 32.5623L10.5801 20.1246L1.90735e-06 12.4377H13.0778L17.119 0Z"
                    fill="#F7AD3F"
                  />
                </svg>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 35 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.119 0L21.1603 12.4377H34.238L23.6579 20.1246L27.6992 32.5623L17.119 24.8754L6.53888 32.5623L10.5801 20.1246L1.90735e-06 12.4377H13.0778L17.119 0Z"
                    fill="#F7AD3F"
                  />
                </svg>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 35 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.119 0L21.1603 12.4377H34.238L23.6579 20.1246L27.6992 32.5623L17.119 24.8754L6.53888 32.5623L10.5801 20.1246L1.90735e-06 12.4377H13.0778L17.119 0Z"
                    fill="#F7AD3F"
                  />
                </svg>
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/* Products Part End */}
    </>
  );
};

export default Products;
