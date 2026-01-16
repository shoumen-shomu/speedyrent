import Images from "../Images";
import faqred from "/src/assets/faqred.png";
import faqpurple from "/src/assets/faqpurple.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
      <div className="w-[768px]">
        <h2 className="font-pop font-semibold text-[48px] text-[#181818] leading-[150%] w-[614px] items-start pb-[50px]">
          Explore Our Wide Range of Car Rental Services
        </h2>
          <div className="mb-[30px]">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1" className={""}>
                <div className="flex gap-[30px] items-center">
                  <div className="w-13.5 h-13.5 bg-[#EA002D] flex justify-center items-center">
                    <h4 className="font-pop font-semibold text-[24px] text-[#FDFDFD] leading-[150%]">
                      1
                    </h4>
                  </div>
                  <div className="w-full">
                    <AccordionTrigger>Car Rental</AccordionTrigger>
                  </div>
                </div>
                <AccordionContent
                  className={
                    "w-full font-pop font-normal text-base text-[#454545] leading-[180%] pl-20"
                  }
                >
                  Make sure to provide clear and detailed information about the
                  types of vehicles you offer, rental rates, rental periods, and
                  any additional fees or requirements.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="mb-[30px]">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1" className={""}>
                <div className="flex gap-[30px] items-center">
                  <div className="w-13.5 h-13.5 bg-[#EA002D] flex justify-center items-center">
                    <h4 className="font-pop font-semibold text-[24px] text-[#FDFDFD] leading-[150%]">
                      2
                    </h4>
                  </div>
                  <div className="w-full">
                    <AccordionTrigger>Airport Transfers</AccordionTrigger>
                  </div>
                </div>
                <AccordionContent
                  className={
                    "w-full font-pop font-normal text-base text-[#454545] leading-[180%] pl-20"
                  }
                >
                  Make sure to provide clear and detailed information about the
                  types of vehicles you offer, rental rates, rental periods, and
                  any additional fees or requirements.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="mb-[30px]">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1" className={""}>
                <div className="flex gap-[30px] items-center">
                  <div className="w-13.5 h-13.5 bg-[#EA002D] flex justify-center items-center">
                    <h4 className="font-pop font-semibold text-[24px] text-[#FDFDFD] leading-[150%]">
                      3
                    </h4>
                  </div>
                  <div className="w-full">
                    <AccordionTrigger>
                      Car Maintenance and Repair
                    </AccordionTrigger>
                  </div>
                </div>
                <AccordionContent
                  className={
                    "w-full font-pop font-normal text-base text-[#454545] leading-[180%] pl-20"
                  }
                >
                  To keep your rental cars in top condition, you'll need to
                  provide regular maintenance and repair services.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1" className={""}>
                <div className="flex gap-[30px] items-center">
                  <div className="w-13.5 h-13.5 bg-[#EA002D] flex justify-center items-center">
                    <h4 className="font-pop font-semibold text-[24px] text-[#FDFDFD] leading-[150%]">
                      4
                    </h4>
                  </div>
                  <div className="w-full">
                    <AccordionTrigger>
                      Roadside Assistance
                    </AccordionTrigger>
                  </div>
                </div>
                <AccordionContent
                  className={
                    "w-full font-pop font-normal text-base text-[#454545] leading-[180%] pl-20"
                  }
                >
                  To keep your rental cars in top condition, you'll need to
                  provide regular maintenance and repair services.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>        
      </div>
    </div>
  );
};
export default Faq;
