import React from "react";
import Container from "../Container";
import Images from "../Images";
import reviewImage from "/src/assets/testimonialImage.png";
import { MdChevronRight } from "react-icons/md";

const Review = () => {
  return (
    <>
      {/* review part Start */}
      <section className="mt-87.5 mb-87.5">
        <Container>
          <div className="flex gap-35 items-center">
            <div className="">
              <h1 className="font-pop font-semibold text-[48px] text-[#181818] leading-[150%] w-[660px] mb-[30px]">
                See Why Speedy is the Top Choice for Car Rentals
              </h1>
              <p className="font-pop font-normal text-base text-[#454545] leading-[180%] w-[594px]">
                Lorem ipsum dolor sit amet consectetur. Purus viverra viverra
                amet molestie imperdiet quis enim varius. Vitae rutrum praesent
                a et cursus sagittis egestas blandit eget.{" "}
              </p>
              {/* Review Start  */}
              <div className="w-168.5 mt-[50px]">
                <p className="font-pop font-normal text-[24px] text-[#181818] leading-[180%] italic mb-[30px]">
                  "I recently rented a car from Speedy and I was blown away by
                  the level of service I received. The booking process was quick
                  and easy, and the staff were friendly and helpful when I
                  arrived to pick up my rental car”F
                </p>
                <h3 className="font-pop font-semibold text-[32px] text-[#181818] leading-[150%]">
                  James Andrew
                </h3>
                <p className="font-pop font-semibold text-base text-[#454545] leading-[150%]">
                  Customer
                </p>
                {/* <div className="flex gap-10">
                  <div className="w-15 h-15 bg-[#EA002D] flex items-center justify-center">
                    <MdChevronRight className="text-white text-[15px]" />
                  </div>
                </div> */}
              </div>
              {/* Review End */}
            </div>
            <div className="">
              <Images imgSrc={reviewImage} imgAlt={reviewImage} />
            </div>
          </div>
        </Container>
      </section>
      {/* review part End */}
    </>
  );
};

export default Review;
