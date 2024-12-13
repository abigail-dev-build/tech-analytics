import { useState } from "react";
import Layout from "../components/layout";
import HeadTag from "../components/headTag";
import Image from "next/image";
import SupportIcon from "../public/support-icon.svg";
import ChatIcon from "../public/chat-icon.svg";
import PhoneIcon from "../public/phone-icon.svg";
import TextInput from "../components/input";
import PrimaryButton from "../components/button";
import PhoneInput, { getCountryCallingCode } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useForm, SubmitHandler } from "react-hook-form"

const Contacts = () => {
  const [value, setValue] = useState();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    const combinedData = { ...data, phonenumber: value };
    console.log(combinedData);
  };

  const services = ["Cloud Services", "Technical Consultation", "WordPress Solution", "Web Development", "Other Services"];
  return (
    <Layout bgColor="bg-offwhite">
      <HeadTag title="Home" />
      <div class="py-14">
        <div class="">
          <h4 class="font-bold text-blue text-center text-4xl">Contact Us</h4>
          <h4 class="font-bold text-grey text-center text-4xl mt-4">
            Get in touch with our team
          </h4>
          <p class="font-medium text-grey text-center text-lg mt-2">
            Contact us using the information below. We will respond promptly to
            your inquiry and feedback
          </p>
        </div>

        <div class="mt-20 mx-28 ">
          <video autoPlay={true} muted loop id="background-video">
            <source src="pictures/contact_video.mp4" type="video/mp4"></source>
            <track
              src="fgsubtitles_en.vtt"
              kind="subtitles"
              srclang="en"
              label="English"
              default
            ></track>
          </video>
          <div class="mt-10 mx-20 flex justify-between">
            <div class="">
              <div class="mb-12">
                <div class="flex gap-4 justify-center">
                  <Image src={SupportIcon} alt="support icon" />
                  <h4 class="text-dark text-4xl font-bold">Support</h4>
                </div>
                <p class="text-grey text-base font-medium text-center mt-2">
                  Our friendly team is here to help
                </p>
                <p class="text-darkgreen text-base font-medium text-center mt-2">
                  support@techanalytics24/7.com
                </p>
              </div>

              <div class="mb-12">
                <div class="flex gap-4 justify-center">
                  <Image src={ChatIcon} alt="chat icon" />
                  <h4 class="text-dark text-4xl font-bold">Chat</h4>
                </div>
                <p class="text-grey text-base font-medium text-center mt-2">
                  Questions or Queries?
                </p>
                <p class="text-darkgreen text-base font-medium text-center mt-2">
                  support@techanalytics24/7.com
                </p>
              </div>

              <div class="mb-12">
                <div class="flex gap-4 justify-center">
                  <Image src={PhoneIcon} alt="phone icon" />
                  <h4 class="text-dark text-4xl font-bold">Phone</h4>
                </div>
                <p class="text-grey text-base font-medium text-center mt-2">
                  Mon-Fri open from 8am-5pm
                </p>
                <p class="text-darkgreen text-base font-medium text-center mt-2">
                  +234 8123 456 7890
                </p>
              </div>
            </div>

            <div class="w-[654px] bg-sky rounded-lg">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div class="pt-4 px-10">
                  <TextInput
                    label="First Name"
                    type="text"
                    id="fname"
                    placeholder="John Matthew"
                    marginBottom="mb-4"
                    ErrorMessage="Enter a valid input"
                    errorId="first-name"
                    {...register("firstname")}
                  />

                  <TextInput
                    label="Email Address"
                    type="email"
                    id="email"
                    placeholder="johndoe@gmail.com"
                    marginBottom="mb-4"
                    ErrorMessage="Enter a valid input"
                    errorId="email-address"
                    {...register("email")}
                  />

                  <div class="mb-4">
                    <PhoneInput
                      placeholder="023xxxxxxxxxxxx"
                      defaultCountry="GB"
                      value={value}
                      onChange={setValue}
                      className="custom-phone-input"
                      countrySelectProps={{
                        className: 'border border-gray-300 rounded-md p-2',
                        children: (country) => `+${getCountryCallingCode(country)} (${country})`,
                      }}
                      
                    />
                  </div>

                  <div class="mb-4">
                    <label class="text-grey text-xl font-medium" for="phone">
                      Message
                    </label>
                    <br />
                    <textarea class="w-full h-[240px] bg-sky outline-0 p-2 border border-gray rounded-lg" {...register("message")}/>
                    <p
                      id="message-error"
                      class="hidden text-red-500 text-sm mt-1"
                    >
                      Please enter a valid message
                    </p>
                  </div>

                  <div class="mb-4">
                    <p class="text-grey text-xl font-medium" for="phone">
                      Services
                    </p>
                    <div class="grid grid-cols-2">
                    {services.map((index) => {
                      return (
                      <div class="flex gap-4 mb-2" key={index}>
                      <input type="radio" name="service" value={index} {...register("service")}/>
                      <label for={index}>{index}</label>
                      </div>
                      )

                    })}

                    </div>
                    <p
                      id="message-error"
                      class="hidden text-red-500 text-sm mt-1"
                    >
                      Please enter a valid message
                    </p>
                    </div>
                </div>
                <div class="w-37 mx-auto mb-10">
                  <PrimaryButton type="submit">Send a Message</PrimaryButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Contacts;
