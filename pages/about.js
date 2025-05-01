import Layout from "../components/layout";
import HeadTag from "../components/headTag";
import Image from "next/image";
import Journey1 from "../public/pictures/journey_image_1.png";
import Journey2 from "../public/pictures/journey_image_2.png";
import SideArrow from "../public/side_arrow_down.svg";
import PrimaryButton from "../components/button";

const Journey = () => {
  return (
    <Layout bgColor="bg-sky">
      <HeadTag title="About" />
      <div className="bg-sky py-12">
        <div className="text-center">
          <h1 className="font-crimson font-semibold text-2xl lg:text-5xl bg-gradient-to-r from-blue from-35% to-red to-65% text-transparent bg-clip-text">
            OUR STORY
          </h1>
          <p className="font-hanken mt-4 font-medium text-sm lg:text-lg text-grey">
            A show of commitment to help businesses
            <br className="hidden lg:inline" />
            navigate the ever changing world of technology.
          </p>
        </div>

        <div className="flex items-center">
          {/* Image Container*/}
          <div className="relative w-[180px] h-[180px] lg:w-[400px] h-[230px]">
            <Image
              src={SideArrow}
              alt="side-arrow"
              className="absolute -bottom-[20px] right-[16px] lg:-bottom-[104px]"
            />
          </div>

          {/* Text */}
          <div className="text-center pt-10 lg:text-left">
            <p className="font-hanken font-semibold text-sm lg:text-xl text-grey">
              We don&apos;t just solve tech problems,
              <br className="lg:hidden" />
              we engineer growth trajectories
            </p>
          </div>
        </div>
      </div>

      <div className="mx-5 lg:mx-60 mt-20">
        <p className="font-medium text-grey text-lg">
          <span class="font-hanken font-semibold text-2xl text-dark">
            WE BELIEVE THAT
          </span>{" "}
          <span class="font-hanken font-semibold text-2xl text-blue">
            EVERY BUSINESS
          </span>
          , regardless of size, deserves access to enterprise-grade technology
          solutions. Our journey has been marked by countless hours spent
          understanding each client&apos;s unique challenges, whether it&apos;s
          a startup seeking cloud infrastructure guidance or an established
          company ready for digital transformation.
        </p>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 mt-12 ">
          <div className="flex items-center justify-center">
            <p className="font-hanken text-center font-semibold text-2xl text-dark order-last md:order-first">
              WE RUN WITH <span className="text-blue">YOUR VISION</span>
            </p>
          </div>
          <div className="order-first md:order-last">
            <Image src={Journey1} alt="journey_image_1" />
          </div>
        </div>

        <p className="font-hanken font-normal text-grey text-xl mt-10">
          But beyond business growth, we take pride in nurturing individual
          potential. Through our comprehensive training programs, we&apos;ve
          helped hundreds of professionals transition into cloud computing
          careers, turning technological challenges into opportunities for
          personal growth.
        </p>
        <br />
        <p className="font-hanken font-normal text-grey text-xl">
          Our success isn&apos;t measured by projects completed, but by dreams
          achieved and businesses transformed. We&apos;re committed to being the
          bridge between where you are and where you want to be.
        </p>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 mt-14">
          <div className="">
            <Image src={Journey2} alt="journey_image_2" />
          </div>
          <div class="flex items-center justify-center">
            <p class="font-hanken text-center font-semibold text-2xl text-dark">
              WE ARE <span class="text-blue">“YOU”</span> FOCUSED
            </p>
          </div>
        </div>

        <h3 className="font-crimson font-bold text-blue text-xl text-center mt-16 lg:text-bold">
          Let&apos;s write your success story together.
        </h3>

        <div className="w-37 mx-auto mt-6 mb-20">
          <PrimaryButton>Contact us</PrimaryButton>
        </div>
      </div>
    </Layout>
  );
};
export default Journey;
