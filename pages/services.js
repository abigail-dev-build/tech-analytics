import { useRef, createRef, useState, useEffect } from "react";
import Image from "next/image";
import HeadTag from "../components/headTag";
import Layout from "../components/layout";
import CloudSVG from "../public/cloud-svg.svg";
import TrainingSVG from "../public/training-svg.svg";
import InfrastructureSVG from "../public/infrastructure-svg.svg";
import Service from "../public/pictures/service-touch.png";
import CloudService from "../public/cloudService.svg";
import allServices from "../public/pictures/allServices.png";
import ServiceBanner from "../public/pictures/Service-banner.png";
import Azure from "../public/azure.svg";
import Goggle from "../public/google.svg";
import Amazon from "../public/amazon.svg";
import Testimonials from "../components/testimonials";
import PrimaryButton from "../components/button";

const Services = () => {
  const ref = useRef(null);

  const [showModel, setShowModel] = useState(false);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    if (showModel) {
      ref.current.showModal();
    } else {
      ref.current.close();
    }
  }, [showModel]);

  return (
    <Layout bgColor="bg-offwhite">
      <HeadTag title="Services" />
      {/* section 1 */}

      <div className="bg-[url('../public/pictures/Service-banner.png')] bg-cover bg-center w-full h-83 mt-8 lg:h-85 mt-20">
        <div className="flex flex-col items-center justify-center h-full text-center px-4">
          <h2 className="font-crimson font-semibold text-xl text-white lg:text-4xl font-bold">
            Fast and Reliable <span className="text-pink">Cloud Services</span>
            <br /> and Infrastructure Management
          </h2>
          <p className="font-hanken text-white font-medium text-base mt-4">
            From migration to optimization, we architect cloud solutions that
            <br className="hidden lg:block" /> scale with your ambitions across
            AWS, Azure, and Google Cloud
          </p>
        </div>
      </div>

      {/* section 2 */}
      <div className="mt-14">
        <h4 className="font-crimson text-dark font-semibold text-3xl text-center">
          Our Cloud Services
        </h4>
        <p className="font-hanken text-grey font-medium text-lg text-center">
          From startups to enterprises, we help organizations achieve
          unprecedented
          <br /> performance, security, and cost optimization through
          intelligent cloud architecture.
        </p>
        <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-3 pt-10 mx-12 lg:mx-40">
          <div className="w-85 h-81 bg-white py-5 px-4">
            <div className="flex justify-center items-center my-4">
              <Image priority src={CloudSVG} alt="cloud services" />
            </div>
            <h6 className="font-crimson font-semibold text-dark text-xl text-center lg:text-left">
              Multi-Cloud Architecture
            </h6>
            <p className="font-hanken font-normal text-grey text-lg pt-2 text-center lg:text-left">
              Deploy and manage workloads across leading platforms, ensuring
              optimal performance and redundancy
            </p>
          </div>
          <div className="w-85 h-81 bg-white py-5 px-4">
            <div className="flex justify-center items-center my-4">
              <Image priority src={InfrastructureSVG} alt="infrastructure" />
            </div>
            <h6 className="font-crimson font-semibold text-dark text-xl text-center lg:text-left">
              Infrastructure optimisation
            </h6>
            <p className="font-hanken font-normal text-grey text-lg pt-2 text-center lg:text-left">
              Design, migrate, and optimize your cloud infrastructure across
              major platforms, reducing costs by up to 40%
            </p>
          </div>
          <div className="w-85 h-81 bg-white py-5 px-4">
            <div className="flex justify-center items-center my-4">
              <Image priority src={TrainingSVG} alt="training" />
            </div>
            <h6 className="font-crimson font-semibold text-dark text-xl text-center lg:text-left">
              Cloud Computing Training
            </h6>
            <p className="font-hanken font-normal text-grey text-lg pt-2 text-center lg:text-left">
              From fundamentals to advanced architecture, gain hands-on
              expertise in today&apos;s leading cloud platforms
            </p>
          </div>
        </div>
      </div>
      {/* section 3 */}
      <div className="bg-lightblue h-81 relative lg:h-94 my-16">
        <div className=" mx-8 lg:mx-24 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="pt-6 lg:pt-16">
            <h3 className="font-crimson text-xl sm:text-2xl lg:text-3xl font-semibold lg:font-bold text-dark mb-4">
              Your goals guide our process
            </h3>

            <p className="font-hanken text-xs sm:text-sm lg:text-lg font-normal text-grey">
              Every line of code, every cloud configuration, every digital
              solution we deliver undergoes rigorous quality checks to ensure
              flawless performance.
            </p>

            <div className="flex justify-center mt-5">
              <PrimaryButton
                type="button"
                onClick={() => setShowModel((prev) => !prev)}
              >
                Book a Call
              </PrimaryButton>
            </div>
            {showModel && (
              <dialog
                ref={ref}
                onClick={(e) => {
                  if (!ref.current) return;

                  const dialogDimensions = ref.current.getBoundingClientRect();
                  if (
                    e.clientX < dialogDimensions.left ||
                    e.clientX > dialogDimensions.right ||
                    e.clientY < dialogDimensions.top ||
                    e.clientY > dialogDimensions.bottom
                  ) {
                    ref.current.close();
                    setShowModel(false);
                  }
                }}
                className="h-full w-full md:w-1/2 rounded-lg shadow-md"
              >
                <iframe
                  src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ06qvIqkDB_bwuETtmdWaaHiWNXXJwjW63ATtssjEUbaC6pagVf-Rpftfn9DQ7Ev2ZbPhMwvfRb?gv=true"
                  // style="border: 0"
                  width="100%"
                  height="600"
                  frameborder="0"
                ></iframe>
              </dialog>
            )}
          </div>
          <div className="hidden lg:grid grid-cols-1 justify-self-end pt-5">
            <Image src={CloudService} alt="Microsoft azure" />
          </div>
        </div>
        <div className="absolute left-6 bottom-1 lg:right-0 bottom-0">
          <Image src={allServices} alt="services offered" />
        </div>
      </div>

      {/* section 4 */}
      <div>
        <h3 className="text-dark text-xl lg:text-4xl font-semibold lg:font-bold text-center lg:text-left lg:ml-28">
          Testimonials from our students
        </h3>

        <Testimonials />
      </div>
      {/* section 5 */}
      {/* <div className="grid grid-cols-2 mx-40 gap-4 mb-20">
        <div className="flex flex-col items-center justify-center text-center">
          <h3 className="font-bold text-dark text-3xl mb-4">
            Overwhelmed by IT issues?
          </h3>
          <PrimaryButton type="button" width="w-55">
            Get in touch with us
          </PrimaryButton>
        </div>
        <div>
          <Image src={Service} alt="service image" />
        </div>
      </div> */}
    </Layout>
  );
};

export default Services;
