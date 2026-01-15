import Images from "../Images";
import faqred from "/src/assets/faqred.png";
import faqpurple from "/src/assets/faqpurple.png";

const Faq = () => {
  return (
    // Flex: ছবি এবং টেক্সট পাশাপাশি রাখার জন্য
    <div className="flex gap-x-15 mb-[300px]">
      {/* Relative Parent: যাতে এর ভেতরের Absolute ছবি এর বাইরে না যায় */}
      <div className="relative">
        {/* লাল ছবি (Decoration): একে Absolute করে পেছনে পাঠাবো */}
        <Images className="absolute z-0 -top-20 left-0" imgSrc={faqred} />

        {/* বেগুনি ছবি (Main): একে Relative রাখব যাতে এটি জায়গা দখল করে এবং হাইট ঠিক রাখে */}
        <Images className="relative z-10 -left-50 w-full" imgSrc={faqpurple} />
      </div>
      <div className="">
        <h2 className="font-pop font-semibold text-[48px] text-[#181818] leading-[150%] w-[614px] items-start">Explore Our Wide Range of Car Rental Services</h2>
        <div className="pb-[50px]">

        </div>
      </div>
    </div>
  );
};
export default Faq;
