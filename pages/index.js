import { useState, useEffect } from "react";
import Image from "next/image";
import Layout from "../components/layout";
import HomeIcon from "../public/Home-circle.svg";
import CloudServices from "../public/cloud-services.svg";
import Consulting from "../public/technical-consulting.svg";
// import Development from "../public/web-development.svg";/
import Development from "../public/academy-icon.svg";
import Previous from "../public/PreviousButton.svg";
import NextButton from "../public/NextButton.svg";
import { testimonials } from "../components/helpers";
import Testimonials from "../components/testimonials";
import HeadTag from "../components/headTag";
import StockQuote from "../public/StockQuotes.svg";
import SquareStar from "../public/SquareStar.svg";
import Tick from "../public/Tick.svg";
import Network from "../public/pictures/network.png";
import PrimaryButton from "../components/button";
import { Typewriter } from "react-simple-typewriter";
import { useRouter } from "next/navigation";
import { content, cardContent } from "../components/arrays";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeColumn, setActiveColumn] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => ((prev + 1) % testimonials?.length) / 2);
    }, 3000);
    return () => clearInterval(interval); // Cleanup interval
  }, [testimonials?.length]);

  const handleNext = (e) => {
    // The array is rendered in twos per slide, factor this in when clicking next and the useEffect sliding
    e.preventDefault();
    if (currentIndex < testimonials?.length / 2 - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = (e) => {
    e.preventDefault();
    setCurrentIndex((prev) => (prev === 0 ? 0 : prev - 1));
  };

  // in the next.config file, recheck ways to optimize images
  return (
    <Layout bgColor="bg-offwhite">
      <HeadTag title="Home" />
      {/* section 1 */}
      <div className="flex flex-col md:flex-row justify-center px-5 py-14 lg:px-20">
        <div className="w-full md:w-1/2 mt-20 order-last md:order-first">
          <h1 className="font-crimson text-5xl font-bold">
            Empower your growth with
            <br />
            <span className="bg-gradient-to-r from-blue from-20% via-red via-60% to-green inline-block text-transparent bg-clip-text">
              <Typewriter
                words={[
                  "Streamlined Cloud Infrastructure",
                  // "optimised infrastructure plan",
                  // "ideas that bring growth for you",
                ]}
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={100}
                delaySpeed={1500}
              />
            </span>
          </h1>

          <p className="font-hanken text-xl font-medium text-grey pt-10">
            Unlock the power of simplicity in infrastructure management. At Nest
            Analytics, we transform complex systems into efficient,
            cost-effective solutions that drive your business forward.
          </p>
          <div className="flex gap-4 mt-8">
            <PrimaryButton type="button">
              <a href="mailto:info@nestanalytics.org">Book a session</a>
            </PrimaryButton>
            <button
              type="button"
              onClick={() => router.push("/about")}
              className="w-37 h-10.5 bg-white text-blue py-2.5 border border-solid border-lightblue"
            >
              About us
            </button>
          </div>
        </div>
        <div className=" w-full md:w-1/2 order-first md:order-last lg:pl-24">
          <Image
            priority
            src={HomeIcon}
            alt="rotating image"
            width={501}
            height={559}
          />
        </div>
      </div>

      {/* section 2 */}
      <div className="mt-14">
        <h5 className="font-crimson text-dark font-semibold text-2xl text-center">
          We are experts in leading cloud platforms
        </h5>
        <p className="font-hanken text-grey font-medium text-lg text-center mx-4">
          We bring expertise that matches your business needs with the right
          solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 pt-10 mx-12 lg:mx-40">
          <div className="w-85 min-h-81 bg-white py-5 px-4 mb-2 md:mb-0">
            <h6 className="font-crimson font-semibold text-dark text-xl">
              Cloud services
            </h6>
            <p className="font-hanken font-normal text-grey text-lg pt-2">
              Efficiently manage your cloud environment with cost-optimized
              solutions tailored for growth.
            </p>
            <div className="flex justify-center items-center mt-2">
              <Image priority src={CloudServices} alt="cloud services" />
            </div>
          </div>
          <div className="w-85 min-h-81 bg-white py-5 px-4 mb-2 md:mb-0">
            <h6 className="font-crimson font-semibold text-dark text-xl">
              Infrastructure Management
            </h6>
            <p className="font-hanken font-normal text-grey text-lg pt-2">
              Navigate digital transformation with strategic,
              confidence-building management for your IT infrastructure.
            </p>
            <div className="flex justify-center items-center mt-2">
              <Image priority src={Consulting} alt="technical consulting" />
            </div>
          </div>
          <div className="w-85 min-h-81 bg-white py-5 px-4 mb-2 md:mb-0">
            <h6 className="font-crimson font-semibold text-dark text-xl">
              Academy
            </h6>
            <p className="font-hanken font-normal text-grey text-lg pt-2">
              Elevate your skills with hands-on training for aspiring Azure
              specialists in admin, engineering, and DevOps.
            </p>
            <div className="flex justify-center items-center mt-2">
              <Image priority src={Development} alt="web development" />
            </div>
          </div>
        </div>
      </div>

      {/* section 3 blocked*/}
      {/* <div className="h-128 bg-sky mt-10">
        <div className="pt-4 pl-20">
          <h4 className="text-4xl font-bold">
            Don&apos;t just take our word for it.
            <br /> See what <span className="text-blue">our clients</span> says{" "}
          </h4>
        </div>

        <div className="flex justify-end mr-20 gap-10">
          <button onClick={handlePrevious}>
            <Image src={Previous} alt="previous" />
          </button>
          <button onClick={handleNext}>
            <Image src={NextButton} alt="next" />
          </button>
        </div>

        <Testimonials currentIndex={currentIndex} />
        <div className="flex justify-between px-5 mt-32">
          <Image priority src={StockQuote} alt="stock quote" />
          <Image priority src={SquareStar} alt="square star" />
        </div>
      </div> */}

      {/* section 4 */}
      <div className="mt-16 lg:px-40">
        <h5 className="font-crimson font-semibold text-dark text-2xl text-center">
          Why work with Nest Analytics?
        </h5>
        <p className="font-hanken font-medium mx-4 text-grey text-lg text-center">
          We transform challenges into opportunities by putting you at the
          center of our strategy.
        </p>

        <div className="my-14 ml-4">
          <div
            className="flex overflow-x-auto gap-4 snap-x snap-mandatory scroll-smooth scrollbar-hide 
               lg:grid lg:grid-cols-3 lg:overflow-visible"
          >
            {cardContent.map((items, index) => {
              const { text, icon } = items;
              const isLast = index === cardContent.length - 1;
              return (
                <div
                  key={text}
                  className={`w-[85vw] min-w-[85vw] min-h-21 rounded-lg px-5 py-2.5 flex-shrink-0 snap-center 
                    bg-[#E9F2FA] flex justify-between gap-3 transition-all duration-300
                    ${activeColumn === index ? "bg-sky" : "bg-gray"} 
                    ${isLast ? "mr-4" : ""}
                    lg:w-auto lg:min-w-0 lg:snap-none lg:mr-0`}
                  onClick={() => setActiveColumn(index)}
                >
                  <Image src={icon} alt={`${text} icon`} />
                  <p className="font-hanken font-semibold text-sm text-dark mt-2">
                    {text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className="">
            <p className="font-hanken font-medium  mx-8 text-xl text-dark lg:mx-0">
              {content[activeColumn]?.paragraph}
            </p>
            <div className="grid grid-rows-4 gap-4 w-80 mt-10 mx-auto order-last md:order-first">
              {content[activeColumn]?.list.map((item, index) => (
                <div className="flex gap-3" key={index}>
                  <Image className="" src={Tick} alt="tick icon" />
                  <p className="font-hanken text-grey text-xl font-normal pt-4">
                    {item}
                  </p>
                </div>
              ))}

              <button className=" m-auto w-55 h-10.5 bg-blue text-white py-2.5 border-transparent outline-none">
                Get started with us
              </button>
            </div>
          </div>
          <Image
            className="px-8 order-first md:order-last lg:px-0"
            src={content[activeColumn]?.image}
            alt={`Image for ${content[activeColumn]?.image}`}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 my-16">
          <Image className="" src={Network} alt="networking" />
          <div className="mt-20">
            <h4 className="font-crimson text-dark text-3xl font-bold text-center">
              Be part of a network that nurtures
            </h4>
            <p className="font-hanken text-grey text-lg font-normal mt-3 mx-10">
              Join our community of educators, experts, and tech enthusiasts,
              where we learn, share, and grow.
            </p>
            <div className="w-37 mx-auto mt-20">
              <button className="w-37 h-10.5 bg-white text-blue py-2.5 border border-solid border-lightblue">
                <a href="https://t.me/boost?c=2312428518">Join our network</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
