import React from "react";
import Container from "../Container";
import Images from "../Images";
import discover from "/src/assets/discoverpert.png";

const DiscoverPart = () => {
  return (
    <div>
      <Container>
        <div className="text-center mb-[100px]">
          <h2 className="font-pop font-semibold text-[48px] text-[#181818] leading-[150%] w-[1141px] mx-auto mb-[30px]">
            Discover Our Exclusive Features and Add-Ons for a Perfect Rental
            Experience
          </h2>
          <p className="w-[820px] mx-auto font-pop font-normal text-base text-[#454545] leading-[180%]">
            Lorem ipsum dolor sit amet consectetur. Purus viverra viverra amet
            molestie imperdiet quis enim varius. Vitae rutrum praesent a et
            cursus sagittis egestas blandit eget.{" "}
          </p>
        </div>
        <div className="">
            <Images imgSrc={discover}/>
        </div>
      </Container>
    </div>
  );
};

export default DiscoverPart;
