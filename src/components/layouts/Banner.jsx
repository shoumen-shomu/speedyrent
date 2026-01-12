import { Link } from "react-router-dom";
import Button from "../Button";
import Container from "../Container";
import Images from "../Images";
import bannerimage from "/src/assets/bannerimage.png";

const Banner = () => {
  return (
    <div>
      <div className="bg-[url('/src/assets/bannerbg.png')] pt-[211px] bg-cover bg-center bg-no-repeat">
        <div className="flex pt-[97px]">
          <Container>
              <div className=" w-[668px] ml-32">
                <h1 className="font-pop font-semibold text-[48px] text-[#181818] leading-[150%]">
                  Experience Ultimate Comfort and Convenience with Speedy
                </h1>
                <p className="font-pop font-normal text-base text-[#454545] leading-[180%] w-[556px] pt-[30px] pb-[40px]">
                  Lorem ipsum dolor sit amet consectetur. Purus viverra viverra
                  amet molestie imperdiet quis enim varius. Vitae rutrum
                  praesent a et cursus sagittis egestas blandit eget.{" "}
                </p>
                <div className="flex gap-x-5">
                  <Link>
                    <Button
                      className={
                        "bg-[#EA002D] font-pop font-semibold text-base text-white hover:bg-white hover:text-[#181818] duration-300 inline-block duration-300"
                      }
                      btnText={"Get Started"}
                    />
                  </Link>
                  <Link>
                    {" "}
                    <Button
                      className={
                        "bg-[#EA002D] font-pop font-semibold text-base text-white hover:bg-white hover:text-[#181818] duration-300 inline-block duration-300"
                      }
                      btnText={"See All Cars"}
                    />
                  </Link>
                </div>
              </div>
          </Container>
          <Images imgSrc={bannerimage} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
