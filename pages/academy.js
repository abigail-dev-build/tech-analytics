import Layout from "../components/layout";
import HeadTag from "../components/headTag";
import Image from "next/image";
import TrainingImage from "../public/pictures/training-image.png";
import Application from "../public/pictures/application.png";
import PrimaryButton from "../components/button";
import CloudSVG from "../public/cloud-svg.svg";
import TrainingSVG from "../public/training-svg.svg";
import InfrastructureSVG from "../public/infrastructure-svg.svg";
import CommunityImage from "../public/pictures/community-image.png";
import Curriculum from "../public/curriculum.svg";
import Architecture from "../public/cloud-architecture.svg";
import Testimonials from "../components/testimonials";

const Academy = () => {
  return (
    <Layout bgColor="bg-offwhite">
      <HeadTag title="Academy" />
      {/* section 1 */}
      <div className="px-8 lg:px-32 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image */}
          <div>
            <Image
              src={TrainingImage}
              alt="training"
              className="w-full h-auto"
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col justify-center">
            <h4 className="font-crimson font-bold text-3xl lg:text-4xl text-dark">
              Building gateway to tech excellence,{" "}
              <br className="hidden lg:block" />
              building minds and big ideas
            </h4>
            <p className="font-hanken font-medium text-xl text-dark mt-5">
              Unlock your potential with cutting-edge courses designed to
              prepare you for tomorrow&apos;s technology challenges.
            </p>

            {/* Application Image - Only visible on large screens */}
            <div className="hidden lg:flex justify-center mt-5">
              <Image
                src={Application}
                alt="application"
                priority
                className="w-auto h-auto"
              />
            </div>
          </div>
        </div>

        {/* Mobile-only Heading */}
        <h6 className="font-crimson font-semibold text-xl text-blue text-center mt-10 lg:hidden">
          Application for January Cohort
        </h6>

        {/* CTA Button */}
        <div className="flex justify-center mt-6">
          <PrimaryButton type="button" width="w-55">
            Join our academy
          </PrimaryButton>
        </div>
      </div>

      {/* section 2 */}
      <div className="mt-14 ">
        <h4 className="font-crimson text-dark font-semibold text-2xl text-center lg:text-3xl">
          Our Commitment to Cloud Excellence
        </h4>
        <p className="font-hanken text-grey font-medium text-sm text-center mx-8 lg:text-lg">
          From startups to enterprises, we help organizations achieve
          unprecedented <br className="hidden lg:block" />
          performance, security, and cost optimization through intelligent cloud
          architecture.
        </p>
        <div className="grid grid-cols-1 gap-y-4 md:grid-cols-3 pt-10 mx-12 lg:mx-40">
          <div className="w-85 h-81 bg-white py-5 px-4">
            <div className="flex justify-center items-center my-4">
              <Image priority src={CloudSVG} alt="cloud services" />
            </div>
            <h6 className="font-crimson font-semibold text-dark text-xl">
              Multi-Cloud Architecture
            </h6>
            <p className="font-hanken font-normal text-grey text-lg pt-2">
              Deploy and manage workloads across leading platforms, ensuring
              optimal performance and redundancy
            </p>
          </div>
          <div className="w-85 h-81 bg-white py-5 px-4">
            <div className="flex justify-center items-center my-4">
              <Image priority src={InfrastructureSVG} alt="infrastructure" />
            </div>
            <h6 className="font-crimson font-semibold text-dark text-xl">
              Infrastructure optimisation
            </h6>
            <p className="font-hanken font-normal text-grey text-lg pt-2">
              Design, migrate, and optimize your cloud infrastructure across
              major platforms, reducing costs by up to 40%
            </p>
          </div>
          <div className="w-85 h-81 bg-white py-5 px-4">
            <div className="flex justify-center items-center my-4">
              <Image priority src={TrainingSVG} alt="training" />
            </div>
            <h6 className="font-crimson font-semibold text-dark text-xl">
              Cloud Computing Training
            </h6>
            <p className="font-hanken font-normal text-grey text-lg pt-2">
              From fundamentals to advanced architecture, gain hands-on
              expertise in today&apos;s leading cloud platforms
            </p>
          </div>
        </div>
      </div>
      {/* section 3 */}
      <div className="bg-sky h-[539px] my-10 grid grid-cols-1 md:grid-cols-2">
        <div className="mx-8 pt-8 content-center lg:pt-0 mx-20">
          <h3 className="font-crimson font-semibold text-dark text-2xl mb-5 lg:text-4xl font-bold">
            Join our Community of Learners
          </h3>
          <p className="font-hanken text-grey font-normal text-sm lg:text-lg">
            Discover endless opportunities at Nest Analytics. Whether
            you&apos;re just starting out or looking to deepen your expertise
            with advanced certifications, we&apos;re here to help you excel in
            the dynamic tech industry. Learn, build, and grow with our vibrant
            community of cloud professionals.
          </p>
          <div className="flex justify-center mt-4">
            <PrimaryButton type="button" width="w-55">
              Register Today
            </PrimaryButton>
          </div>
        </div>
        <div className="pt-4 ml-24">
          <Image src={CommunityImage} alt="community image" />
        </div>
      </div>
      {/* section 4 */}
      <div>
        <h3 className="font-crimson font-semibold text-dark text-xl text-center ml-0 lg:font-bold lg:text-4xl ml-28">
          Testimonials from our students
        </h3>
        <Testimonials />
      </div>
      {/* section 5 */}
      <div className="mx-8 mb-24">
        <h2 className="font-semibold text-blue text-xl text-center mb-10 lg:font-bold lg:text-4xl">
          You could be a cloud professional in 12 weeks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-12 lg:mx-40">
          <div className="grid col-span-5 grid-rows-2">
            <div className="h-[186px] bg-[#FEFFFF] rounded-xl border border-solid border-gray py-4 px-12">
              <div className="flex justify-between ">
                <div className="">
                  <p className="font-crimson font-semibold text-grey text-lg mb-4 lg:text-2xl">
                    Beginner friendly curriculum
                  </p>
                  <p className="font-hanken font-normal text-sm text-grey lg:text-lg">
                    Cloud basics and best practices
                  </p>
                  <p className="font-hanken font-normal text-sm text-grey lg:text-lg">
                    Infrastructure deployment
                  </p>
                  <p className="font-hanken font-normal text-sm text-grey lg:text-lg">
                    Security fundamentals
                  </p>
                  <p className="font-hanken font-normal text-sm text-grey lg:text-lg">
                    Cost optimization strategies
                  </p>
                </div>
                <div className="flex align-center">
                  <Image src={Curriculum} alt="curriculum icon" />
                </div>
              </div>
            </div>
            <div className="h-[186px] bg-[#FEFFFF] rounded-xl border border-solid border-gray py-4 px-12 mt-3">
              <div className="flex justify-between ">
                <div className="">
                  <p className="font-crimson font-semibold text-grey text-lg mb-4 lg:text-2xl">
                    Advanced cloud architecture
                  </p>
                  <p className="font-hanken font-normal text-sm text-grey lg:text-lg">
                    High-availability design
                  </p>
                  <p className="font-hanken font-normal text-sm text-grey lg:text-lg">
                    Disaster recovery
                  </p>
                  <p className="font-hanken font-normal text-sm text-grey lg:text-lg">
                    Performance optimization
                  </p>
                  <p className="font-hanken font-normal text-sm text-grey lg:text-lg">
                    Advanced security protocols
                  </p>
                </div>
                <div className="flex align-center">
                  <Image src={Architecture} alt="cloud-architecture icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block col-span-1"></div>
          <div className="col-span-6 pt-6 lg:pt-24">
            <p className="font-hanken font-medium text-dark text-lg lg:font-semibold text-2xl">
              Learn from industry experts who&apos;ve walked live cloud
              solutions. Our hands-on training transforms theory into practical
              expertise.
            </p>

            <div className="flex justify-center mt-5">
              <PrimaryButton type="button" width="w-55">
                Join our community
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Academy;
