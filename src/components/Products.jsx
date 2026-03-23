import React from "react";
import Images from "./Images";
import productImg from "/src/assets/productImg.png";
import Container from "./Container";
import { FaStar } from "react-icons/fa";

const Products = () => {
  return (
    <>
      <div className="mt-25">
        <Container>
          <Images imgSrc={productImg} />
          <div className="mt-10">
            <div className="flex">
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
                <FaStar className="w-10 h-10 text-red" />
                <FaStar className="w-10 h-10 text-red" />
                <FaStar className="w-10 h-10 text-red" />
                <FaStar className="w-10 h-10 text-red" />
                <FaStar className="w-10 h-10 text-red" />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Products;
