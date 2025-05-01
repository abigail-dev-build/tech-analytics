import Image from "next/image";
import LeftQuote from "../public/leftquote.svg";
import RightQuote from "../public/rightquote.svg";
import Line from "../public/Line.svg";
import { testimonials } from "./helpers";

const Testimonials = ({currentIndex}) => {
 
  return (
    <div class=" relative overflow-hidden mx-7 mt-5 mb-10">
    <div
      class="flex justify-between gap-8 transition-transform duration-500 ease-in-out"
      style={{ transform: `translateX(-${currentIndex * 100}%)` }}
    >
      {testimonials?.map((items) => {
        const {
          profileImage,
          companyName,
          testimonial,
          name,
          position,
          country,
          logo,
        } = items;
        return (
          <div
            class="bg-white w-105 h-92 p-10 rounded-lg"
            key={companyName}
          >
            <div class="flex justify-between">
              <div class="w-40 h-40 rounded-full overflow-hidden">
                <Image
                  src={profileImage}
                  alt="user"
                  priority
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="w-45 h-11.5 border border-solid border-lightgray rounded-xl px-2.5 py-2 flex justify-between">
                <Image src={logo} alt="testimonial company logo" />
                <p class="text-dark text-base font-semibold text-center truncate ...">
                  {companyName}
                </p>
              </div>
            </div>
            <div class="mt-10 w-103 h-46 flex relative">
              <Image src={LeftQuote} alt="left quote" class="absolute left-0 top-0" />
              {/* class="absolute left-0 top-0"  class="absolute bottom-0 right-0" */}
              <p class="absolute left-16 top-10 right-10">{testimonial}</p>
              <Image src={RightQuote} alt="right quote" class="absolute bottom-0 right-0" />
            </div>
            <div class="flex gap-4 mt-5">
              <div class="pt-2">
                <Image src={Line} alt="line" />
              </div>
              <div>
                <p class="font-semibold text-lg">{name}</p>
                <p class="font-mediun text-base">{position}</p>
                <p class="font-medium text-base">{companyName}</p>
                <p class="font-medium text-base">{country}</p>
              </div>
            </div>
          </div>
        );
      })}

    </div>

    </div>
  );
}

export default Testimonials;
