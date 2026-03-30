import React from "react";
import Container from "../Container";

const Review = () => {
  return (
    <>
      {/* review part Start */}
      <section className="mt-87.5">
        <Container>
          <div className="flex">
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
                <h3>James Andrew</h3>
                <p>Customer</p>
              </div>
              {/* Review End */}
            </div>
          </div>
        </Container>
      </section>
      {/* review part End */}
    </>
  );
};

export default Review;
