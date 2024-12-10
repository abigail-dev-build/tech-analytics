import Layout from "../components/layout";
import HeadTag from "../components/headTag";
import Image from "next/image";
import Journey1 from "../public/pictures/journey_image_1.png";
import Journey2 from "../public/pictures/journey_image_2.png";
import SideArrow from "../public/story_arrow.svg";

const Journey = () => {
  return (
    <Layout bgColor="bg-sky">
      <HeadTag title="Our journey" />
      <div class="grid grid-cols-12">
        {/* left */}
        <div class="bg-sky col-span-4">
          <div class="px-10 pt-52 pb-44">
            <h1 class="font-bold text-5xl ml-20 bg-gradient-to-r from-blue from-25% to-red inline-block text-transparent bg-clip-text">
              OUR STORY
            </h1>
            <p class="mt-2 font-medium text-lg text-grey text-center">
              A show of commitment to help businesses navigate the ever changing
              world of technology.{" "}
            </p>
          </div>

          <Image src={SideArrow} alt="" width={360} height={221} />
          <p class="mt-44 mb-60 px-14 font-semibold text-xl text-grey text-center">
            We don&apos;t just solve tech problems, we engineer growth trajectories
          </p>
        </div>
        {/* right */}
        <div class="col-span-8 mx-24 pt-16 min-h-screen">
          <p class="font-medium text-grey text-lg">
            <span class="font-semibold text-2xl text-dark">
              WE BELIEVE THAT
            </span>{" "}
            <span class="font-semibold text-2xl text-blue">EVERY BUSINESS</span>
            , regardless of size, deserves access to enterprise-grade technology
            solutions. Our journey has been marked by countless hours spent
            understanding each client&apos;s unique challenges, whether
            it&apos;s a startup seeking cloud infrastructure guidance or an
            established company ready for digital transformation.
          </p>

          <div class="grid grid-cols-2 mt-12">
            <div class="flex items-center justify-center">
              <p class="text-center font-semibold text-2xl text-dark">
                WE RUN WITH <span class="text-blue">YOUR VISION</span>
              </p>
            </div>
            <div>
              <Image src={Journey1} alt="journey_image_1" />
            </div>
          </div>

          <div class="grid grid-cols-2 mt-14">
            <div>
              <Image src={Journey2} alt="journey_image_2" />
            </div>
            <div class="flex items-center justify-center">
              <p class="text-center font-semibold text-2xl text-dark">
                WE ARE <span class="text-blue">“YOU”</span> FOCUSED
              </p>
            </div>
          </div>

          <p class="font-normal text-grey text-xl mt-10">
            But beyond business growth, we take pride in nurturing individual
            potential. Through our comprehensive training programs, we&apos;ve helped
            hundreds of professionals transition into cloud computing careers,
            turning technological challenges into opportunities for personal
            growth.
          </p>
          <br />
          <p class="font-normal text-grey text-xl">
            Our success isn&apos;t measured by projects completed, but by dreams
            achieved and businesses transformed. We&apos;re committed to being the
            bridge between where you are and where you want to be.
          </p>

          <h3 class="font-bold text-blue text-bold text-center mt-16">
            Let&apos;s write your success story together.
          </h3>

          <div class="w-37 mx-auto mt-6 mb-20">
            <button class="bg-blue text-white w-37 h-10.5 py-2.5 px-5 text-base font-medium">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Journey;
