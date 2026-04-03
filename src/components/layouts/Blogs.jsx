import React from "react";
import Container from "../Container";
import Images from "../Images";
import blogimg from "/src/assets/blogImg.png";
import Button from "../Button";

const Blogs = () => {
  return (
    <>
    
      <section className="mb-87.5">
        <Container>
          <div className="text-center">
            <h2 className="font-pop font-semibold text-[48px] text-[#181818] leading-[150%] w-273.25 mx-auto pb-7.5">
              Stay Up-to-Date with the Latest Car Rental Trends and Tips
            </h2>
            <p className="font-pop font-normal text-base text-[#454545] leading-[180%] w-273.25 mx-auto">
              Lorem ipsum dolor sit amet consectetur. Purus viverra viverra amet
              molestie imperdiet quis enim varius. Vitae rutrum praesent a et
              cursus sagittis egestas blandit eget.{" "}
            </p>
          </div>
          <div className="mt-25 grid grid-cols-3 gap-7.5">
            <div className="w-lg ">
              <Images imgSrc={blogimg} imgAlt={blogimg} />
              <div className="pt-7.5">
                <h4 className="font-pop font-semibold text-[32px] text-[#181818] leading-[150%] mb-[30px]">
                  How to Choose the Right Rental Car for Your Needs
                </h4>
                <p className="font-pop font-normal text-base text-[#454545] leading-[180%] pb-10">
                  Lorem ipsum dolor sit amet consectetur. Purus viverra viverra
                  amet molestie imperdiet quis enim varius. Vitae rutrum
                  praesent a et cursus sagittis e.{" "}
                </p>
                <Button
                  btnText={"Read More"}
                  className={
                    "bg-[#EA002D] inline-block font-pop font-normal text-base text-[#FDFDFD] leading-[180%]"
                  }
                />
              </div>
            </div>
            <div className="w-lg ">
              <Images imgSrc={blogimg} imgAlt={blogimg} />
              <div className="pt-7.5">
                <h4 className="font-pop font-semibold text-[32px] text-[#181818] leading-[150%] mb-[30px]">
                  10 Tips for Saving Money on Your Next Car Rental
                </h4>
                <p className="font-pop font-normal text-base text-[#454545] leading-[180%] pb-10">
                  Lorem ipsum dolor sit amet consectetur. Purus viverra viverra
                  amet molestie imperdiet quis enim varius. Vitae rutrum
                  praesent a et cursus sagittis e.{" "}
                </p>
                <Button
                  btnText={"Read More"}
                  className={
                    "bg-[#EA002D] inline-block font-pop font-normal text-base text-[#FDFDFD] leading-[180%]"
                  }
                />
              </div>
            </div>
            <div className="w-lg ">
              <Images imgSrc={blogimg} imgAlt={blogimg} />
              <div className="pt-7.5">
                <h4 className="font-pop font-semibold text-[32px] text-[#181818] leading-[150%] mb-[30px]">
                  5 Essential Items to Pack for Your Next Road Trip
                </h4>
                <p className="font-pop font-normal text-base text-[#454545] leading-[180%] pb-10">
                  Lorem ipsum dolor sit amet consectetur. Purus viverra viverra
                  amet molestie imperdiet quis enim varius. Vitae rutrum
                  praesent a et cursus sagittis e.{" "}
                </p>
                <Button
                  btnText={"Read More"}
                  className={
                    "bg-[#EA002D] inline-block font-pop font-normal text-base text-[#FDFDFD] leading-[180%]"
                  }
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Blogs;
