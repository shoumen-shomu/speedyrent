import React from "react";
import Container from "../Container";
import Products from "../Products";

const ChoosePart = () => {
  return (
    <div>
      <Container>
        <div className="text-center mb-25  mx-auto">
          <h2 className="font-pop font-semibold text-[48px] text-[#181818] leading-[150%] w-265.25 mx-auto mb-[30px]">
            Choose Your Dream Car from Our Wide Range of Vehicles
          </h2>
          <p className="w-205 mx-auto font-pop font-normal text-base text-[#454545] leading-[180%] w-265.25">
            Lorem ipsum dolor sit amet consectetur. Purus viverra viverra amet
            molestie imperdiet quis enim varius. Vitae rutrum praesent a et
            cursus sagittis egestas blandit eget.
          </p>
        </div>
        <div className="justify-center flex gap-25">
          <div className="py-7.5 px-20 bg-[#E8E8E8] inline-block group hover:bg-[#EA002D] duration-300">
            <p className="font-pop font-semibold text-[24px] text-[#454545] leading-[150%] group-hover:text-[#FDFDFD]">
              Popular
            </p>
          </div>
          <div className="py-7.5 px-20 bg-[#E8E8E8] inline-block group hover:bg-[#EA002D] duration-300">
            <p className="font-pop font-semibold text-[24px] text-[#454545] leading-[150%] group-hover:text-[#FDFDFD]">
             Small Car
            </p>
          </div>
          <div className="py-7.5 px-20 bg-[#E8E8E8] inline-block group hover:bg-[#EA002D] duration-300">
            <p className="font-pop font-semibold text-[24px] text-[#454545] leading-[150%] group-hover:text-[#FDFDFD]">
              Large Car
            </p>
          </div>
          <div className="py-7.5 px-20 bg-[#E8E8E8] inline-block group hover:bg-[#EA002D] duration-300">
            <p className="font-pop font-semibold text-[24px] text-[#454545] leading-[150%] group-hover:text-[#FDFDFD]">
              Exclusive Car
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-10">
          <Products/>
          <Products/>
          <Products/>
          <Products/>
          <Products/>
          <Products/>
        </div>
      </Container>    
    </div>
  );
};

export default ChoosePart;
