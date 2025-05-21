import { useState, useRef } from "react";
import Layout from "../components/layout";
import HeadTag from "../components/headTag";
import Image from "next/image";
import SupportIcon from "../public/support-icon.svg";
import ChatIcon from "../public/chat-icon.svg";
import PhoneIcon from "../public/phone-icon.svg";
import TextInput from "../components/input";
import PrimaryButton from "../components/button";
import PhoneInput, { getCountryCallingCode } from "react-phone-number-input";
import en from "react-phone-number-input/locale/en.json";
import "react-phone-number-input/style.css";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contacts = () => {
  const form = useRef();
  const [value, setValue] = useState();

  const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          toast.success("Form submitted successfully");
        },
        (error) => {
          toast.error("This is an error!", error.text);
        }
      );
  };

  return (
    <Layout bgColor="bg-offwhite">
      <HeadTag title="Contacts" />
      <div className="px-8 py-12">
        <div className="">
          <h4 className="font-crimson font-bold text-grey text-center text-xl lg:text-4xl">
            Get in touch with our team
          </h4>
          <p className="font-hanken font-normal text-sm  text-grey text-center mt-2 lg:font-medium lg:text-lg">
            Contact us using the information below. We will respond promptly to
            your inquiry and feedback
          </p>
        </div>

        <div className="mt-5 mx-0 lg:mt-20 mx-28 ">
          {/* aspect-video md:aspect-square */}
          <video autoPlay={true} muted loop id="background-video">
            <source src="pictures/contact_video.mp4" type="video/mp4"></source>
            <track
              src="fgsubtitles_en.vtt"
              kind="subtitles"
              srcLang="en"
              label="English"
              default
            ></track>
          </video>
          <div className="mt-10 mx-0 flex flex-col lg:flex-row justify-between lg:mx-20">
            <div className="">
              <div className="mb-12">
                <div className="flex gap-4 justify-center">
                  <Image src={SupportIcon} alt="support icon" />
                  <h4 className="font-crimson text-dark text-xl font-semibold lg:text-4xl font-bold">
                    Support
                  </h4>
                </div>
                <p className="font-hanken text-grey text-base font-medium text-center mt-2">
                  Our friendly team is here to help
                </p>
                <p className="font-hanken text-blue text-base font-medium text-center mt-2">
                  info@nestanalytics.org
                </p>
              </div>

              <div className="mb-12">
                <div className="flex gap-4 justify-center">
                  <Image src={ChatIcon} alt="chat icon" />
                  <h4 className="font-crimson text-dark text-xl font-semibold lg:text-4xl font-bold">
                    Chat
                  </h4>
                </div>
                <p className="font-hanken text-grey text-base font-medium text-center mt-2">
                  Questions or Queries?
                </p>
                <p className="font-hanken text-blue text-base font-medium text-center mt-2">
                  info@nestanalytics.org
                </p>
              </div>

              <div className="mb-12">
                <div className="flex gap-4 justify-center">
                  <Image src={PhoneIcon} alt="phone icon" />
                  <h4 className="font-crimson text-dark text-xl font-semibold lg:text-4xl font-bold">
                    Phone
                  </h4>
                </div>
                <p className="font-hanken text-grey text-base font-medium text-center mt-2">
                  Mon-Fri open from 8am-5pm
                </p>
                <p className="font-hanken text-blue text-base font-medium text-center mt-2">
                  +234 8123 456 7890
                </p>
              </div>
            </div>

            <div className="w-full bg-sky rounded-lg lg:w-[654px]">
              <Toaster position="top-center" reverseOrder={false} />
              <form ref={form} onSubmit={sendEmail}>
                <div className="pt-4 px-4 lg:px-10">
                  <TextInput
                    label="Full Name"
                    type="text"
                    id="fname"
                    name="name"
                    placeholder="John Matthew"
                    marginBottom="mb-4"
                    ErrorMessage="Enter a valid input"
                    errorId="first-name"
                  />

                  <TextInput
                    label="Email Address"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="johndoe@gmail.com"
                    marginBottom="mb-4"
                    ErrorMessage="Enter a valid input"
                    errorId="email-address"
                  />

                  <div className="mb-4 w-full">
                    <PhoneInput
                      placeholder="023xxxxxxxx"
                      defaultCountry="GB"
                      // international
                      name="phone_number"
                      withCountryCallingCode
                      value={value}
                      onChange={setValue}
                      labels={en}
                      className="custom-phone-input"
                      countrySelectProps={{
                        getOptionLabel: (country) =>
                          `${en[country]} (+${getCountryCallingCode(country)})`, // shown in dropdown
                      }}
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      className="text-grey text-xl font-medium"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <br />
                    <textarea
                      name="message"
                      className="w-full h-[240px] bg-sky outline-0 p-2 border border-gray rounded-lg"
                    />
                    <p
                      id="message-error"
                      className="hidden text-red-500 text-sm mt-1"
                    >
                      Please enter a valid message
                    </p>
                  </div>
                </div>
                <div className="w-37 mx-auto mb-10">
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
