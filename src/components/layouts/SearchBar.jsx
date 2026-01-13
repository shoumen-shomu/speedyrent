
import Container from "../Container";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="">
      <Container>
        <div className="w-368.25 py-12.5 px-7.5 flex gap-x-9 shadow-[0px_8px_35px_0px_rgba(24,24,24,0.08)]">
          <div className="flex gap-x-5 items-center border border-[#CEC8C8] bg-[#F5F5F5] py-[30px] pl-[20px] w-[343px] group hover:bg-[#EA002D] hover:border-[#EA002D] duration-500">
            <FaMapMarkerAlt className="text-[#989898] text-[36px] group-hover:text-[#FDFDFD] duration-500" />
            <p className="font-pop font-semibold text-[24px] text-[#454545] leading-[150%] group-hover:text-[#FDFDFD] duration-500">
              Your Location
            </p>
          </div>
          <div className="flex gap-x-5 items-center border border-[#CEC8C8] bg-[#F5F5F5] py-[30px] pl-[20px] w-[343px] group hover:bg-[#EA002D] hover:border-[#EA002D] duration-500">
            <BsFillCalendarDateFill className="text-[#989898] text-[36px] group-hover:text-[#FDFDFD] duration-500" />
            <p className="font-pop font-semibold text-[24px] text-[#454545] leading-[150%] group-hover:text-[#FDFDFD] duration-500">
              Pick Up Date
            </p>
          </div>
          <div className="flex gap-x-5 items-center border border-[#CEC8C8] bg-[#F5F5F5] py-[30px] pl-[20px] w-[343px] group hover:bg-[#EA002D] hover:border-[#EA002D] duration-500">
            <BsFillCalendarDateFill className="text-[#989898] text-[36px] group-hover:text-[#FDFDFD] duration-500" />
            <p className="font-pop font-semibold text-[24px] text-[#454545] leading-[150%] group-hover:text-[#FDFDFD] duration-500">
              Return Date
            </p>
          </div>
          <div className="flex gap-x-5 items-center border border-[#CEC8C8] bg-[#F5F5F5] py-7.5 pl-5 w-[343px] group hover:bg-[#EA002D] hover:border-[#EA002D] duration-500">
            <FaSearch className="text-[#989898] text-[36px] group-hover:text-[#FDFDFD] duration-500" />
            <p className="font-pop font-semibold text-[24px] text-[#454545] leading-[150%] group-hover:text-[#FDFDFD] duration-500">
              Search Now
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SearchBar;