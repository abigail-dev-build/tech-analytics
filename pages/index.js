import { useState, useEffect } from "react";
import Image from "next/image";
import Layout from "../components/layout";
import HomeIcon from "../public/Home-circle.svg";
import CloudServices from "../public/cloud-services.svg";
import Consulting from "../public/technical-consulting.svg";
import Development from "../public/web-development.svg";
import Previous from "../public/PreviousButton.svg";
import NextButton from "../public/NextButton.svg";
import { testimonials } from "../components/helpers";
import Testimonials from "../components/testimonials";
import HeadTag from "../components/headTag";
import StockQuote from "../public/StockQuotes.svg";
import SquareStar from "../public/SquareStar.svg";
import HumanIcon from "../public/human_icon.svg";
import MoneyIcon from "../public/money_icon.svg";
import LoadingIcon from "../public/loading.svg";
import CustomerSatisfaction from "../public/pictures/customer_satisfaction.png";
import Tick from "../public/Tick.svg";
import Network from "../public/pictures/network.png";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prev) => (prev + 1) % testimonials?.length);
  //   }, 3000);
  //   return () => clearInterval(interval); // Cleanup interval
  // }, [testimonials?.length]);

  const handleNext = (e) => {
    // The array is rendered in twos per slide, factor this in when clicking next and the useEffect sliding
    e.preventDefault();
    if (currentIndex < testimonials?.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = (e) => {
    e.preventDefault();
    setCurrentIndex((prev) => (prev === 0 ? 0 : prev - 1));
  };

  // in the next.config file, recheck ways to optimize images
  return (
    <Layout>
      <HeadTag title="Home" />
      {/* section 1 */}
      <div class="grid grid-cols-2 px-20 py-14 ">
        <div class="mt-20">
          <h1 class="text-5xl font-bold">
            Scale your vision with {""}{" "}
            <span class="bg-gradient-to-r from-blue from-20% via-red via-60% to-green inline-block text-transparent bg-clip-text">
              optimised infrastructure plan
            </span>
          </h1>

          <p class="text-xl font-medium text-grey pt-10">
            Let&apos;s work to optimise that complex infrastructure with our
            resourceful expertise in cloud management across various platforms
            maximising your budget.
          </p>
          <div class="flex gap-4 mt-8">
            <button class="w-37 h-10.5 bg-blue text-white py-2.5 border-transparent outline-none">
              Book a session
            </button>
            <button class="w-37 h-10.5 bg-white text-blue py-2.5 border border-solid border-lightblue">
              About us
            </button>
          </div>
        </div>

        <div class="pl-24">
          <Image priority src={HomeIcon} alt="rotating image" />
        </div>
      </div>

      {/* section 2 */}
      <div class="mt-14">
        <h5 class="text-dark font-semibold text-2xl text-center">
          We are experts in leading cloud platforms
        </h5>
        <p class="text-grey font-medium text-lg text-center">
          We bring expertise that matches your business needs with the right
          solutions.
        </p>
        <div class="grid grid-cols-3 pt-10 mx-40">
          <div class="w-85 h-81 bg-white py-5 px-4">
            <h6 class="font-semibold text-dark text-xl">Cloud services</h6>
            <p class="font-normal text-grey text-lg pt-2">
              Expert cloud management and infrastructure solutions that are cost
              optimised.
            </p>
            <div class="flex justify-center items-center mt-2">
              <Image priority src={CloudServices} alt="cloud services" />
            </div>
          </div>
          <div class="w-85 h-81 bg-white py-5 px-4">
            <h6 class="font-semibold text-dark text-xl">
              Technical Consulting
            </h6>
            <p class="font-normal text-grey text-lg pt-2">
              Strategic guidance to navigate your digital transformation and
              build with confidence.
            </p>
            <div class="flex justify-center items-center mt-2">
              <Image priority src={Consulting} alt="technical consulting" />
            </div>
          </div>
          <div class="w-85 h-81 bg-white py-5 px-4">
            <h6 class="font-semibold text-dark text-xl">Web Development</h6>
            <p class="font-normal text-grey text-lg pt-2">
              Custom-built, scalable applications that turn your vision into
              powerful digital experiences
            </p>
            <div class="flex justify-center items-center mt-2">
              <Image priority src={Development} alt="web development" />
            </div>
          </div>
        </div>
      </div>

      {/* section 3 */}
      <div class="h-128 bg-sky mt-10">
        <div class="pt-4 pl-20">
          <h4 class="text-4xl font-bold">
            Don&apos;t just take our word for it.
            <br /> See what <span class="text-blue">our clients</span> says{" "}
          </h4>
        </div>

        <div class="flex justify-end mr-20 gap-10">
          <button class="" onClick={handlePrevious}>
            <Image src={Previous} alt="previous" />
          </button>
          <button class="" onClick={handleNext}>
            <Image src={NextButton} alt="next" />
          </button>
        </div>

        <Testimonials currentIndex={currentIndex} />
        <div class="flex justify-between px-5 mt-32">
          <Image priority src={StockQuote} alt="stock quote" />
          <Image priority src={SquareStar} alt="square star" />
        </div>
      </div>

      {/* section 4 */}
      <div class="mt-16 px-40">
        <h5 class="font-semibold text-dark text-2xl text-center">
          Why work with Tech Analytics?
        </h5>
        <p class="font-medium text-grey text-lg text-center">
          Turning the tides of challenges into bright, seamless opportunity is
          what we do
        </p>
        <div class=" grid grid-cols-3 gap-4 my-14">
          <div class="w-85 min-h-21 rounded-lg px-5 py-2.5 bg-[#E9F2FA] flex justify-between gap-3">
            <Image src={HumanIcon} alt="human icon" />
            <p class="font-semibold text-sm text-dark mt-2">
              We are YOU focused. Our goal is to help you reach your goals
            </p>
          </div>
          <div class="w-85 min-h-21 rounded-lg px-5 py-2.5 bg-gray flex justify-between gap-3">
            <Image src={MoneyIcon} alt="money icon" />
            <p class="font-semibold text-sm text-dark mt-2">
              Cost optimisation with quality job retained
            </p>
          </div>
          <div class="w-85 min-h-21 rounded-lg px-5 py-2.5 bg-gray flex justify-between gap-3">
            <Image src={LoadingIcon} alt="loading icon" />
            <p class="font-semibold text-sm text-dark mt-2">
              From infrastructure to scalability, one team handles your needs
            </p>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-20">
          <div class="">
            <p class="font-medium text-xl text-dark">
              Because your success is the only metric that matters to us. That
              is why we work with your business objectives while building
              solutions around your workflow that brings growth.
            </p>
            <div class="grid grid-rows-4 gap-4 w-80 mt-10 mx-auto">
              <div class="flex gap-3">
                <Image class="" src={Tick} alt="tick icon" />
                <p class="text-grey text-xl font-normal pt-4">
                  Regular strategy reviews
                </p>
              </div>
              <div class="flex gap-3">
                <Image class="" src={Tick} alt="tick icon" />
                <p class="text-grey text-xl font-normal pt-4">
                  Proactive optimisation
                </p>
              </div>
              <div class="flex gap-3">
                <Image class="" src={Tick} alt="tick icon" />
                <p class="text-grey text-xl font-normal pt-4">
                  24/7 expert support
                </p>
              </div>

              <button class=" m-auto w-55 h-10.5 bg-blue text-white py-2.5 border-transparent outline-none">
                Get started with us
              </button>
            </div>
          </div>
          <Image src={CustomerSatisfaction} alt="customer satisfaction" />
        </div>

        <div class="grid grid-cols-2 gap-16 my-16">
          <Image class="" src={Network} alt="networking" />
          <div class="w-99 mt-20">
            <h4 class="text-dark text-3xl font-bold text-center">
              Be part of a network that nurtures
            </h4>
            <p class="text-grey text-lg font-normal mt-3 mx-10">
              Join our community of educators, experts, and tech enthusiasts,
              where we learn, share, and grow.
            </p>
            <div class="w-37 mx-auto mt-20">
              <button class="w-37 h-10.5 bg-white text-blue py-2.5 border border-solid border-lightblue">
                Join our network
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
