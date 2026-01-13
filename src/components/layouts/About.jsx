import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import playVideo from "/src/assets/video.png"
import { BsPlayCircle } from "react-icons/bs";

const About = () => {
  return (
    <div className="my-75">
      <Container className={""}>
        <h6 className="font-pop font-semibold text-[24px] text-[#454545] leading-[150%] pb-[20px]">
          About Speedy
        </h6>
        <Flex className={"gap-x-25 mb-12.5"}>
          <div className="">
            <h2 className="pb-42 font-pop font-semibold text-[48px] text-[#181818] leading-[150%] w-[614px]">
              Discover the Difference with Our Car Rentals
            </h2>
            <p className="font-pop font-normal text-base text-[#454545] leading-[180%] w-[556px]">
              Lorem ipsum dolor sit amet consectetur. Malesuada turpis sem
              pellentesque suscipit sit vel. Id sem elementum adipiscing sed
              pulvinar quisque. Eu ut sagittis facilisi porttitor posuere eget
              in lacus. Justo sagittis rhoncus morbi id sed id cras quis. Tempus
              elementum mauris faucibus felis eleifend placerat.{" "}
            </p>
          </div>
          <div className="items-center">
            <p className="pb-20 font-pop font-normal text-base text-[#454545] leading-[180%] w-[882px]">
              Lorem ipsum dolor sit amet consectetur. Malesuada turpis sem
              pellentesque suscipit sit vel. Id sem elementum adipiscing sed
              pulvinar quisque. Eu ut sagittis facilisi porttitor posuere eget
              in lacus. Justo sagittis rhoncus morbi id sed id cras quis. Tempus
              elementum mauris faucibus felis eleifend placerat. Quam sed fusce
              id molestie amet quis tortor porta lorem. Sed commodo et in congue
              at in amet vivamus iaculis. Amet in duis eu in non nunc adipiscing
              egestas. Ultricies morbi at ut nec luctus. Blandit convallis a
              blandit eget sagittis. Amet varius suspendisse odio molestie.
              Ullamcorper laoreet dictum semper augue et dui vestibulum
              imperdiet cum. Laoreet in scelerisque nulla in vulputate malesuada
              dictumst vitae diam. Volutpat sed arcu urna sem eu ornare et
              facilisis sed.
            </p>
            <p className="font-pop font-normal text-base text-[#454545] leading-[180%] w-[882px]">
              Egestas molestie dictum fringilla nulla in et. Rhoncus donec nunc
              sed congue egestas tellus. Consequat ultrices tincidunt tincidunt
              convallis libero gravida. Etiam magnis faucibus tincidunt risus
              nisi. Montes amet sit suspendisse venenatis adipiscing interdum
              nunc. At pulvinar adipiscing maecenas bibendum adipiscing rutrum
              nullam. Neque sit proin hac nulla nullam massa condimentum
              tristique risus. Feugiat faucibus sollicitudin commodo nunc. In
              condimentum non ut at odio diam in.{" "}
            </p>
          </div>
        </Flex>
        <div className="relative">
            <Images className={""} imgSrc={playVideo}/>
            <BsPlayCircle  className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] text-[134px] text-white" />
        </div>
      </Container>
    </div>
  );
};

export default About;
